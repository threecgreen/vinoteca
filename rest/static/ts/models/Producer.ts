/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />

import { GraphModel } from "./GraphModel";
import { Region } from "./Region";
import { IDict, Maybe } from "./typedef";
import { Wine } from "./Wine";

export class Producer extends GraphModel {
    public static getById(id: number): Maybe<Producer> {
        return Producer.instances[id];
    }

    private static instances: IDict<Producer>;

    public readonly id: number;
    public name: string;
    public region: number | Region;

    constructor(id: number) {
        super();
        this.id = id;
        Producer.instances[id] = this;
    }

    public getRelatedObjects(): Array<Region | Wine> {
        this.fetchRegion();
        return Producer.assembleNonNulled([this.region]);
    }

    public fetchRegion() {
        if (!(this.region instanceof Region)) {
            $.getJSON("/rest/producer/", {id: this.id}, (responseJSON) => {
                this.name = responseJSON["name"];
                this.region = responseJSON["region"];
            });
        }
    }
}
