import { VinotecaError } from "generated/rest";

type Inner<T, E> =
    | { type: "ok", value: T }
    | { type: "err", value: E };

export type RestResult<T> = Result<T, VinotecaError>;

export class Result<T, E extends Record<string, unknown>> {
    public static Ok<T, E extends Record<string, unknown>>(value: T): Result<T, E> {
        return new Result<T, E>({ type: "ok", value });
    }

    public static Err<T, E extends Record<string, unknown>>(value: E): Result<T, E> {
        return new Result<T, E>({ type: "err", value });
    }

    private constructor(private inner: Inner<T, E>) {
    }

    public isOk(): boolean {
        return this.inner.type === "ok";
    }

    public isErr(): boolean {
        return this.inner.type === "err";
    }

    public map<U>(fun: (v: T) => U): Result<U, E> {
        if (this.inner.type === "ok") {
            return Result.Ok(fun(this.inner.value));
        }
        return Result.Err(this.inner.value);
    }

    public mapErr<F extends Record<string, unknown>>(fun: (v: E) => F): Result<T, F> {
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
        if ("type" in this.inner.value && "message" in this.inner.value) {
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
