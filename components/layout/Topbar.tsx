"use client"

import { Bell } from "lucide-react"

export default function Topbar() {
  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-6">
      
      {/* LEFT SIDE */}
      <h1 className="text-xl font-semibold text-gray-800">
        Dashboard
      </h1>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {/* Time Filter */}
        <select className="border rounded-md px-3 py-1 text-sm bg-white">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 3 months</option>
          <option>Last year</option>
        </select>

        {/* Notifications */}
        <button className="p-2 rounded-md hover:bg-gray-100">
          <Bell size={18} />
        </button>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-medium">
          A
        </div>

      </div>
    </div>
  )
}