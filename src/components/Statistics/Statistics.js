import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    // const topics= useLoaderData();
    // console.log(topics)
    const data=[
        {
            "id": 1,
            "name": "React",
            "logo": "https://live.staticflickr.com/65535/52413593240_e00326e727_o.png",
            "total": 8
          },
          {
            "id": 2,
            "name": "JavaScript",
            "logo": "https://live.staticflickr.com/65535/52412638962_12e932256a_o.png",
            "total": 9
          },
          {
            "id": 4,
            "name": "CSS",
            "logo": "https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png",
            "total": 8
          }, 
          {
            "id": 5,
            "name": "Git",
            "logo": "https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png",
            "total": 11
          }
    ]
    return (
        <div className='p-10 flex justify-center'>
            <ResponsiveContainer width="42%" height={500}>
                <BarChart height={600} width={40} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar type="monotone" dataKey="total" stroke="bg-purple-400" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;