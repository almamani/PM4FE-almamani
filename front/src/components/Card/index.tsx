import { IProduct } from "@/interfaces/IProduct";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  product: IProduct;
}

const Card = ({ product }: CardProps) => {
  return (
    <Link href={`products/${product.id}`}>
      <div className="p-4 m-12 bg-white-basic border border-gray-light rounded-lg text-black-light hover:shadow-lg transition-shadow">
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-lg"
            width={380} // Asegúrate de ajustar esto según tus necesidades
            height={380} // Asegúrate de ajustar esto según tus necesidades
          />
        )}

        <div className="mt-4 text-center">
          <p className="text-[25px] font-semibold mt-2">{product.name}</p>
          <h3 className="font-semibold text-ocean-basic">${product.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
