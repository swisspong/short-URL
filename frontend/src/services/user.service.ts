import { API } from "@/lib/utils";

export interface UserRes {
    email: string;
    id: string;
    username: string
}

export const getUser = async (): Promise<UserRes> => {
    return await API.get(`/user`).then(
        (response) => response.data
    );
};