import { axiosBaseUrl } from "./axios";

export async function NewProduct(name: string, description: string, price: number, stock: number) {
    const response = await axiosBaseUrl.post("/products/create-product",
        {
            name,
            description,
            price,
            stock
        });
    return response.data;
}

export async function DeletProduct(id: string) {
    const response = await axiosBaseUrl.delete(`/products/delete-product/${id}`)
    return response.data;
}

export async function UpdateProduct(name: string, description: string, price: number, stock: number, id: string) {
    const response = await axiosBaseUrl.patch(`/products/update-product/${id}`,
        {
            name,
            description,
            price,
            stock
        });
    return response.data;
}

export async function AllProduct() {
    const response = await axiosBaseUrl.get(`/products/get-all-products`)
    return response.data;
}

export async function FindProduct(id: string) {
    const response = await axiosBaseUrl.get(`/products/get-one-product/${id}`)
    return response.data;
}