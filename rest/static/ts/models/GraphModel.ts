export abstract class GraphModel {
    public abstract getById(id: number): GraphModel;
    public abstract getRelatedObjects(): GraphModel[];
}
