 import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Product } from "@/types/product"
import { Button } from '@/components/ui/button';
import { TiShoppingCart } from "react-icons/ti";
import Router from "next/router";
import Link from 'next/link';

 export default function ProductCard(product:{ product: Product }) {

  const handleProductClick = () => {
    // Router
  }

   return (
     <Card className="w-full max-w-sm">
       <Link href={`/product/${product.product.attributes.slug}`} className="aspect-w-4 aspect-h-5 relative">
         <img
           alt="Product"
           className="object-cover rounded-t-lg"
           height={300}
           src={product.product.attributes.image.data.attributes.formats.thumbnail.url}
           style={{
             aspectRatio: "300/250",
             objectFit: "cover",
           }}
           width={400}
         />
       </Link>
       <CardHeader className="grid gap-1 p-4">
         <CardTitle className="text-xl">{product.product.attributes.name}</CardTitle>
         <CardDescription className="h-10">{product.product.attributes.description[0].children[0].text}</CardDescription>
       </CardHeader>
       <CardContent className="p-4">
        <div className="flex justify-between">
          <div>
            <p className="text-lg font-semibold">₹ {product.product.attributes.price}</p>
            {product.product.attributes.original_price > 0 && (
              <p className="text-sm text-gray-500">
                <s>₹ {product.product.attributes.original_price}</s> ({Math.round(30)}% off)
              </p>
            )}
          </div>
          <div>
            <div>★★★★★</div>
            <Button variant={'default'} size={'sm'} ><TiShoppingCart className="h-5 w-5 mr-1"/>Add to Cart</Button>
          </div>
        </div>
       </CardContent>
     </Card>
   )
 }