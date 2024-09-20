import Link from "next/link";

// app/page.tsx
export default function HomePage() {
  return (
    <div className="p-3">
      <h1>Home page</h1>
      <h1>Home rebase</h1>
      <Link href={"/feed"} className="mx-2">
        products detail
      </Link>
      <Link href={"/purchase1"} className="mx-2">
        Purchase1
      </Link>
    </div>
  );
}
