import { API_URL, STRAPI_API_TOKEN} from "./urls";

export const fetchDataFromAPI = async (endpoint) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + STRAPI_API_TOKEN);

    const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
    };

    const response = await fetch(`${API_URL}${endpoint}`, requestOptions);
    const data = await response.json();

    return data
}