import { VinotecaError } from "generated/rest";
import { hasOwnProperty } from "./utils";

type Inner<T, E> =
    | { type: "ok", value: T }
    | { type: "err", value: E };

export type RestResult<T> = Result<T, VinotecaError>;

export class Result<T, E extends object> {
    public static Ok<T, E extends object>(value: T): Result<T, E> {
        return new Result({ type: "ok", value });
    }

    public static Err<T, E extends object>(value: E): Result<T, E> {
        return new Result({ type: "err", value });
    }

    private constructor(private inner: Inner<T, E>) {
    }

    public isOk() {
        return this.inner.type === "ok";
    }

    public isErr() {
        return this.inner.type === "err";
    }

    public map<U>(fun: (v: T) => U): Result<U, E> {
        if (this.inner.type === "ok") {
            return Result.Ok(fun(this.inner.value));
        }
        return Result.Err(this.inner.value);
    }

    public mapErr<F extends object>(fun: (v: E) => F): Result<T, F> {
        if (this.inner.type === "err") {
            return Result.Err(fun(this.inner.value));
        }
        return Result.Ok(this.inner.value);
    }

    public do(fun: (v: T) => void): Result<T, E> {
        if (this.inner.type === "ok") {
            fun(this.inner.value);
        }
        return this;
    }

    public doErr(fun: (v: E) => void): Result<T, E> {
        if (this.inner.type === "err") {
            fun(this.inner.value);
        }
        return this;
    }

    public bind<U>(fun: (v: T) => Result<U, E>): Result<U, E> {
        if (this.inner.type === "ok") {
            return fun(this.inner.value);
        }
        return Result.Err(this.inner.value);
    }

    public unwrap(): T {
        if (this.inner.type === "ok") {
            return this.inner.value;
        }
        // VinotecaError specialization
        if (hasOwnProperty(this.inner.value, "type")
            && hasOwnProperty(this.inner.value, "message")) {
            throw new Error(`${this.inner.value.type}: ${this.inner.value.message}`)
        }
        // Any other error
        throw this.inner.value;
    }

    public unwrapOr(defaultVal: T | (() => T)): T {
        if (this.inner.type === "ok") {
            return this.inner.value;
        }
        if (defaultVal instanceof Function) {
            return defaultVal();
        }
        return defaultVal;
    }

    public unwrapErr(): E {
        if (this.isErr()) {
            return this.inner.value as E;
        }
        throw new Error("Tried to unwrapErr with Ok Result");
    }
}
