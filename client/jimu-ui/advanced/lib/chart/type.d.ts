import { WebChartTypes, WebChartDataItem } from 'arcgis-charts';
export declare type WebChartSeriesType = typeof WebChartTypes.LineSeries | typeof WebChartTypes.BarSeries | typeof WebChartTypes.HistogramSeries | typeof WebChartTypes.ScatterSeries | typeof WebChartTypes.PieSeries | typeof WebChartTypes.GaugeSeries | typeof WebChartTypes.BoxPlotSeries | typeof WebChartTypes.ProfileGraphSeries | typeof WebChartTypes.ProbabilityPlotSeries;
export interface ChartOptions {
    /**
     * a json object with x and y representation of the chart. UniqueIds for the object in the array.
     */
    selectedDataItems?: WebChartDataItem[];
    /**
     * enable filter by selection
     */
    filterBySelection?: boolean;
    /**
     * Verify popover open to close.
     */
    disableSelection?: boolean;
    /**
     * Re initialise chart object if the chart object is disposed.
     * Honoured only during the update call.
     * default is true;
     */
    autoRecreateChart?: boolean;
    /**
       * optional create message to be displayed in the chart container.
       */
    createMessage?: string;
}
/**
 * Detailed options to customize chart experience
 */
export interface GlobalOptions {
    queueChartCreation?: boolean;
    useAnimatedCharts?: boolean;
    hideLicenceWatermark?: boolean;
    enableResponsiveFeatures?: boolean;
    autoDisposeChart?: boolean;
}
