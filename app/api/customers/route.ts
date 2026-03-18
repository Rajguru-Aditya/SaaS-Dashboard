import { customerAnalyticsData } from "@/lib/mockData";

export async function GET() {
  return Response.json({
    ok: true,
    message: "Customer growth data initialized",
    data: customerAnalyticsData
  });
}