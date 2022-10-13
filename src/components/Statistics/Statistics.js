import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Static from '../Static/Static';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const [question, setQuestion] = useState();
    // const statistics = useLoaderData();
    // console.log(statistics);

    useEffect( () =>{
        axios.get('https://openapi.programming-hero.com/api/quiz')
        .then(data => {
            const questionLoaded = data.data.data;
            const questionData = questionLoaded.map(quest =>{
                const singleQuest = {
                    name: quest.name,
                    total: quest.total
                }
                return singleQuest
            })
            console.log(questionData);
            setQuestion(questionData);
        });

    }, [])

    return (

        <BarChart width={500} height={500} data={question}>
          <Bar dataKey="total" fill="#8884d8" />
          <XAxis dataKey="name" />
                 <YAxis dataKey="total"/>
                 <Tooltip></Tooltip>
        </BarChart>
    );
};

export default Statistics;