import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizeDetails = () => {
    const quize = useLoaderData();
    console.log(quize);
    return (
        <div>
            <h2>Hello</h2>
            <p>Q: {quize.questions}</p>
        </div>
    );
};

export default QuizeDetails;