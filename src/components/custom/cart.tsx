"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCartStore } from "@/lib/store/store"
import { TiShoppingCart } from "react-icons/ti";

const Cart = () => {

  const cart = useCartStore((state:any) => state.cart);
  const clearCart = useCartStore((state:any) => state.clearCart);
  const removeFromCart = useCartStore((state:any) => state.removeFromCart);

  const handleProceed = () => {
    // Proceed with the checkout process
    alert('Proceeding to checkout...');
  };

  const handleRemove = (slug:string, index:number) => {
    removeFromCart(slug,index);
  };

  const total = cart?.reduce((acc:any, product:any) => acc + product.price, 0);

  return (
    <div className="h-4/5">
        <Dialog>
        <DialogTrigger asChild>
            <div className="relative">
                <div className="absolute top-[-9px] right-0 text-xs text-white font-bold">{cart?.length}</div>
                <TiShoppingCart className="h-8 w-8 text-white"/>
            </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] max-h-[560px] overflow-y-auto">
            <DialogHeader>
            <DialogTitle>Your Cart</DialogTitle>
            <DialogDescription>
                Make changes to your profile here. Click save when you're done.
            </DialogDescription>
            </DialogHeader>
            <div className="bg-white rounded-lg p-6 z-20 w-full max-w-md mx-auto">
            <div className="mt-4">
                {cart.length === 0 ? (
                <p>Your cart is empty.</p>
                ) : (
                cart.map((product:any, index:number) => (
                    <div key={index} className="flex justify-between items-center my-2">
                    <div className="flex items-center gap-3">
                        <img
                        src={product.image.data.attributes.formats.thumbnail.url}
                        alt={product.name}
                        className="w-16 h-16 object-cover mr-4"
                        />
                        <div>
                        <p className="text-xs font-semibold">{product.name}</p>
                        <p className="text-sm">Size: {product.selectedSize}</p>
                        <p className="text-sm">Price: ${product.price / 100}</p>
                        </div>
                    </div>
                    <Button
                        variant={'outline'}
                        size={'sm'}
                        onClick={() => handleRemove(product.slug,index)}
                    >
                        Remove
                    </Button>
                    </div>
                ))
                )}
            </div>
            {cart.length > 0 && (
                <div className="mt-4 flex justify-between items-center">
                    <p className="text-lg font-bold">Total: ${total / 100}</p>
                    <Button
                    variant={'default'}
                    onClick={handleProceed}
                    >
                    Proceed to Checkout
                    </Button>
                </div>
            )}
            </div>
        </DialogContent>
        </Dialog>
    </div>
  )
}

export default Cart;