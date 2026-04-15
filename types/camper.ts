export interface Camper {
    id: string;
    name: string;
    price: number;
    rating: number;
    location: string;
    description: string;
    form: CarForm;
    length: string;
    width: string;
    height: string;
    tank: string;
    consumption: string;
    transmission: CarTransmission;
    engine: CarEngine;
    AC: boolean;
    bathroom: boolean;
    kitchen: boolean;
    TV: boolean;
    radio: boolean;
    refrigerator: boolean;
    microwave: boolean;
    gas: boolean;
    water: boolean;
    gallery: CarGallery[];
    reviews: CarReview[];
}

export type CarForm = "alcove" | "panel_van" | "integrated" | "semi_integrated";
export type CarTransmission = "automatic" | "manual";
export type CarEngine = "diesel" | "petrol" | "hybrid" | "electric";

export interface CarGallery {
    thumb: string;
    original: string;
}

export interface CarReview {
    reviewer_name: string,
    reviewer_rating: number,
    comment: string,
}

export interface CampersResponse {
    items: Camper[];
    total: number;
}

export interface CamperFilters {
    form?: CarForm;
    engine?: CarEngine;
    transmission?: CarTransmission;
}