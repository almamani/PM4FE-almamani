import { getProductById } from "@/services/productService";
import { notFound } from "next/navigation";
import Detail from "@/components/Detail";

interface PageProps {
  params: {
    id: string;
  };
}

const Product = async ({ params }: PageProps) => {
  const { id } = await params; // Ya no es necesario hacer `await` aquí, porque `params` es un objeto.

  const productFind = await getProductById(parseInt(id));

  if (!productFind) {
    return notFound();
  }

  return (
    <div>
      <h1>{productFind.name}</h1>
      <div>
        <Detail product={productFind} />
      </div>
    </div>
  );
};

export default Product;
