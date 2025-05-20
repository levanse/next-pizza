import { Container, Filters, Title } from "@/components/shared";
import { TopBar } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/*Фильтрация*/}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/*Список товаров*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                categoryId={1}
                products={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef343023fc8adbe1d6ee4df4d44c4.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef343023fc8adbe1d6ee4df4d44c4.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef343023fc8adbe1d6ee4df4d44c4.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef343023fc8adbe1d6ee4df4d44c4.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef343023fc8adbe1d6ee4df4d44c4.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef343023fc8adbe1d6ee4df4d44c4.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef343023fc8adbe1d6ee4df4d44c4.avif",
                    items: [{ price: 550 }],
                  },
                ]}
              />

              <ProductsGroupList
                title="Комбо"
                categoryId={2}
                products={[
                  {
                    id: 8,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef343023fc8adbe1d6ee4df4d44c4.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 9,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef343023fc8adbe1d6ee4df4d44c4.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 10,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef343023fc8adbe1d6ee4df4d44c4.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 11,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef343023fc8adbe1d6ee4df4d44c4.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 12,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef343023fc8adbe1d6ee4df4d44c4.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 13,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef343023fc8adbe1d6ee4df4d44c4.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 14,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef343023fc8adbe1d6ee4df4d44c4.avif",
                    items: [{ price: 550 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
