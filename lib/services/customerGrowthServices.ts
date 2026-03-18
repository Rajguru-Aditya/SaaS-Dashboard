export const getCustomerGrowthData = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/customers`);
        if (!response.ok) {
            throw new Error('Failed to fetch customer growth data');
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching customer growth data:', error);
        return null;
    }
};