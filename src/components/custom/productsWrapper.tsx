"use client";
import ProductCard from "@/components/custom/ProductCard";
import { useProductStore } from "@/lib/store/store";
import { Product } from "@/types/product";
import { fetchDataFromAPI } from '@/utils/api';
import { useEffect } from 'react';

export default function ProductsWrapper() {

  const products = useProductStore((state:any)=>state.products)
  const updateProducts = useProductStore((state:any)=>state.updateProducts)

  const allProductEndPoint = "/products?populate=*";

  const getData = async (endPoint: string) => {
    const data:any = await fetchDataFromAPI(endPoint);
    updateProducts(data)
  }

  useEffect(() => {
    getData(allProductEndPoint)
  }, [])
  

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 py-3 px-3 md:px-0">
      {products?.data?.map((product: Product, index: number) => {
        return <ProductCard key={index} product={product} />;
      })}
    </div>
  );
}
