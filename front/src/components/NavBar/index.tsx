import Image from "next/image";
import Link from "next/link";
import UserWidget from "../UserWidget";
import logo from "@/assets/logo_compuShop.svg";

const NavBar = () => {
  return (
    <nav className="mt-auto bg-ocean-basic bg-quaternary w-full p-2">
      <div className="mx-10 flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="Logo" width={217} height={20} />
        </Link>
        <UserWidget />
      </div>
    </nav>
  );
};

export default NavBar;
