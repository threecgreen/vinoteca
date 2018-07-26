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
    region: number
}

export interface VitiArea {
    id: number
    name: string
}

export interface WineGrape {
    id: number
    wine: number
    grape: number
}

export interface WineType {
    id: number
    type_name: string
}

export interface Wine {
    id: number
    name: string
    producer: number
    wine_type: number
    color: number
    viti_area: number
}
