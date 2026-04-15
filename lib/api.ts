import axios from "axios";

export const nextServer = axios.create({
    baseURL: "https://campers-api.goit.study/",
})