import {API} from "../../constants/api";

export const getItems = () => {
    return fetch(API.ITEMS)
        .then(response => response.json())
        .then(data => data)
}
