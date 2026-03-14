import Link from "next/link";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        background: "#111",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>SaaS Dashboard</h2>

      <nav style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/customers">Customers</Link>
        <Link href="/revenue">Revenue</Link>
        <Link href="/subscriptions">Subscriptions</Link>
        <Link href="/churn">Churn</Link>
      </nav>
    </div>
  );
}