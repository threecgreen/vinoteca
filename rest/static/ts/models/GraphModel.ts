import { Maybe } from "./typedef.js";

export abstract class GraphModel {
    // @ts-ignore
    public static getById(id: number): Maybe<GraphModel> {
        return null;
    }

    protected static assembleNonNulled<T>(models: Array<number | T | null>): T[] {
        const nonNulledModels = [];
        for (const element of models) {
            if (element instanceof GraphModel) {
                nonNulledModels.push(element);
            }
        }
        return nonNulledModels;
    }

    public readonly id: number;
    public name: string;

    public label(): string {
        return this.name;
    }

    public displayColor(): string {
        return "#555";
    }

    public abstract getRelatedObjects(): GraphModel[];
    public abstract fullId(): string;
}
