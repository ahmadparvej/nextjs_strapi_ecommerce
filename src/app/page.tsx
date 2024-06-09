import { CarouselPlugin } from '@/components/custom/carousel';
import Filter from '@/components/custom/filter';
import ProductsWrapper from '@/components/custom/productsWrapper';

export default async function Home() {

  return (
    <main className="container p-0">
      <CarouselPlugin/>
      <Filter/>
      <ProductsWrapper/>
    </main>
  );
}
