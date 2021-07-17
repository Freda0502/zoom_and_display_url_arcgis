/// <reference types="react" />
/** @jsx jsx */
import { React, ThemeVariables, IntlShape, ImmutableArray, IMWidgetJson, ReactRedux } from 'jimu-core';
/**
 * The JimuMapViewSelector component props
 */
export interface JimuMapViewSelectorProps {
    /**
     * The array of Map widget IDs. It is returned from the onSelect function.
     */
    useMapWidgetIds?: ImmutableArray<string>;
    /**
     * The function will be called when a Map widget item listed in this component is selected.
     */
    onSelect?: (useMapWidgetIds: string[]) => void;
}
interface StateExtraProps {
    mapWidgetJsons: IMWidgetJson[];
}
interface ExtraProps {
    theme: ThemeVariables;
    intl: IntlShape;
}
/**
 * A react component for selecting Map widgets. It is usually used on the setting page of a widget,
 * and works with JimuMapViewComponent, JimuLayerViewComponent and JimuLayerViewSelector.
 */
export declare const JimuMapViewSelector: ReactRedux.ConnectedComponent<React.FC<import("react-intl").WithIntlProps<Pick<JimuMapViewSelectorProps & StateExtraProps & ExtraProps, "onSelect" | "intl" | "useMapWidgetIds" | "mapWidgetJsons"> & {
    theme?: import("@emotion/react").Theme;
}>> & {
    WrappedComponent: React.ComponentType<Pick<JimuMapViewSelectorProps & StateExtraProps & ExtraProps, "onSelect" | "intl" | "useMapWidgetIds" | "mapWidgetJsons"> & {
        theme?: import("@emotion/react").Theme;
    }>;
}, Pick<import("react-intl").WithIntlProps<Pick<JimuMapViewSelectorProps & StateExtraProps & ExtraProps, "onSelect" | "intl" | "useMapWidgetIds" | "mapWidgetJsons"> & {
    theme?: import("@emotion/react").Theme;
}>, "onSelect" | "theme" | "forwardedRef" | "useMapWidgetIds"> & JimuMapViewSelectorProps>;
export {};
