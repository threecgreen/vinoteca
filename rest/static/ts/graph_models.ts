/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />

export class Color {
    public id: number;
    public name: string;

    constructor(id: number) {
        this.id = id;
        $.getJSON("/rest/color/", {id}, (responseJSON) => {
            this.name = responseJSON["name"];
        });
    }
}

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

export class Grape {
    public id: number;
    public name: string;

    constructor(id: number) {
        this.id = id;
        $.getJSON("/rest/grape/", {id}, (responseJSON) => {
            this.name = responseJSON["name"];
        });
    }
}

export class Producer {
    public id: number;
    public name: string;
    public region: number | Region;

    constructor(id: number) {
        this.id = id;
        $.getJSON("/rest/producer/", {id}, (responseJSON) => {
            this.name = responseJSON["name"];
            this.region = responseJSON["name"];
        });
    }
}

export class VitiArea {
    public id: number;
    public name: string;
    public region: string | Region;

    constructor(id: number) {
        this.id = id;
    }
}

export class WineGrape {
    // Since this class represents an edge rather than a node, all data should have
    // already been retrieved
    constructor(public id: number, public grape: Grape, public wine: Wine,
                public percent: number) {
    }
}

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

export class Wine {
    public id: number;
    public name: string;
    public producer: number | Producer;
    public wineType: WineType;
    public color: number | Color;
    public vitiArea: number | VitiArea;

    constructor(id: number, name: string, producer: number, wineType: number,
                color: number, vitiArea: number) {
        this.id = id;
        this.name = name;
        this.producer = producer;
        // Always fetch wine_type since it is part of the full name (name + type)
        this.wineType = new WineType(wineType);
        this.color = color;
        this.vitiArea = vitiArea;
    }

    public fullName() {
        return this.name ? `${this.name} ${this.wineType.name}` : this.wineType.name;
    }

    public fetchProducer() {
        if (!(this.producer instanceof Producer)) {
            this.producer = new Producer(this.producer as number);
        }
    }

    // TODO: fetch grape composition data and create WineGrape and Grape objects
    // get_grapes() {
    // }
}
