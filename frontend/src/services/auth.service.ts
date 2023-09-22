import { API } from "@/lib/utils"

interface AuthPayload {
    username: string
    email: string
    password: string
}

export const postSignin = async (body: Omit<AuthPayload, 'username'>) => {
    return API.post('/auth/signin', body).then((response) => response.data)
}
export const postSignup = async (body: AuthPayload) => {
    return API.post('/auth/signup', body).then((response) => response.data)
}
export const postSignout = async (): Promise<void> => {
    await API.post(`/auth/signout`).then(
        (response) => response.data
    );
};
