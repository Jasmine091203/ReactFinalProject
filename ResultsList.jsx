import React from 'react';
import ReactECharts from 'echarts-for-react';

const ResultsList = ({ results }) => {
    // 計算每個 county 的數量
    const countryCount = results.reduce((acc, result) => {
        acc[result.country] = (acc[result.country] || 0) + 1;
        return acc;
    }, {});

    // 準備 ECharts 的數據
    const data = Object.keys(countryCount).map(country => ({
        name: country,
        value: countryCount[country]
    }));

    // 設置 ECharts 的選項
    const options = {

        tooltip: {
            trigger: 'item'
        },

        series: [
            {
                name: 'County',
                type: 'pie',
                radius: '50%',
                data,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    return (
        <div>
            <h1>科技大學國家比例</h1>
            {/* {results.map((result) => (
                <div key={result.objectid}>
                    <h2>{result.county}</h2>
                </div>
            ))} */}
            <ReactECharts option={options} />

        </div>
    );
};

export default ResultsList;