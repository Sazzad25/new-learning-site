import React from 'react';

const Static = ({statistic}) => {
    const {name, total} = statistic;
    console.log(total);
    return (
        <div>
            <h2>Name: {name}</h2>
            <h4>Total Question: {total}</h4>
        </div>
    );
};

export default Static;