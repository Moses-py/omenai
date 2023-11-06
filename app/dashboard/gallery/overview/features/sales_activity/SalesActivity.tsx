"use client";
import { useWindowSize } from "usehooks-ts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import OverviewComponentCard from "../../components/OverviewComponentCard";

const data = [
  {
    name: "A",
    uv: 4000,
    pv: 240,
    amt: 240,
  },
  {
    name: "B",
    uv: 3000,
    pv: 139,
    amt: 221,
  },
  {
    name: "C",
    uv: 2000,
    pv: 980,
    amt: 229,
  },
  {
    name: "D",
    uv: 2780,
    pv: 390,
    amt: 200,
  },
  {
    name: "E",
    uv: 1890,
    pv: 480,
    amt: 218,
  },
  {
    name: "F",
    uv: 2390,
    pv: 380,
    amt: 250,
  },
  {
    name: "G",
    uv: 3490,
    pv: 430,
    amt: 210,
  },
];

export function SalesActivity() {
  return (
    <OverviewComponentCard fullWidth={false} title={"Sales activity"}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          paddingBottom: "250px",
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
            <LineChart data={data} margin={{ top: 5, bottom: 35 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" height={20} className="text-xs" />
              <YAxis width={50} className="text-xs " />
              <Tooltip />
              <Legend verticalAlign="bottom" />
              <Line type="monotone" dataKey="pv" stroke="#2A9EDF" />
              {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </OverviewComponentCard>
  );
}
