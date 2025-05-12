import { Container, Filters, Title } from "@/components/shared";
import { TopBar } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/*Фильтрация*/}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/*Список товаров*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductCard
                id={1}
                name="Чизбургер-пицца"
                price={550}
                imageUrl={
                  "https://media.dodostatic.com/image/r:584x584/11eef343023fc8adbe1d6ee4df4d44c4.avif"
                }
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
