import Link from "next/link";
import React from "react";

const GlobalNav = () => {
  return (
    <div>
      <Link href={"/"}>LOGO</Link>
      <Link href={"/home"} className="mx-2">
        Home
      </Link>
      <Link href={"/blog"} className="mx-2">
        Blog
      </Link>
      <Link href={"/dashboard"} className="mx-2">
        Dashboard
      </Link>
      <Link href={"/feed"} className="mx-2">
        Feed
      </Link>
    </div>
  );
};

export default GlobalNav;
