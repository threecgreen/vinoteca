/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />

import { GraphModel } from "./GraphModel.js";
import { Producer } from "./Producer.js";
import { IDict, Maybe } from "./typedef.js";
import { VitiArea } from "./VitiArea.js";

export class Region extends GraphModel {
    public static getById(id: number): Maybe<Region> {
        return Region.instances[id];
    }

    private static instances: IDict<Region>;

    public id: number;
    public name: string;
    public isUS: boolean;

    constructor(id: number) {
        super();
        this.id = id;
        $.getJSON("/rest/region/", {id}, (responseJSON) => {
            const region = responseJSON.items[0];
            this.name = region["name"];
            this.isUS = region["is_us"] === 1;
        });
        Region.instances[id] = this;
    }

    public getRelatedObjects(): Array<Producer | VitiArea> {
        return null;
    }

    public fullId(): string {
        return `r-${this.id}`;
    }
}
