import React from 'react'
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts'

export const Chart = ({ data }) => (
	<LineChart width={730} height={250} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="namcreated_at_ie" />
    <YAxis dataKey="points" />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="points" stroke="#8884d8" />
  </LineChart>
);
