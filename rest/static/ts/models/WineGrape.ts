/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />

import { Grape } from "./Grape";
import { GraphModel } from "./GraphModel";
import { IDict, Maybe } from "./typedef";
import { Wine } from "./Wine";

export class WineGrape extends GraphModel {
    public static getById(id: number): Maybe<WineGrape> {
        return WineGrape.instances[id];
        // TODO: hit database
    }

    public static getByGrapeId(grapeId: number): Maybe<WineGrape[]> {
        return null;
    }

    private static instances: IDict<WineGrape>;

    // Since this class represents an edge rather than a node, all data should have
    // already been retrieved
    constructor(public id: number, public grape: Grape, public wine: Wine,
                public percent: number) {
        super();
        WineGrape.instances[id] = this;
    }

    public getRelatedObjects(): Grape[] {
        // TODO: add wine back in
        return [this.grape];
    }
}
