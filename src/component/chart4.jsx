
import React, { useCallback, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Data4 } from "../data4";
import  { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';





export default function Chart4() {
  useEffect(()=>{
    Aos.init({duration:2000});
   },[]);
  return(
    
  <div className="" data-aos="fade" >
        <h5 className="chartTitle">
          Delai attente des navires en 2021 par marchandise
        </h5>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={Data4}>
            <XAxis dataKey="LIBELLE_MARCHANDISE_FAMILLE" stroke="#0076f9" />
            <Line type="monotone" dataKey="Delai_attend_en_heure" stroke="#0076f9" />

            <Tooltip />
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
          </LineChart>
        </ResponsiveContainer>
      </div>
  );
}
