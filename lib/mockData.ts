export const recentActivity = [
  {
    id: 1,
    date: "2026-03-15",
    description: "New customer signed up",
    amount: 0,
    type: "signup"
  },
  {
    id: 2,
    date: "2026-03-14",
    description: "Customer paid $100",
    amount: 100,
    type: "payment"
  },
  {
    id: 3,
    date: "2026-03-13",
    description: "Customer cancelled subscription",
    amount: 0,
    type: "cancellation"
  },
  {
    id: 4,
    date: "2026-03-12",
    description: "Customer paid $100",
    amount: 100,
    type: "payment"
  },
  {
    id: 5,
    date: "2026-03-11",
    description: "Customer cancelled subscription",
    amount: 0,
    type: "cancellation"
  },
  {
    id: 6,
    date: "2026-03-10",
    description: "Customer paid $100",
    amount: 100,
    type: "payment"
  },
  {
    id: 7,
    date: "2026-03-09",
    description: "Customer cancelled subscription",
    amount: 0,
    type: "cancellation"
  },
  {
    id: 8,
    date: "2026-03-08",
    description: "Customer paid $100",
    amount: 100,
    type: "payment"
  },
  {
    id: 9,
    date: "2026-03-07",
    description: "Customer cancelled subscription",
    amount: 0,
    type: "cancellation"
  },
  {
    id: 10,
    date: "2026-03-06",
    description: "Customer paid $100",
    amount: 100,
    type: "payment"
  },
];

export const conversionsData = [
  { source: "Organic Search", conversions: 400 },
  { source: "Paid Search", conversions: 300 },
  { source: "Social Media", conversions: 200 },
  { source: "Email Marketing", conversions: 100 },
];

export const customerConversionData = [
  { source: "Free Trial", customers: 200, previousMonthCustomers: 150, growth: 33.3 },
  { source: "Paid", customers: 150, previousMonthCustomers: 150, growth: 0 },
  { source: "Referral", customers: 100, previousMonthCustomers: 105, growth: -4.8 },
  { source: "Other", customers: 50, previousMonthCustomers: 70, growth: -28.6 },
];


export const dashboardData = {
  metrics: {
    revenue: {
      value: 52340,
      change: 12.4,
      previousValue: 46500
    },
    customers: {
      value: 1204,
      change: 8.1,
      previousValue: 1113
    },
    churn: {
      value: 2.3,
      change: -0.4,
      previousValue: 2.7
    }
  },

  charts: {
    revenueGrowth: [
      { month: "Jan", revenue: 12000 },
      { month: "Feb", revenue: 15000 },
      { month: "Mar", revenue: 18000 },
      { month: "Apr", revenue: 22000 },
      { month: "May", revenue: 26000 },
      { month: "Jun", revenue: 31000 },
    ],

    customerGrowth: [
      { month: "Jan", customers: 1000 },
      { month: "Feb", customers: 1200 },
      { month: "Mar", customers: 1500 },
      { month: "Apr", customers: 1800 },
      { month: "May", customers: 2200 },
      { month: "Jun", customers: 2600 },
    ],

    churnTrend: [
      { month: "Jan", churn: 0.5 },
      { month: "Feb", churn: 0.6 },
      { month: "Mar", churn: 0.7 },
      { month: "Apr", churn: 0.8 },
      { month: "May", churn: 0.9 },
      { month: "Jun", churn: 1.0 },
    ],

    mrr: [
      { month: "Jan", mrr: 10000 },
      { month: "Feb", mrr: 15000 },
      { month: "Mar", mrr: 20000 },
      { month: "Apr", mrr: 25000 },
      { month: "May", mrr: 30000 },
      { month: "Jun", mrr: 35000 },
    ],

    arr: [
      { year: "2024", arr: 120000 },
      { year: "2025", arr: 150000 },
      { year: "2026", arr: 180000 },
      { year: "2027", arr: 220000 },
      { year: "2028", arr: 260000 },
      { year: "2029", arr: 310000 },
    ]
  },

  activity: recentActivity,

  conversions: {
    bySource: conversionsData,
    customerBreakdown: customerConversionData
  }
}

export const customerAnalyticsData = {
  growth: dashboardData.charts.customerGrowth,
  acquisition: {
    bySource: dashboardData.conversions.bySource,
    breakdown: dashboardData.conversions.customerBreakdown
  },
  retention: [
    { month: "Jan", retention: 90 },
    { month: "Feb", retention: 88 },
    { month: "Mar", retention: 85 },
    { month: "Apr", retention: 82 },
    { month: "May", retention: 80 },
    { month: "Jun", retention: 78 },
  ],
  recentActivity: dashboardData.activity
}