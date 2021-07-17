/// <reference types="react" />
import { React } from 'jimu-core';
import { ChartInstance, WebChart } from 'arcgis-charts';
import { ChartOptions, GlobalOptions } from './type';
export declare const useChart: (ref: React.RefObject<ChartInstance> | ((refValue: any) => void), containerRef: React.RefObject<HTMLElement>, config: WebChart, options?: ChartOptions, globalOptions?: GlobalOptions) => void;
