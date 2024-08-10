import { axiosBaseUrl } from "./axios";

export async function RegisterUser(name: string, taxNumber: string, mail: string, phone: string, password: string) {
    const response = await axiosBaseUrl.post("/auth/register",
        {
            name,
            taxNumber,
            mail,
            phone,
            password
        });
    return response.data;
}

export async function LoginUser(taxNumber: string, password: string) {
    const response = await axiosBaseUrl.post("/auth/login", { taxNumber, password })
    return response.data;
}