import { IProduct } from "../../interfaces/IProduct";
import { getProducts } from "@/services/productService";
import Card from "@/components/Card";

const Products = async () => {
  const productsfound: IProduct[] = await getProducts();

  return (
    <main>
      <div className="container">
        <h1>Products</h1>
        <hr />
        <br />
        {productsfound.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-11/12 mx-auto my-4">
            {productsfound.map((product: IProduct) => (
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
export default Products;
