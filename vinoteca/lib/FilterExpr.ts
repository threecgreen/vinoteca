type BinaryPred = (l: any, r: any) => boolean;
const operators: Map<string, BinaryPred> = new Map();
operators.set("==", (l, r) => l === r);
operators.set("=", (l, r) => l === r);
operators.set("<>", (l, r) => l !== r);
operators.set("!=", (l, r) => l !== r);
operators.set("<=", (l, r) => l <= r);
operators.set("<", (l, r) => l < r);
operators.set(">=", (l, r) => l >= r);
operators.set(">", (l, r) => l > r);
operators.set("INCLUDES", (l, r) => new String(l).toLowerCase().includes(r))

export default class FilterExpr {
    public static parse(expr: string): FilterExpr {
        if (operators.has(expr.substr(0, 2))) {
            return new FilterExpr(expr.substr(0, 2), eval(expr.substr(2)));
        } if (operators.has(expr[0])) {
            return new FilterExpr(expr[0], eval(expr.substr(1)));
        }
        return new FilterExpr("INCLUDES", expr);
    }

    public static fromJson(json: string): FilterExpr {
        const obj = JSON.parse(json);
        return new FilterExpr(obj.funName, obj.rhs);
    }

    private constructor(private readonly funName: string, private readonly rhs: any) {
    }

    public call(val: string | number): boolean {
        const operatorFun = operators.get(this.funName)!;
        return operatorFun(val, this.rhs);
    }

    /**
     * Return the JSON equivalent of this `FilterExpr`
     */
    public toJson(): string {
        return JSON.stringify(this);
    }

    /**
     * Return the plaintext string equivalent of this object
     */
    public toString(): string {
        if (this.funName === "INCLUDES") {
            return this.rhs;
        }
        return this.funName + this.rhs;
    }
}
