import { Data3 } from "../data3";
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
  Legend
} from "recharts";


export default function Chart3() {
    useEffect(()=>{
        Aos.init({duration:2500});
       },[]);
  return (
    <div data-aos='fade-up' >
                <h5 className="chartTitle" style={{"font-size":"16px"
}}>Type de navire en fonction de ca longeur et son jauge brute</h5>

    <BarChart
      width={480}
      height={300}
      data={Data3}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid stroke="#e0dfdf"/>
      <XAxis dataKey="LIBELLE_TYPE_NAVIRE" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="JAUGE_BRUTE" stackId="a" fill="#0076f9" />
      <Bar dataKey="LONGEUR_NAVIRE" stackId="a" fill="#82ca9d" />
    </BarChart></div>
  );
}
