import ServiceData from "../assets/data/services.json";

export const getData = () => ServiceData;

export const getCategories = (area: string) => {
    return ServiceData[area].categories
}