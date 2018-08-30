/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />

import { GraphModel } from "./GraphModel";
import { Producer } from "./Producer";
import { IDict, Maybe } from "./typedef";
import { Wine } from "./Wine";

export class Color extends GraphModel {

    public static getById(id: number): Maybe<Color> {
        return Color.instances[id];
    }

    private static instances: IDict<Color>;

    public id: number;
    public name: string;

    constructor(id: number) {
        super();
        this.id = id;
        $.getJSON("/rest/color/", {id}, (responseJSON) => {
            this.name = responseJSON["name"];
        });
        Color.instances[id] = this;
    }

    public getRelatedObjects(): Wine[] {
        return Producer.assembleNonNulled(this.fetchWines());
    }

    public fetchWines(): Wine[] {
        return null;
    }
}
