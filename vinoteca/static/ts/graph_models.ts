export interface Color {
    id: number
    color: string
}

export interface Region {
    id: number
    name: string
    is_us: boolean
}

export interface Grape {
    id: number
    name: string
}

export interface Producer {
    id: number
    name: string
    region_id: number
}

export interface VitiArea {
    id: number
    name: string
}

export interface WineGrape {
    id: number
    wine_id: number
    grape_id: number
}

export interface WineType {
    id: number
    type_name: string
}

export interface Wine {
    id: number
    name: string
    producer_id: number
    wine_type_id: number
    wine_type: string
    color_id: number
    viti_area_id: number
}
