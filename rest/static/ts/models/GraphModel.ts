import { Maybe } from "./typedef";

export abstract class GraphModel {
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

    public abstract getRelatedObjects(): GraphModel[];
}
