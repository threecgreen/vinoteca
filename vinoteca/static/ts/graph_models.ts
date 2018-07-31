class Color {
    public id: number
    public name: string

    constructor(id: number) {
        this.id = id;
        $.getJSON("/graph/rest/color/", {"id": id}, responseJSON => {
            this.name = responseJSON["name"];
        });
    }
}

class Region {
    public id: number
    public name: string
    public is_us: boolean

    constructor(id: number, name: string, is_us: boolean) {
        this.id = id;
        $.getJSON("/graph/rest/region/", {"id": id}, responseJSON => {
            this.name = responseJSON["name"];
            this.is_us = responseJSON["is_us"];
        })
    }
}

class Grape {
    constructor(id: number, name: string) {
    }
}

class Producer {
    region: number|Region
    constructor(id: number, name: string, region: number) {
    }
}

class VitiArea {
    constructor(id: number, name: string) {
    }
}

class WineGrape {
    wine: number|Wine
    grape: number|Grape
    constructor(id: number, wine: number, grape: number) {
    }
}

class WineType {
    constructor(id: number, name: string) {
    }
}

class Wine {
    producer: number|Producer
    wine_type: number|WineType
    color: number|Color
    viti_area: number|VitiArea
    constructor(id: number, name: string, producer: number, wine_type: number,
        color: number, viti_area: number) {
    }
}
