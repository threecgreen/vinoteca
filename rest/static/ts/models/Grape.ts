/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />

import { GraphModel } from "./GraphModel";
import { IDict, Maybe } from "./typedef";
import { WineGrape } from "./WineGrape";

export class Grape extends GraphModel {
    public static getById(id: number): Maybe<Grape> {
        return Grape.instances[id];
    }

    private static instances: IDict<Grape>;
    public id: number;
    public name: string;

    constructor(id: number) {
        super();
        this.id = id;
        $.getJSON("/rest/grape/", {id}, (responseJSON) => {
            this.name = responseJSON.items[0]["name"];
        });
        Grape.instances[id] = this;
    }

    public getRelatedObjects(): Maybe<WineGrape[]> {
        // return WineGrape.getByGrapeId(this.id);
        return null;
    }
}
