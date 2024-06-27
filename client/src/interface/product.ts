export interface Products{
    id: number;
    nameProduct: string;
    img: string;
    quantity: number;
    description: string;
    price: number;
}

export type CartItem = {
    productId: number;
    nameProduct: string;
    img: string;
    quantity: number;
    description: string;
    price: number;
}