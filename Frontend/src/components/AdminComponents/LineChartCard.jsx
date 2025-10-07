import React from "react";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const LineChartCard = ({ title, data, color, description }) => (
  <div className="bg-white p-6 rounded-xl shadow">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
    <p className="text-gray-500 text-sm mt-2">{description}</p>
  </div>
);

export default LineChartCard;
