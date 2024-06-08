import { create } from "zustand";

export const useProductStore = create((set)=>({
    products: {
        data: []
    },
    updateProducts: (filteredProducts:any)=> set(()=>({
        products: filteredProducts
    }))
}))