type Inner<T> =
    | {type: "some", value: T}
    | {type: "none"};

export class Option<T> {
    public static Some<T>(value: T): Option<T> {
        return new Option({type: "some", value});
    }

    public static None<T>(): Option<T> {
        return new Option({type: "none"});
    }

    private constructor(private inner: Inner<T>) {
    }

    public isSome() {
        return this.inner.type === "some";
    }

    public isNone() {
        return this.inner.type === "none";
    }

    public map<U>(fun: (v: T) => U): Option<U> {
        if (this.inner.type === "some") {
            return Option.Some(fun(this.inner.value));
        }
        return Option.None();
    }

    public bind<U>(fun: (v: T) => Option<U>): Option<U> {
        if (this.inner.type === "some") {
            return fun(this.inner.value);
        }
        return Option.None();
    }

    public unwrap(): T {
        if (this.inner.type === "some") {
            return this.inner.value;
        }
        throw new Error("Tried to unwrap None Option");
    }
}
