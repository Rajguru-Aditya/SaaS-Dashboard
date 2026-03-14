import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Topbar />

        <main style={{ padding: "20px", flex: 1, background: "#f5f6fa" }}>
          {children}
        </main>
      </div>

    </div>
  );
}