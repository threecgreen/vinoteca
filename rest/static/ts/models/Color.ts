/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />

import { GraphModel } from "./GraphModel.js";
import { Producer } from "./Producer.js";
import { IDict, Maybe } from "./typedef.js";
import { Wine } from "./Wine.js";

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
            this.name = responseJSON.items[0]["name"];
        });
        Color.instances[id] = this;
    }

    public getRelatedObjects(): Wine[] {
        return Producer.assembleNonNulled(this.fetchWines());
    }

    public fullId(): string {
        return `c-${this.id}`;
    }

    public fetchWines(): Wine[] {
        return null;
    }
}
