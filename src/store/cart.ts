import { create } from "zustand";


export interface Product {
    id:string;
    name: string;
    price: number | string;
    desc: string;
    buttonText: string;
}


interface CartState {
    cart: Product[];
    addProduct: (product: Product) => void;
}

export const useCartStore = create<CartState>((set) => ({
    cart: [],
    addProduct: (product) => {
        set((state) => {
            const newCart = {cart: [...state.cart, product]}
            console.log(newCart)
            return newCart
        })
    }
}))