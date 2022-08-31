
  import { Data2 } from "../data2";
  import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

  import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine
  } from "recharts";

  export default function Chart2() {
    useEffect(()=>{
      Aos.init({duration:2500});
     },[]);
    return (
        <div data-aos="fade-up">
        <h5 className="chartTitle" style={{"font-size":"16px"
}}>Delai date prevue du navire en fonction du date de départ</h5>

      <BarChart
        width={500}
        height={300}
        data={Data2}
        stackOffset="sign"
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="LIB_PORT" />
        <YAxis />
        <Tooltip  />
                <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="La_Date_Delai_prévue" fill="#0076f9" stackId="stack" />
      </BarChart>
      </div>
    );
  }
  