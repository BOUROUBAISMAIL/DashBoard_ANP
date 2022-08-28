
  import { Data2 } from "../data2";

  import React from "react";
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

    return (
        <div>
        <h5 className="chartTitle">Delai date prevue du navire on fonction du date de départ</h5>

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
        <Bar dataKey="DELAI_DATE_PREVUE" fill="#8884d8" stackId="stack" />
      </BarChart>
      </div>
    );
  }
  