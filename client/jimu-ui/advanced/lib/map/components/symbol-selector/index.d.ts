/// <reference types="react" />
/** @jsx jsx */
import { React, ThemeVariables, IntlShape } from 'jimu-core';
interface SymbolSelectorProps {
    intl?: IntlShape;
    className?: string;
    symbol?: __esri.SimpleMarkerSymbol | __esri.PictureMarkerSymbol | __esri.PointSymbol3D | __esri.SimpleFillSymbol | __esri.PolygonSymbol3D | __esri.SimpleLineSymbol | __esri.LineSymbol3D;
    onPointSymbolChanged?: (symbol: __esri.SimpleMarkerSymbol | __esri.PictureMarkerSymbol | __esri.PointSymbol3D) => void;
    onPolylineSymbolChanged?: (symbol: __esri.SimpleLineSymbol | __esri.LineSymbol3D) => void;
    onPolygonSymbolChanged?: (symbol: __esri.SimpleFillSymbol | __esri.PolygonSymbol3D) => void;
}
interface ExtraProps {
    theme: ThemeVariables;
}
export declare const SymbolSelector: React.FC<Pick<SymbolSelectorProps & ExtraProps, "symbol" | "className" | "intl" | "onPointSymbolChanged" | "onPolylineSymbolChanged" | "onPolygonSymbolChanged"> & {
    theme?: import("@emotion/react").Theme;
}>;
export {};
