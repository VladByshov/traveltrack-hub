import {Camper, CampersParams, CampersResponse, CamperReview} from "@/types/camper";
import {nextServer} from "@/lib/api/api";


export interface BookingPayload{
    name: string;
    email: string;
}

export const getAllCampers = async (params: CampersParams = {page:1 , perPage:4}): Promise<CampersResponse> => {
    const { data } = await nextServer.get<CampersResponse>('/campers', {
        params
    });
    return data;
};

export const getCamperById = async (id: string): Promise<Camper> => {
    const { data } = await nextServer.get<Camper>(`/campers/${id}`);
    return data;
};

export const getCamperReviews = async (id: string): Promise<CamperReview[]> => {
    const { data } = await nextServer.get<CamperReview[]>(`/campers/${id}/reviews`);
    return data;
};

export const sendBooking = async (id: string, bookingData: BookingPayload) => {
    const { data } = await nextServer.post(`/campers/${id}/booking-requests`, bookingData);
    return data;
};