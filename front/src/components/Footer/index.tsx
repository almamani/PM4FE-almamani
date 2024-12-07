import Image from "next/image";
import logo_pie from "@/assets/logo_compuShop1.svg";
const Footer = () => {
  return (
    <footer className=" bg-black-light py-2 mt-4">
      <div className="flex justify-center items-center">
        <Image src={logo_pie} alt="Logo" width={207} height={10} />
      </div>
    </footer>
  );
};

export default Footer;
