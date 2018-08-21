/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />

import { Grape } from "./Grape";
import { Wine } from "./Wine";

export class WineGrape extends GraphModel {
    // Since this class represents an edge rather than a node, all data should have
    // already been retrieved
    constructor(public id: number, public grape: Grape, public wine: Wine,
                public percent: number) {
        super();
    }
}
