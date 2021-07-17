/// <reference types="react" />
/** @jsx jsx */
import { jsx, React, ReactRedux, ThemeVariables, Size, AppMode } from 'jimu-core';
/**
 * The ImageWithParam component props.
 */
export interface ImageWithParamProps {
    /**
     * The imageParam property contains the original url.
     */
    imageParam: ImageParam;
    /**
     * The toolTip of image
     */
    toolTip?: string;
    /**
     * The altText of image
     */
    altText?: string;
    /**
     * If `true`, useFadein
     */
    useFadein?: boolean;
    /** @ignore */
    theme?: ThemeVariables;
    /** @ignore */
    size?: Size;
    /**
     * The fill mode for image.
     */
    imageFillMode?: ImageFillMode;
    /** @ignore */
    isAutoHeight?: boolean;
    /**
     * The function will be called when image resource is loaded.
     */
    onImageLoaded?: (imageWidth: number, imageHeight: number) => void;
    /** @ignore */
    children?: any;
}
/**
 * The fill mode for image.
 */
export declare enum ImageFillMode {
    Fit = "FIT",
    Fill = "FILL"
}
/** @ignore */
export declare enum ImgSourceType {
    ByURL = "BY_URL",
    ByUpload = "BY_UPLOAD"
}
/**
 * The info for ImageParam.
 */
export interface ImageParam {
    /**
     * The url for image.
     */
    url?: string;
    /** @ignore */
    originalId?: string;
    /** @ignore */
    originalUrl?: string;
    /**
     * The resource fileName for image, if it is stored as a resource.
     */
    fileName?: string;
    /**
     * The original fileName for image
     */
    originalName?: string;
    /**
     * The file format for image
     */
    fileFormat?: string;
    /** @ignore */
    imgSourceType?: ImgSourceType;
    /** @ignore */
    cropParam?: CropParam;
    /** @ignore */
    isUseCompress?: boolean;
}
declare enum ImgLoadState {
    Loading = "LOADING",
    LoadOk = "LOADOK",
    LoadError = "LOADERROR"
}
interface States {
    picLoadResult: ImgLoadState;
    imageWidth?: number;
    imageHeight?: number;
    widgetWidth?: number;
    widgetHeight?: number;
    isRefresh: boolean;
}
/** @ignore */
export declare enum CropType {
    Real = "REAL",
    Fake = "FAKE"
}
/** @ignore */
export interface CropPosition {
    x: number;
    y: number;
}
interface CropPixel {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
}
/** @ignore */
export interface CropParam {
    cropPosition?: CropPosition;
    cropZoom?: number;
    svgViewBox?: string;
    svgPath?: string;
    cropShape?: string;
    cropPixel?: CropPixel;
    cropType?: CropType;
}
interface ExtraProps {
    appPath: string;
    queryObject: any;
    appMode: AppMode;
}
/** @ignore */
export declare class _ImageWithParam extends React.PureComponent<ImageWithParamProps & ExtraProps, States> {
    imgObject: HTMLImageElement;
    maskId: string;
    __unmount: boolean;
    src: string;
    constructor(props: any);
    getStyle(): import("jimu-core").SerializedStyles;
    static defaultProps: {
        imageParam: {};
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    getAdaptiveUrlFromImageParam: (imageParam: ImageParam) => string;
    preloadImage: (url: string) => void;
    getSnapshotBeforeUpdate(prevProps: ImageWithParamProps): boolean;
    componentDidUpdate(prevProps: ImageWithParamProps & ExtraProps, prevState: States, snapshot: any): void;
    standardUrl: (url: string) => string;
    onResize: (width: any, height: any) => void;
    getWidgetWidth: () => number;
    getWidgetHeight: () => number;
    render(): jsx.JSX.Element;
}
/**
 * The ImageWithParam component is used to visualize the image, it provides fill mode.
 * It can be used at runtime or in the setting page.
 * It can cooperate with ImageSelector component(jimu-ui/advanced/resource-selector).
 */
export declare const ImageWithParam: ReactRedux.ConnectedComponent<React.FC<Pick<Pick<ImageWithParamProps & ExtraProps, "size" | "children" | "theme" | "appPath" | "queryObject" | "appMode" | "toolTip" | "altText" | "useFadein" | "imageFillMode" | "isAutoHeight" | "onImageLoaded"> & Partial<Pick<ImageWithParamProps & ExtraProps, "imageParam">> & Partial<Pick<{
    imageParam: {};
}, never>>, "size" | "children" | "appPath" | "queryObject" | "appMode" | "imageParam" | "toolTip" | "altText" | "useFadein" | "imageFillMode" | "isAutoHeight" | "onImageLoaded"> & {
    theme?: import("@emotion/react").Theme; /**
     * The altText of image
     */
}>, Pick<Pick<Pick<ImageWithParamProps & ExtraProps, "size" | "children" | "theme" | "appPath" | "queryObject" | "appMode" | "toolTip" | "altText" | "useFadein" | "imageFillMode" | "isAutoHeight" | "onImageLoaded"> & Partial<Pick<ImageWithParamProps & ExtraProps, "imageParam">> & Partial<Pick<{
    imageParam: {};
}, never>>, "size" | "children" | "appPath" | "queryObject" | "appMode" | "imageParam" | "toolTip" | "altText" | "useFadein" | "imageFillMode" | "isAutoHeight" | "onImageLoaded"> & {
    theme?: import("@emotion/react").Theme; /**
     * The altText of image
     */
}, "size" | "children" | "theme" | "imageParam" | "toolTip" | "altText" | "useFadein" | "imageFillMode" | "isAutoHeight" | "onImageLoaded"> & ImageWithParamProps>;
export {};
