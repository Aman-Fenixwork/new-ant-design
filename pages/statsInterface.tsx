export default interface statsInterface {
    interactions : [{type : string, enable : boolean}],
    appendPadding: number[] | any,
    limitInPlot : boolean,
    data : never[],
    xField: string,
    yField: string,
    colorField: string,
    color: any,
    sizeField: string,
    size: number[] | any,
    shape: string,
    legend: {},
    pointStyle: {},
    yAxis: {
      tickCount : number,
      nice: boolean,
      grid: null,
      line: {
        style: {
          stroke: string,
        },
      },
    },
    xAxis: {
      tickCount : number,
        grid: null,
        line: {
          style: {
            stroke: string,
          } ,
        },
    },
}
