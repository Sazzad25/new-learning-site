import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Quize.css';

const Quize = ({order}) => {
    // const options = useLoaderData();
    const {questions, question, options} = order;
    console.log(options);
    return (
        <div className='quize'>
            <p>Question: {questions}</p>
                <h4>{question}</h4>
                         {
                            options.map(option => <button className='opt'>{option}</button>)
                        }
        </div>
    );
};

export default Quize;