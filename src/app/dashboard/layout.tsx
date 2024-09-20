export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex gap-3">
      {/* Include shared UI here e.g. a header or sidebar */}
      {/* <nav className="flex flex-col gap-2 w-[200px] bg-slate-600">
        <h3>Item 1</h3>
        <h3>Item 1</h3>
        <h3>Item 1</h3>
      </nav> */}

      {children}
    </section>
  );
}
