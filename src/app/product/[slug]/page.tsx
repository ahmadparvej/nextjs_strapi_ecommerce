"use client"
import { useState, useEffect } from 'react';
import { useCartStore } from '@/lib/store/store';
import { ProductAttributes } from '@/types/product';
import { fetchDataFromAPI } from '@/utils/api';
import { Button } from '@/components/ui/button';
import ErrorHandler from '@/components/custom/errorHandler';

export default function ProductDetails({ params }: { params: { slug: string } }) {
  const { slug } = params
  
  const [selectedSize, setSelectedSize] = useState();
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<ProductAttributes | null>(null);
  const [currentImage, setCurrentImage] = useState<string | undefined>(undefined);

  const addToCart = useCartStore((state:any) => state.addToCart);
  
  useEffect(() => {
    if (slug) {
      getData(`/products?populate=*&filters[slug][$eq]=${slug}`)
    }
  }, [slug]);

  const getData = async (endPoint: string) => {
    const res:any = await fetchDataFromAPI(endPoint);
    if(!res){
      setIsError(true);
      setIsLoading(false);
      return; 
    }
    const data = res.data[0].attributes
    setProduct(data);
    setCurrentImage(data.image.data.attributes.formats.large.url); // Assume the product has images
    setSelectedSize(data.size.find((size:any) => size.enabled)?.size || null);
    setIsError(false);
    setIsLoading(false);
  }

  if (isLoading) return (<div className="h-calcvh container flex justify-center">
    <ErrorHandler label='loading...' status='loading'/>
  </div>);

  if (isError) return (<div className="h-calcvh container flex justify-center">
    <ErrorHandler label='404 Error, Content not found' status='error'/>
  </div>);

  const handleSizeChange = (size:any) => {
    setSelectedSize(size);
    // Here you can add logic to change the image and other details based on size
  };

  const handleAddToCart = () => {
    const productToAdd = { ...product, selectedSize };
    addToCart(productToAdd);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-1/2">
          <img src={currentImage} alt={product?.name} className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-3xl font-bold mb-4">{product?.name}</h1>
          <p className="text-lg mb-4">
            {product?.description?.map((desc, index) => (
              <span key={index}>{desc.children[0].text}</span>
            ))}
          </p>
          <p className="text-xl font-semibold mb-4">Price: ${product?.price}</p>
          <p className="text-lg mb-4">
            Availability: {product?.available ? 'In Stock' : 'Out of Stock'}
          </p>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Select Size:</label>
            <div className="flex space-x-2">
              {product?.size?.map((size) => (
                <Button
                  key={size.size}
                  className={`${!size.enabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                  variant={
                    `${
                      size.size === selectedSize ? 'default' : 'outline'
                    }`
                  }
                  onClick={() => size.enabled && handleSizeChange(size.size)}
                  disabled={!size.enabled}
                >
                  {size.size}
                </Button>
              ))}
            </div>
          </div>
          <Button
            onClick={handleAddToCart}
            variant={'default'}
            disabled={!selectedSize}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
