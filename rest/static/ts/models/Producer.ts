/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />

import { GraphModel } from "./GraphModel.js";
import { Region } from "./Region.js";
import { IDict, Maybe } from "./typedef.js";
import { Wine } from "./Wine.js";

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

    public fullId(): string {
        return `p-${this.id}`;
    }

    public fetchRegion() {
        if (!(this.region instanceof Region)) {
            $.getJSON("/rest/producer/", {id: this.id}, (responseJSON) => {
                const producer = responseJSON.items[0];
                this.name = producer["name"];
                this.region = producer["region"];
            });
        }
    }
}
