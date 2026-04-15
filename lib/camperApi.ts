import {Camper, CamperFilters, CampersResponse, CarReview} from "@/types/camper";
import {nextServer} from "@/lib/api";


export interface BookingPayload{
    name: string;
    email: string;
}

export const getAllCampers = async (filters: CamperFilters = {}): Promise<CampersResponse> => {
    const { data } = await nextServer.get<CampersResponse>('/campers', {
        params: filters,
    });
    return data;
};

export const getCamperById = async (id: string): Promise<Camper> => {
    const { data } = await nextServer.get<Camper>(`/campers/${id}`);
    return data;
};

export const getCamperReviews = async (id: string): Promise<CarReview[]> => {
    const { data } = await nextServer.get<Camper>(`/campers/${id}`);
    return data.reviews;
};

export const sendBooking = async (id: string, bookingData: BookingPayload) => {
    const { data } = await nextServer.post(`/campers/${id}/booking-request`, bookingData);
    return data;
};