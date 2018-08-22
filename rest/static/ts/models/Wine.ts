/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />

import { Color } from "./Color";
import { Producer } from "./Producer";
import { VitiArea } from "./VitiArea";
import { WineType } from "./WineType";

export class Wine {
    public readonly id: number;
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
