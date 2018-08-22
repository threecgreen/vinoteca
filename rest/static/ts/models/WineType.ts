/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />

export class WineType {
    public id: number;
    public name: string;

    constructor(id: number) {
        this.id = id;
        $.getJSON("/rest/wine-type/", "{id}", (responseJSON) => {
            this.name = responseJSON["name"];
        });
    }
}
