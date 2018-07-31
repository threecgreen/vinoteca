/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />

export class Color {
    public id: number
    public name: string

    constructor(id: number) {
        this.id = id;
        $.getJSON("/rest/color/", { "id": id }, responseJSON => {
            this.name = responseJSON["name"];
        });
    }
}

export class Region {
    public id: number
    public name: string
    public is_us: boolean

    constructor(id: number, name: string, is_us: boolean) {
        this.id = id;
        $.getJSON("/rest/region/", { "id": id }, responseJSON => {
            this.name = responseJSON["name"];
            this.is_us = responseJSON["is_us"];
        })
    }
}

export class Grape {
    public id: number
    public name: string

    constructor(id: number) {
        this.id = id;
        $.getJSON("/rest/grape/", {"id": id}, responseJSON => {
            this.name = responseJSON["name"];
        });
    }
}

export class Producer {
    public id: number
    public name: string
    public region: number | Region

    constructor(id: number) {
        this.id = id;
        $.getJSON("/rest/producer/", {"id": id}, responseJSON => {
            this.name = responseJSON["name"];
            this.region = responseJSON["name"];
        });
    }
}

export class VitiArea {
    public id: number
    public name: string
    public region: string|Region

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
    public id: number
    public name: string

    constructor(id: number) {
        this.id = id;
        $.getJSON("/rest/wine-type/", { "id": id }, responseJSON => {
            this.name = responseJSON["name"]
        });
    }
}

export class Wine {
    public id: number
    public name: string
    public producer: number | Producer
    public wine_type: WineType
    public color: number | Color
    public viti_area: number | VitiArea

    constructor(id: number, name: string, producer: number, wine_type: number,
        color: number, viti_area: number) {

        this.id = id;
        this.name = name;
        this.producer = producer;
        // Always fetch wine_type since it is part of the full name (name + type)
        this.wine_type = new WineType(wine_type);
        this.color = color;
        this.viti_area = viti_area;
    }

    full_name() {
        return this.name ? `${this.name} ${this.wine_type.name}` : this.wine_type.name;
    }

    fetch_producer() {
        if (!typeof(this.producer, Producer)) {
            this.producer = new Producer(<number>this.producer);
        }
    }

    // TODO: fetch grape composition data and create WineGrape and Grape objects
    // get_grapes() {
    // }
}
