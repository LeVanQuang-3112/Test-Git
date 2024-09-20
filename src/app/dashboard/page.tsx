// "use client";

import axios from "axios";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  async function createInvoice(formData: FormData) {
    "use server";

    const rawFormData = {
      customerId: formData.get("name"),
      amount: formData.get("email"),
    };

    const response = await axios.post(
      "https://api.sampleapis.com/coffee/hot",
      rawFormData
    );
    console.log(response, "response");

    // mutate data
    // revalidate cache
  }

  return (
    <div>
      {/* <form action={createInvoice}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <button type="submit">Submit</button>
      </form> */}
      <h1>Dashboard</h1>
      <Link href={"/dashboard/folder2"}>Folder 2</Link>
    </div>
  );
};

export default Dashboard;
