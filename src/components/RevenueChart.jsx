import "../styles/revenue.css"

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "../components/ownerComponents/card"

const data = [
  { month: "Jan", revenue: 1200 },
  { month: "Feb", revenue: 2100 },
  { month: "Mar", revenue: 800 },
  { month: "Apr", revenue: 1600 },
  { month: "May", revenue: 900 },
  { month: "Jun", revenue: 1700 },
]

export default function RevenueChart() {
  return (
   <Card className="revenue-card">
  <CardHeader className="card-header">
    <CardTitle className="card-title">
      📈 Revenue (Last 6 Months)
    </CardTitle>
  </CardHeader>
  <CardContent className="card-content">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <XAxis
          dataKey="month"
          tick={{ fill: "#64748b", fontSize: 14 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: "#64748b", fontSize: 14 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
            border: "1px solid #e2e8f0",
          }}
          labelStyle={{ color: "#475569", fontSize: 14 }}
          itemStyle={{ fontSize: 14 }}
          formatter={(value) => [`$${value}`, "Revenue"]}
        />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#22c55e"
          strokeWidth={3}
          dot={{ r: 4, fill: "#22c55e" }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </CardContent>
</Card>
  )
}