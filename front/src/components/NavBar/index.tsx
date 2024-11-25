import React from "react";
import Link from "next/link";
import UserWidget from "../UserWidget";

const NavBar = () => {
  return (
    <nav className="mt-auto bg-ocean-basic bg-quaternary w-full p-3">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h3>CompuShop</h3>
        </Link>
        <UserWidget />
      </div>
    </nav>
  );
};

export default NavBar;
