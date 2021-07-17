import { WebChart } from 'arcgis-charts';
import { ThemeVariables } from 'jimu-core';
/**
 * Traverses and converts all string colors to symbol colors
 * @param input
 * @param theme
 *
 * [symbol color](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-Symbol.html#color)
 */
export declare const traverseConvertStringColorToSymbolColor: (input: WebChart, theme: ThemeVariables) => WebChart;
declare type TraverseCallbackHandle = (key: string, value: any) => any;
/**
 * Traverse an object and execute a callback function on the [primitive] value
 * @param input
 * @param callback
 * @param key
 * @returns input
 */
export declare const traverse: (input: any, callback: TraverseCallbackHandle, key?: string) => any;
export {};
