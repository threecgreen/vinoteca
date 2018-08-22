/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />

import { GraphModel } from "./GraphModel";
import { IDict } from "./typedef";

export class Grape extends GraphModel {
    private static instances: IDict<Grape>;
    public id: number;
    public name: string;

    constructor(id: number) {
        super();
        this.id = id;
        $.getJSON("/rest/grape/", {id}, (responseJSON) => {
            this.name = responseJSON["name"];
        });
        Grape.instances[id] = this;
    }

    public getById(id: number): Grape {
        return Grape.instances[id];
    }
}
