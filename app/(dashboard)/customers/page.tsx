import { getCustomerGrowthData } from "@/lib/services/customerGrowthServices";
import CustomerCardsGrid from "./components/CustomerCardsGrid";

export default async function CustomersPage() {

    const data = await getCustomerGrowthData();

    console.log("Customer: ", data)

    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Customer Growth Data</h1>
        <CustomerCardsGrid data={data} />
      </div>
    );
  }