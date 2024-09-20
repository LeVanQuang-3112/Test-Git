import Link from "next/link";
import React from "react";

const DefaultUi = () => {
  return (
    <div className="h-screen w-52 bg-gray-800">
      <div className="prose prose-sm prose-invert max-w-none">
        <h2 className="text-lg font-bold">Default UI</h2>
        <div className="not-prose flex flex-col">
          <Link
            href="/settings"
            className="rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium text-gray-100 hover:bg-gray-500 hover:text-white"
          >
            Logo
          </Link>
          <Link
            href="/home"
            className="rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium text-gray-100 hover:bg-gray-500 hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/product"
            className="rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium text-gray-100 hover:bg-gray-500 hover:text-white"
          >
            Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DefaultUi;
