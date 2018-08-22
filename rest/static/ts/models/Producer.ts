/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />

import { Region } from "./Region";

export class Producer {
    public id: number;
    public name: string;
    public region: number | Region;

    constructor(id: number) {
        this.id = id;
        $.getJSON("/rest/producer/", {id}, (responseJSON) => {
            this.name = responseJSON["name"];
            this.region = responseJSON["region"];
        });
    }
}
