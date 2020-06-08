import React, { memo } from 'react'
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, Label } from 'recharts'

export const Chart = memo(({ data }) => (
  <div>
	  <LineChart width={500} height={400} data={data} margin={{ top: 50, left: 30 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="namcreated_at_ie">
        <Label value="ID" offset={0} position="insideBottom" />
      </XAxis>
      <YAxis label={{ value: 'points', angle: -90, position: 'insideLeft' }} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="points" stroke="#8884d8" />
    </LineChart>
  </div>
))
