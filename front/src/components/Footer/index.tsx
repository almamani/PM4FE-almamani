import Link from "next/link";
import Image from "next/image";

import logo_footer from "@/assets/logo_compuShop1.svg";

const Footer = () => {
  return (
    <footer className="mt-auto py-1.5 bg-black-light flex justify-center items-center ">
      <Link href="/">
        <Image src={logo_footer} alt="Logo Footer" width={197} height={5} />
      </Link>
    </footer>
  );
};

export default Footer;
