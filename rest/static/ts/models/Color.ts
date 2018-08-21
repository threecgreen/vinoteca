/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />

export class Color extends GraphModel {
    public id: number;
    public name: string;

    constructor(id: number) {
        super();
        this.id = id;
        $.getJSON("/rest/color/", {id}, (responseJSON) => {
            this.name = responseJSON["name"];
        });
    }
}
