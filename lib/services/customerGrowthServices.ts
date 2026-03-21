export const getCustomerGrowthData = async () => {
    try {
        console.log("BASE URL:", process.env.NEXT_PUBLIC_BASE_URL)
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/customers`);
        if (!response.ok) {
            throw new Error('Failed to fetch customer growth data');
        }
        console.log("Response", response)
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching customer growth data:', error);
        return null;
    }
};