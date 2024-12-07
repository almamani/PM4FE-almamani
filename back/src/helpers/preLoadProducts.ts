import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "iPhone 16",
    price: 799,
    description:
      "iPhone 16 is built for Apple Intelligence, the personal intelligence system that helps you write, express yourself, and get things done effortlessly. With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data.",
    image:
      "https://www.macstation.com.ar/web/image/product.product/89958/image_1024/%5BMYEP3BE-A%5D%20iPhone%2016%20512%20GB%20-%20Blanco?unique=7abe779",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "MacBook Air",
    price: 999,
    description:
      "MacBook Air sails through work and play  and the M3 chip brings even greater capabilities to the world’s most popular laptop. You can express yourself and get things done effortlessly with Apple Intelligence. Elevate your computing experience with the MacBook Air.",
    image:
      "https://www.macstation.com.ar/web/image/product.product/62504/image_1024/%5BMLXW3LE-A%5D%20MacBook%20Air%2013%22%20M2%208C%20GPU-8GB-256GB%20-%20Gris%20Espacial?unique=04d277e",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "iPad Pro",
    price: 799,
    description:
      "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    image:
      "https://www.macstation.com.ar/web/image/product.product/88872/image_1024/%5BMVX23LE-A%5D%20iPad%20Pro%2013%22%20M4%20WiFi%20256GB%2C%20Vidrio%20Est%C3%A1ndar%20-%20Negro%20Espacial?unique=e605d92",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Apple Watch SE",
    price: 399,
    description:
      "Easy ways to stay connected. Motivating fitness metrics. Innovative health and safety features. Fresh band colors. Apple Watch SE is packed with features at a feel-good price. Experience the future of health and wellness with the Apple Watch SE.",
    image:
      "https://www.macstation.com.ar/web/image/product.product/90165/image_1024/%5BMX5U3BE-A%5D%20Apple%20Watch%20Ultra%202%20GPS%2049mm%20-%20Caja%20de%20Titanio%20Negra%20-%20Milanese%20Loop%20de%20Titanio%20Negro%20-%20M?unique=2d8ace8",
    categoryId: 9,
    stock: 10,
  },
  {
    name: "AirPods Pro 2",
    price: 249,
    description:
      "Immerse yourself in sound with the AirPods Pro 2: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro 2 the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro 2.",
    image:
      "https://www.macstation.com.ar/web/image/product.product/62602/image_1024/%5BMQD83BE-A%5D%20AirPods%20Pro%202da%20Generaci%C3%B3n?unique=94ee75a",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "AirPods Max",
    price: 99,
    description:
      "AirPods Max deliver stunningly detailed, high-fidelity audio for an unparalleled listening experience. Each part of the custom-built driver works to produce sound with ultra-low distortion across the audible range so you’ll hear every note with a new sense of clarity.",
    image:
      "https://www.macstation.com.ar/web/image/product.product/88501/image_1024/%5BMGYN3BE-A%5D%20AirPods%20Max%20-%20Verde?unique=7be42b6",
    categoryId: 6,
    stock: 10,
  },
  {
    name: "iPhone SE",
    price: 429,
    description:
      "The Apple iPhone SE is the smartphone that replaces the iPhone 5S. While retaining a nearly identical exterior design, the internal hardware has been updated to match the iPhone 6s, including an A9 processor, NFC, 12-megapixel camera with 4K video capture, and runs iOS 9.3.",
    image:
      "https://www.macstation.com.ar/web/image/product.product/8645/image_1024/%5BMMXL3LE-A%5D%20iPhone%20SE%20128%20GB%20-%20%28PRODUCT%29RED?unique=c09f17b",
    categoryId: 1,
    stock: 5,
  },
  {
    name: "iPad",
    price: 349,
    description:
      "iPad is colorfully reimagined to be more capable, more intuitive, and even more fun. With an all screen design, 10.9-inch Liquid Retina display, and four gorgeous colors, iPad delivers a powerful way to get things done, create, and stay connected.",
    image:
      "https://www.macstation.com.ar/web/image/product.product/8405/image_1024/%5BMK2P3LE-A%5D%20iPad%2010.2%22%20-%20Wi-Fi%2C%20256%20GB%20-%20Plata?unique=ed8a866",
    categoryId: 3,
    stock: 10,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
