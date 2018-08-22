/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />

import { Region } from "./Region";

export class VitiArea {
    public id: number;
    public name: string;
    public region: string | Region;

    constructor(id: number) {
        this.id = id;
    }
}
