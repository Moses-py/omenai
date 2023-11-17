"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  {
    name: "January",
    revenue: 240,
  },
  {
    name: "February",
    revenue: 139,
  },
  {
    name: "March",
    revenue: 980,
  },
  {
    name: "April",
    revenue: 390,
  },
  {
    name: "May",
    revenue: 480,
  },
  {
    name: "June",
    revenue: 380,
  },
  {
    name: "July",
    revenue: 530,
  },
  {
    name: "August",
    revenue: 750,
  },
  {
    name: "September",
    revenue: 240,
  },
  {
    name: "October",
    revenue: 590,
  },
  {
    name: "November",
    revenue: 430,
  },
  {
    name: "December",
    revenue: 890,
  },
];

export function SalesActivity({ activityData }: any) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        paddingBottom: "300px",
      }}
    >
      <div
        className="text-xs text-dark"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        }}
      >
        <ResponsiveContainer>
          <AreaChart data={activityData} margin={{ top: 5, bottom: 35 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" height={20} className="text-xs" />
            <YAxis width={50} className="text-xs " />
            <Tooltip />
            <Legend verticalAlign="bottom" />
            <Area
              type="monotone"
              dataKey="Revenue"
              stroke="#2A9EDF"
              fill="#2A9EDF"
            />
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
