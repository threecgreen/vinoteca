/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />

import { GraphModel } from "./GraphModel";
import { Region } from "./Region";
import { IDict, Maybe } from "./typedef";
import { Wine } from "./Wine";

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
}
