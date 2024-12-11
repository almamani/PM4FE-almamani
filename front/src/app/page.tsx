import Image from "next/image";
import { IProduct } from "../interfaces/IProduct";
import { getFeaturedProducts } from "@/services/productService";
import Card from "@/components/Card/index";
import imgHome from "@/assets/img_home.png";

const featuredProducts = await getFeaturedProducts();

const Home = () => {
  return (
    <main>
      <div className="container">
        <div>
          <div className="relative w-full h-[65vh] mb-8">
            <Image
              src={imgHome}
              alt="Imagen de fondo del Home"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="-z-10"
            />
            <div
              className="absolute top-0 left-0 p-5 text-left"
              style={{ margin: "40px" }}
            >
              <p className="text-2xl  text-pink-basic font-bold">
                40% Discount
              </p>
              <h1 className="text-6xl text-black-light font-bold leading-tight mb-10">
                Boat Rockerz 510
                <br />
                Wireless Headphones
              </h1>
              <p className="text-[30px] text-gray-basic text-center">
                From{" "}
                <span className="text-[30px] text-ocean-basic font-semibold text-center">
                  $120.36
                </span>
              </p>
              <p className="text-[30px] text-gray-basic font-bold mt-8 text-center">
                Coming Soon...
              </p>
            </div>
          </div>
        </div>

        <h2 className="mx-20 mb-2">Featured Products</h2>
        <hr />

        {featuredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-11/12 mx-auto my-4">
            {featuredProducts.map((product: IProduct) => (
              <div key={product.id} className="card">
                <Card product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center mt-6">
            <h2 className="text-pink-basic text-center">
              Sorry, we could not load the products. Please try again later.
            </h2>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
