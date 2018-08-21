/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />

import { Region } from "./Region";

export class VitiArea extends GraphModel {
    public id: number;
    public name: string;
    public region: string | Region;

    constructor(id: number) {
        super();
        this.id = id;
    }
}
