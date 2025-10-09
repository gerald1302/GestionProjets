// BarChartCard.jsx
import React from "react";
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const BarChartCard = ({ title, data, description }) => (
  <div className="bg-white p-6 rounded-xl shadow">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
    <p className="text-gray-500 text-sm mt-2">{description}</p>
  </div>
);

export default BarChartCard;
