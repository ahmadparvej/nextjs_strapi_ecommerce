import { CarouselPlugin } from '@/components/custom/carousel';
import Filter from '@/components/custom/filter';
import ProductsWrapper from '@/components/custom/productsWrapper';

export default async function Home() {

  return (
    <main className="md:w-4/5 md:m-auto">
      <CarouselPlugin/>
      <Filter/>
      <ProductsWrapper/>
    </main>
  );
}
