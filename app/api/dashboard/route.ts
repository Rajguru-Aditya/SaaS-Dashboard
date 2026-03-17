import { dashboardData } from "@/lib/mockData";

export async function GET() {
  return new Response(JSON.stringify({ ok: true, message: "Dashboard data initialized", data: {dashboardData} }), {
    headers: { "Content-Type": "application/json" },
  });
}