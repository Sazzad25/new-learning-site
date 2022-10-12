import React from 'react';
import { Link } from 'react-router-dom';
import './Quize.css';

const Quize = ({order}) => {
    const {questions, question, options} = order;
    return (
        <div className='quize'>
            <p>Question: {questions}</p>
                <h4>{question}</h4>
                    <p className='option'>{options}</p>
        </div>
    );
};

export default Quize;