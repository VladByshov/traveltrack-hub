export interface Camper {
    id: string;
    name: string;
    price: number;
    rating: number;
    location: string;
    description: string;
    form: CamperForm;
    length: string;
    width: string;
    height: string;
    tank: string;
    consumption: string;
    transmission: CamperTransmission;
    engine: CamperEngine;
    AC: boolean;
    bathroom: boolean;
    kitchen: boolean;
    TV: boolean;
    radio: boolean;
    refrigerator: boolean;
    microwave: boolean;
    gas: boolean;
    water: boolean;
    gallery: CamperGallery[];
    reviews: CamperReview[];
    totalReviews:number;
    coverImage:string;
}

export type CamperForm = "alcove" | "panel_van" | "integrated" | "semi_integrated";
export type CamperTransmission = "automatic" | "manual";
export type CamperEngine = "diesel" | "petrol" | "hybrid" | "electric";

export interface CamperGallery {
    thumb: string;
    original: string;
}

export interface CamperReview {
    reviewer_name: string,
    reviewer_rating: number,
    comment: string,
}

export interface CampersResponse {
    campers: Camper[];
    total: number;
    totalPages:number;
}

export interface CamperFilters {
    location: string;
    form: CamperForm;
    engine: CamperEngine;
    transmission: CamperTransmission;
}

export interface CampersParams extends Partial<CamperFilters>{
    page: number;
    perPage: number;
}