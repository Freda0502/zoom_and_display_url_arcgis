/// <reference types="react" />
import { React, ImmutableObject } from 'jimu-core';
import { ChartCoreProps } from './core';
import { WebChart, WebChartDataItem } from 'arcgis-charts';
export interface ChartProps extends Omit<ChartCoreProps, 'config'> {
    config: WebChart | ImmutableObject<WebChart>;
    /**
     * Selected data points needed to be selecting the chart elements.
     */
    selectedDataItems?: WebChartDataItem[];
    /**
     * Inline Data Source of the chart
     */
    data?: WebChartDataItem[];
}
declare const Chart: React.MemoExoticComponent<React.ForwardRefExoticComponent<ChartProps & React.RefAttributes<unknown>>>;
export { Chart };
