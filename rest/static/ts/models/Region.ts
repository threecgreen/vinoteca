/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />

import { GraphModel } from "./GraphModel";
import { Producer } from "./Producer";
import { IDict, Maybe } from "./typedef";
import { VitiArea } from "./VitiArea";

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
            this.name = responseJSON["name"];
            this.isUS = responseJSON["is_us"];
        });
        Region.instances[id] = this;
    }

    public getRelatedObjects(): Array<Producer | VitiArea> {
        return null;
    }
}
