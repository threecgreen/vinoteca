/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />

import { GraphModel } from "./GraphModel.js";
import { IDict, Maybe } from "./typedef.js";
import { Wine } from "./Wine.js";

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
        $.getJSON("/rest/wine-type/", {id}, (responseJSON) => {
            this.name = responseJSON[0]["name"];
        });
    }

    public getRelatedObjects(): Maybe<Wine[]> {
        return null;
    }

    public fullId(): string {
        return `wt-${this.id}`;
    }
}
