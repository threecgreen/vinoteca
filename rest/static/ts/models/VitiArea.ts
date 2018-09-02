/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />

import { GraphModel } from "./GraphModel.js";
import { Region } from "./Region.js";
import { IDict, Maybe } from "./typedef.js";
import { Wine } from "./Wine.js";

export class VitiArea extends GraphModel {
    public static getById(id: number): Maybe<VitiArea> {
        return VitiArea.instances[id];
    }

    private static instances: IDict<VitiArea>;

    public id: number;
    public name: string;
    public region: string | Region;

    constructor(id: number) {
        super();
        this.id = id;
        VitiArea.instances[id] = this;
    }

    public getRelatedObjects(): Maybe<Array<Wine | Region>> {
        return null;
    }

    public fullId(): string {
        return `va-${this.id}`;
    }
}
