import Link from "next/link";
import React from "react";

const Folder1 = () => {
  return (
    <div>
      <h1>Folder1 List</h1>
      <ul>
        <li>
          <Link href="/folder1/folder2">folder 2</Link>
        </li>
        {/* <li>
          <Link href="/folder1/new">Product 2</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Folder1;
