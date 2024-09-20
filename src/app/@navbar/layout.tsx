// app/@navbar/layout.tsx
export default function NavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <nav style={{ width: "200px", background: "#f5f5f5", padding: "20px" }}>
      <ul>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
      </ul>
    </nav>
  );
}
