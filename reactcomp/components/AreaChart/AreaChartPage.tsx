import * as React from "react";
import { chart1Points, chartPoints, chartData } from "./data";
import { AreaChart } from "@fluentui/react-charting";
import { useState } from "react";

export const AreaChartPage = () => {
    const [width, setWidth] = useState(400);
    const [height, setHeight] = useState(400);

    return (
        <>
            <AreaChart
              culture={window.navigator.language}
              height={height}
              width={width}
              data={chartData}
              enablePerfOptimization={true}
            />         
        </>
    )
}