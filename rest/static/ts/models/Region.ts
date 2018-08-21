/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />

export class Region extends GraphModel {
    public id: number;
    public name: string;
    public isUS: boolean;

    constructor(id: number) {
        super();
        this.id = id;
        $.getJSON("/rest/region/", {id}, (responseJSON) => {
            this.name = responseJSON["name"];
            this.isUS = responseJSON["is_us"];
        });
    }
}
