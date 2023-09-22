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
    return API.post('/short', body).then((response) => response.data)
}
export const patchUrl = async (urlId: string, body: UrlPayload) => {
    return API.patch(`/short/${urlId}`, body).then((response) => response.data)
}
export const deleteUrl = async (urlId: string) => {
    return API.delete(`/short/${urlId}`).then((response) => response.data)
}
export const getUrls = async (): Promise<UrlRes> => {
    return await API.get(`/short`).then(
        (response) => response.data
    );
};