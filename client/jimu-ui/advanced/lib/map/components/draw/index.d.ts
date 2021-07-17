/// <reference types="react" />
/** @jsx jsx */
import { React, ResizeObserver, IntlShape, jsx } from 'jimu-core';
import { JimuMapView } from 'jimu-arcgis';
export interface DrawToolClass {
    sketch: __esri.Sketch;
    graphicsLayer: __esri.GraphicsLayer;
    complete: () => Promise<void>;
}
export interface DrawProps {
    intl?: IntlShape;
    className?: string;
    jimuMapView: JimuMapView;
    layer?: __esri.GraphicsLayer | __esri.FeatureLayer;
    creationMode?: 'single' | 'continuous' | 'update';
    isActive?: boolean;
    disableSymbolSelector?: boolean;
    visibleElements?: __esri.SketchVisibleElements;
    updateOnGraphicClick?: boolean;
    defaultCreateOptions?: __esri.SketchViewModelDefaultCreateOptions;
    defaultUpdateOptions?: __esri.SketchViewModelDefaultUpdateOptions;
    onDrawToolCreated?: (drawTool: DrawToolClass) => void;
    onDrawToolsActived?: (drawingMode: string) => void;
    onDrawToolCleared?: () => void;
    onDrawStart?: () => void;
    onDrawCancel?: () => void;
    onDrawEnd?: (graphic: __esri.Graphic) => void;
    onGraphicEdited?: (result: {
        type: 'deleted' | 'modified' | 'complete';
        graphic: __esri.Graphic;
    }) => void;
}
interface DrawStates {
    apiLoaded: boolean;
    currentSymbol: any;
    isPanelOpened: boolean;
    containerWidth: number;
    popperGeneration: number;
}
export declare class _Draw extends React.PureComponent<DrawProps, DrawStates> {
    container: HTMLElement;
    toolbarContainer: HTMLElement;
    btnContainer: HTMLElement;
    collapseBtnContainer: HTMLElement;
    resizeObserver: ResizeObserver;
    SketchClass: typeof __esri.Sketch;
    SketchViewModelClass: typeof __esri.SketchViewModel;
    GraphicsLayer: typeof __esri.GraphicsLayer;
    jsonUtils: typeof __esri.jsonUtils;
    sketch: __esri.Sketch;
    layer: __esri.GraphicsLayer;
    activeTools: string[];
    currentActiveTool: any;
    pointSymbol: any;
    polygonSymbol: any;
    polylineSymbol: any;
    onGraphicEdited: any;
    isSymbolChanging: boolean;
    constructor(props: any);
    componentDidMount(): void;
    _getDefaultVisibleElements: (visibleElements: __esri.SketchVisibleElements) => __esri.SketchVisibleElements;
    componentDidUpdate(prevProps: DrawProps, prevState: DrawStates): void;
    insertCustomDom: () => void;
    componentWillUnmount(): void;
    complete: () => Promise<void>;
    deactivate: () => void;
    clearGraphics: () => void;
    getCurrentSymbol: (newActiveTool: string) => any;
    handlePointSymbolChanged: (symbol: any) => void;
    handlePolylineSymbolChanged: (symbol: any) => void;
    handlePolygonSymbolChanged: (symbol: any) => void;
    onDrawToolContainerCreated: (ref: any) => void;
    render(): jsx.JSX.Element;
    _getPopperVisibility: () => string;
    _isHideSelectionToolsDom: () => boolean;
    _getSelectionToolClass: () => string;
    getStyles: () => import("jimu-core").SerializedStyles;
}
export declare const Draw: React.ComponentType<React.PropsWithChildren<import("react-intl").WithIntlProps<any>>>;
export {};
