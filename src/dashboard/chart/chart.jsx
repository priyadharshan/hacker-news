import React from 'react'
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts'

export class Chart extends React.Component {
	render () {
		const { data } = this.props;
		return  (
			<LineChart width={730} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="namcreated_at_ie" />
        <YAxis dataKey="points" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="points" stroke="#8884d8" />
      </LineChart>
		);
	}
}
