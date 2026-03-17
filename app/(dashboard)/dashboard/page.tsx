import { getDashboardData } from "@/lib/services/dashboardServices";
import KPIGrid from "./components/KPIGrid";

export default async function DashboardPage() {

    const data = await getDashboardData();

    return (
        <div className="p-4">
            <KPIGrid data={data} />
        </div>
    );
}