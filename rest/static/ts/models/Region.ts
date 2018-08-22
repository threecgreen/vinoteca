/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />

export class Region {
    public id: number;
    public name: string;
    public isUS: boolean;

    constructor(id: number) {
        this.id = id;
        $.getJSON("/rest/region/", {id}, (responseJSON) => {
            this.name = responseJSON["name"];
            this.isUS = responseJSON["is_us"];
        });
    }
}
