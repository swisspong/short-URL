import { API } from "@/lib/utils"


interface UrlPayload {
    url: string
}
interface UrlRes {
    data: UrlItem[]
}
export interface UrlItem {
    id: string;
    short_url: string;
    url: string;
    user_id: string;
}

export const postUrl = async (body: UrlPayload) => {
    return API.post('/url', body).then((response) => response.data)
}
export const patchUrl = async (urlId: string, body: UrlPayload) => {
    return API.patch(`/url/${urlId}`, body).then((response) => response.data)
}
export const deleteUrl = async (urlId: string) => {
    return API.delete(`/url/${urlId}`).then((response) => response.data)
}
export const getUrls = async (): Promise<UrlRes> => {
    return await API.get(`/url`).then(
        (response) => response.data
    );
};