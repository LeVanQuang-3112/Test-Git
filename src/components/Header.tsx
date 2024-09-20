import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <Link href={"/"}>
        <h1>My Website Header</h1>
      </Link>
    </div>
  );
};

export default Header;
