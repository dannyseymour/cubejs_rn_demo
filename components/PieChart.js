import React from 'react';
import { VictoryPie, VictoryAxis, VictoryLegend } from 'victory-native';
import ChartWrapper, { colors } from './ChartWrapper';

const SI_PREFIXES = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
]

const numberFormatter = (number) => {
    if (number === 0) return number

    const tier = SI_PREFIXES.filter((n) => number >= n.value).pop()
    const numberFixed = (number / tier.value).toFixed(1)

    return `${numberFixed}${tier.symbol}`
}

const PieChart = ({ data }) => (
    <ChartWrapper hideAxis>
        <VictoryPie
            data={data.chartPivot()}
            y="Logs.count"
            labels={item => numberFormatter(item[data.seriesNames()[0].key])}
            padAngle={3}
            innerRadius={40}
            labelRadius={70}
            style={{ labels: { fill: "white", fontSize: 14 } }}
            colorScale={colors}
        />
        <VictoryAxis style={{ axis: { stroke: "none" }, tickLabels: { fill: "none" } }} />
        <VictoryLegend x={40} y={260}
                       orientation="horizontal"
                       colorScale={colors}
                       data={data.chartPivot().map(({ x }) => ({ name: x }))}
        />
    </ChartWrapper>
);

export default PieChart;
