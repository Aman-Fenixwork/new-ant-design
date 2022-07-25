import React, { useState, useEffect } from 'react';
// import { Scatter } from '@ant-design/plots';
import statsInterface from '../statsInterface'
import dynamic from 'next/dynamic';
const Scatter = dynamic(() => import('@ant-design/plots').then(({ Scatter } : { Scatter : any}) => Scatter),
    { ssr: false }
);
// const Line = dynamic(() => import('@ant-design/charts').then(({ Line }) => Line),
//     { ssr: false }
// );
const DemoScatter = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/t81X1wXdoj/scatter-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config : statsInterface | any = { 
    interactions: [{ type: 'tooltip', enable: false }],
    appendPadding: 0,
    limitInPlot : true,
    data,
    xField: 'x',
    yField: 'y',
    colorField: 'genre',
    color: ['#74ABB6','#EB6751','#DA2F89'],
    // colorField: 'genre', 
    
    // color: ({ genre } : { genre : any}) => {
    //   if(genre === 'female'){
    //     return '#74ABB6';
    //   }
    //   else if(genre === 'male'){
    //     return '#EB6751';
    //   }
    //   else{
    //     return '#DA2F89';
    //   }
    // },
    pointStyle: {
      stroke: '',
    },
    sizeField: 'size',
    size: [5, 20],
    shape: 'circle',
    legend: false,
    yAxis: {       
      nice: false,
      grid: null,
      line: {
        style: {
          stroke: '#4B4762',
        },
      },
      tickCount : 0,
      
    },
    xAxis: {
      tickCount : 0,
      grid: null,
      line: {
        style: {
          stroke: '#4B4762',
        } ,
      },
    },
    // title : {
    //   text : "Risk"
    // },
  };

  return <Scatter {...config} />;
};

export default DemoScatter;
