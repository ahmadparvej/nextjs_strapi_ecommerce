import { CarouselPlugin } from '@/components/custom/carousel';
import Filter from '@/components/custom/filter';
import ProductCard from '@/components/custom/ProductCard';
import { Product } from '@/types/product';
import Image from 'next/image';
import { fetchDataFromAPI } from './../utils/api';


export default async function Home() {

  const data:any = await getData()

  return (
    <main className="md:w-4/5 md:m-auto">
      <CarouselPlugin/>
      <Filter/>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 py-3 px-3 md:px-0">
        {
          data?.data?.map((product:Product, index: number)=>{
            return (
              <ProductCard key={index} product={product}/>
            )
          })
        }
      </div>
    </main>
  );
}

async function getData() {
  const products = await fetchDataFromAPI("/products?populate=*");
  return products
}