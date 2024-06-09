import { create } from "zustand";

export const useProductStore = create((set)=>({
    products: {
        data: []
    },
    updateProducts: (filteredProducts:any)=> set(()=>({
        products: filteredProducts
    }))
}))

export const useCartStore = create((set) => ({
    cart: [],
    addToCart: (product:any) =>
      set((state:any) => ({
        cart: [...state.cart, product],
      })),
    removeFromCart: (slug:string, pindex:number) =>
    set((state:any) => ({
        cart: state.cart.filter((product:any, index:number) => pindex !== index && product.slug !== slug),
    })),
    clearCart: () => set({ cart: [] }),
  }));