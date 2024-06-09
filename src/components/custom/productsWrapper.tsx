"use client";
import ProductCard from "@/components/custom/ProductCard";
import { useProductStore } from "@/lib/store/store";
import { Product } from "@/types/product";
import { fetchDataFromAPI } from '@/utils/api';
import { useEffect, useState } from 'react';
import ErrorHandler from '@/components/custom/errorHandler';

export default function ProductsWrapper() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const products = useProductStore((state:any)=>state.products)
  const updateProducts = useProductStore((state:any)=>state.updateProducts)

  const allProductEndPoint = "/products?populate=*";

  const getData = async (endPoint: string) => {
    const data:any = await fetchDataFromAPI(endPoint);
    if(!data){
      setIsError(true);
      setIsLoading(false);
      return;
    }
    updateProducts(data)
    setIsError(false);
    setIsLoading(false);
  }

  useEffect(() => {
    getData(allProductEndPoint)
  }, [])

  if (isLoading) return (<div className="h-40 container flex justify-center">
    <ErrorHandler label='loading...' status='loading'/>
  </div>);

  if (isError) return (<div className="h-40 container flex justify-center">
    <ErrorHandler label='404 Error, Content not found' status='error'/>
  </div>);
  
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 py-3 px-3 md:px-0">
      {products?.data?.map((product: Product, index: number) => {
        return <ProductCard key={index} product={product} />;
      })}
    </div>
  );
}
