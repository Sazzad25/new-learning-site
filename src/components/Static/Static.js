import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Static = ({statistic}) => {
    const {name, total} = statistic;
    console.log(total);
    return (
        
            /* <h2>Name: {name}</h2>
            <h4>Total Question: {total}</h4> */


            <BarChart width={500} height={200} data={statistic}>
            <Bar dataKey={name} fill="#8884d8" />
          </BarChart>
            

    );
};

export default Static;