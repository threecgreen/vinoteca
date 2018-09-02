/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />

import { Color } from "./Color.js";
import { GraphModel } from "./GraphModel.js";
import { Producer } from "./Producer.js";
import { IDict, Maybe } from "./typedef.js";
import { VitiArea } from "./VitiArea.js";
import { WineGrape } from "./WineGrape.js";
import { WineType } from "./WineType.js";

type associatedModels = Producer | WineType | Color | VitiArea | WineGrape;

export class Wine extends GraphModel {
    public static getById(id: number): Maybe<Wine> {
        return Wine.instances[id];
    }

    private static instances: IDict<Wine>;

    public readonly id: number;
    public name: string;
    public producer: number | Producer;
    public wineType: WineType;
    public color: number | Color;
    public vitiArea: number | VitiArea;

    constructor(id: number) {
        super();
        this.id = id;
        $.getJSON("/rest/wine/", {id}, (responseJSON) => {

            const wine = responseJSON[0];
            this.name = wine["name"];
            this.producer = wine["producer"];
            // Always fetch wine_type since it is part of the full name (name + type)
            this.wineType = new WineType(wine["producer"]);
            this.color = wine["color"];
            this.vitiArea = wine["viti_area"];
        });
    }

    public label() {
        if (this.wineType === null) {
            setTimeout(this.label(), 500);
        }
        return this.name ? `${this.name} ${this.wineType.name}` : this.wineType.name;
    }

    public getRelatedObjects(): associatedModels[] {
        this.fetchProducer();
        this.fetchWineType();
        this.fetchColor();
        this.fetchVitiArea();
        // TODO: fetchWineGrapes
        return Wine.assembleNonNulled([this.producer, this.color, this.vitiArea,
                                       this.wineType]);
    }

    public fullId(): string {
        return `w-${this.id}`;
    }

    public fetchProducer() {
        if (!(this.producer instanceof Producer)) {
            this.producer = new Producer(this.producer as number);
        }
    }

    public fetchWineType() {
        if (!(this.wineType instanceof WineType)) {
            this.wineType = new WineType(this.wineType as number);
        }
    }

    public fetchColor() {
        if (!(this.color instanceof Color)) {
            this.color = new Color(this.color as number);
        }
    }

    public fetchVitiArea() {
        if (!(this.vitiArea instanceof VitiArea)) {
            this.vitiArea = new VitiArea(this.vitiArea as number);
        }
    }
}
