import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="mt-auto bg-ocean-basic">
      <div className="flex justify-start items-center">
        <Link href="/">
          <h4>NavBar</h4>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
