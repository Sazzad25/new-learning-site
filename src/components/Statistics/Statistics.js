import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Static from '../Static/Static';

const Statistics = () => {
    const statistics = useLoaderData();
    console.log(statistics);
    return (
        <div>
            <h2>{statistics.total}</h2>
            {
                statistics.data.map(statistic => <Static key={statistic.id} statistic={statistic}></Static>)
            }

        </div>
    );
};

export default Statistics;