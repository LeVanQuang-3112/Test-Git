import React from "react";

const Page = ({ params }: { params: { slug: string } }) => {
  console.log(params, "slug");
  return <div>slug</div>;
};

export default Page;
