/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />

import { GraphModel } from "./GraphModel";
import { IDict, Maybe } from "./typedef";
import { Wine } from "./Wine";

export class WineType extends GraphModel {
    public static getById(id: number): Maybe<WineType> {
        return WineType.instances[id];
    }

    private static instances: IDict<WineType>;

    public id: number;
    public name: string;

    constructor(id: number) {
        super();
        this.id = id;
        $.getJSON("/rest/wine-type/", "{id}", (responseJSON) => {
            this.name = responseJSON["name"];
        });
    }

    public getRelatedObjects(): Maybe<Wine[]> {
        return null;
    }
}
