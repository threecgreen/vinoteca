import { VinotecaError } from "./api/Rest";

type Inner<T, E> =
    | {type: "ok", value: T}
    | {type: "err", value: E};

export type RestResult<T> = Result<T, VinotecaError>;

export class Result<T, E> {
    public static Ok<T, E>(value: T): Result<T, E> {
        return new Result({type: "ok", value});
    }

    public static Err<T, E>(value: E): Result<T, E> {
        return new Result({type: "err", value});
    }

    private constructor(private inner: Inner<T, E>) {
    }

    public get isOk() {
        return this.inner.type === "ok";
    }

    public get isErr() {
        return this.inner.type === "err";
    }

    public map<U>(fun: (v: T) => U): Result<U, E> {
        if (this.inner.type === "ok") {
            return Result.Ok(fun(this.inner.value));
        }
        return Result.Err(this.inner.value);
    }

    public mapErr<F>(fun: (v: E) => F): Result<T, F> {
        if (this.inner.type === "err") {
            return Result.Err(fun(this.inner.value));
        }
        return Result.Ok(this.inner.value);
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
        throw this.inner.value;
    }

    public unwrapOr(defaultVal: T | (() => T)): T {
        if (this.inner.type === "ok") {
            return this .inner.value;
        }
        if (defaultVal instanceof Function) {
            return defaultVal();
        }
        return defaultVal;
    }
}
