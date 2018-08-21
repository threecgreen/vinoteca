/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />

export class Grape extends GraphModel {
    public id: number;
    public name: string;

    constructor(id: number) {
        super();
        this.id = id;
        $.getJSON("/rest/grape/", {id}, (responseJSON) => {
            this.name = responseJSON["name"];
        });
    }
}
