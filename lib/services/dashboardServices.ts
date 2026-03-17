export const getDashboardData = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/dashboard`);
        if (!response.ok) {
            throw new Error('Failed to fetch dashboard data');
        }
        const data = await response.json();
        return data.data.dashboardData;
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        return null;
    }
};