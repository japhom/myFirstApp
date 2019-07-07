import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class SimpleBarChart extends PureComponent {
//    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
render() {
    const {newData,label,llave} = this.props;
        return (
            <BarChart
                width={800}
                height={500}
                data={newData}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={label} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey={llave} fill="#8884d8" />
                
            </BarChart>
        );
    }
}
