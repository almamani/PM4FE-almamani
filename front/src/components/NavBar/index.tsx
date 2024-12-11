import Image from "next/image";
import Link from "next/link";
import Menu from "../Menu";
import logo from "@/assets/logo_compuShop.svg";

const NavBar = () => {
  return (
    <nav className=" py-1.5  bg-ocean-basic">
      <div className="wrapper flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="Logo" width={217} height={20} />
        </Link>
        <Menu />
      </div>
    </nav>
  );
};

export default NavBar;
