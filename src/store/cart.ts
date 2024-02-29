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
    cart: sessionStorage.cart ? JSON.parse(sessionStorage.getItem('cart')!) : [],
    addProduct: (product) => {
        set((state) => {
            const newCart = [...state.cart, product]
            sessionStorage.setItem('cart', JSON.stringify(newCart))
            console.log(JSON.parse(sessionStorage.cart)) //glöm inte städa undan
            return {cart: newCart}
        })
    }
}))