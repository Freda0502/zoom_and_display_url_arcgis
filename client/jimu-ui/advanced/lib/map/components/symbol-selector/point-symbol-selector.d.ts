/// <reference types="react" />
import { React, IntlShape } from 'jimu-core';
interface Props {
    intl?: IntlShape;
    symbol?: __esri.SimpleMarkerSymbol | __esri.PictureMarkerSymbol | __esri.PointSymbol3D;
    onSymbolChanged: (symbol: __esri.SimpleMarkerSymbol | __esri.PictureMarkerSymbol | __esri.PointSymbol3D | __esri.SimpleFillSymbol | __esri.PolygonSymbol3D | __esri.SimpleLineSymbol | __esri.LineSymbol3D) => void;
}
interface SymbolSetInfo {
    name: string;
    id: string;
    title: string;
    keywords: string[];
    dataUrl: string;
    defaultType?: boolean;
}
interface States {
    apiLoaded: boolean;
    symbolSetInfos: SymbolSetInfo[];
    pointSymbolList: [];
    currentPointSymbolListItemId: string;
    symbolSelectedInfo: SymbolSelectedInfo;
    isLoading: boolean;
}
interface SymbolSelectedInfo {
    listItemId: string;
    symbolIdx: number;
}
export declare class PointSymbolSelector extends React.PureComponent<Props, States> {
    jsonUtils: typeof __esri.jsonUtils;
    Portal: typeof __esri.Portal;
    portal: __esri.Portal;
    portalUrl: string;
    allPointSymbolList: any;
    constructor(props: any);
    componentDidMount(): void;
    setInitialPointSymbolList: (symbolSetInfos: SymbolSetInfo[]) => void;
    handleSymbolSelected: (index: number, symbol: any) => void;
    _isSymbolItemSelected: (index: number) => boolean;
    renderPointSymbolList: () => JSX.Element | JSX.Element[];
    fetchSymbolSetInfos: () => Promise<any>;
    getSymbolSetGroupId: () => Promise<any>;
    getSymbolSetInfos: (groupId: any) => Promise<any>;
    onSelectChanged: (e: any) => void;
    fetchPointSymbolListByItemId: (itemId: string) => void;
    requestPointSymJson: (itemId: any) => void;
    getItemUrl: (portalUrl: any, _itemId: any) => string;
    getBaseItemUrl: (_portalUrl: any) => string;
    getPointSymbolParamsSetting: () => JSX.Element;
    updateSymbolSize: (value: any) => void;
    updateSymbolFillColor: (color: string) => void;
    updateSymbolOutLineColor: (color: string) => void;
    updateSymbolOutLineWeight: (value: any) => void;
    updateSymbolOpacity: (value: any) => void;
    getOpacityInSymbol: () => number;
    getPointSymbolParamsSettingForSimpleMarker: () => JSX.Element;
    onOpacityInputChanged: (value: any) => void;
    getPointSymbolParamsSettingForPictureMarker: () => JSX.Element;
    convertSymbolColorToColorPickerValue: (symbolColor: __esri.Color) => string;
    render(): JSX.Element;
}
export {};
