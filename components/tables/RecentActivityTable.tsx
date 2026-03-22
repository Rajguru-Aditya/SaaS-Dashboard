"use client"

const getTypeStyle = (type: string) => {
  switch (type) {
    case "payment":
      return "bg-green-100 text-green-700"
    case "signup":
      return "bg-blue-100 text-blue-700"
    case "cancellation":
      return "bg-red-100 text-red-700"
    default:
      return "bg-gray-100 text-gray-700"
  }
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })
}

const RecentActivityTable = ({ data }: { data: any[] }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      
      <h3 className="text-lg font-medium text-gray-900 font-sans mb-4">
        Recent Activity
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">

          {/* Header */}
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="pb-2">Date</th>
              <th className="pb-2">Activity</th>
              <th className="pb-2">Amount</th>
              <th className="pb-2 text-right">Type</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">

                {/* Date */}
                <td className="py-3 text-gray-600">
                  {formatDate(item.date)}
                </td>

                {/* Description */}
                <td className="py-3 text-gray-800">
                  {item.description}
                </td>

                {/* Amount */}
                <td className="py-3 font-medium">
                  {item.amount > 0 ? `$${item.amount}` : "—"}
                </td>

                {/* Type */}
                <td className="py-3 text-right">
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-medium ${getTypeStyle(
                      item.type
                    )}`}
                  >
                    {item.type}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  )
}

export default RecentActivityTable