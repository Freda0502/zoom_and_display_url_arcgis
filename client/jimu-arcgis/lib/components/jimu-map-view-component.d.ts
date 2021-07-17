/// <reference types="react" />
/// <reference types="seamless-immutable" />
import { React, ReactRedux, IMJimuMapViewInfo, ImmutableObject } from 'jimu-core';
import { JimuMapView } from '../views/jimu-map-view';
import { MapViewManager } from '../mapview-manager';
import { JimuMapViewGroup } from '../views/jimu-map-view-group';
/** @ignore */
declare type ViewRenderFunction = (views: {
    [viewId: string]: JimuMapView;
}) => React.ReactNode;
/** @ignore */
interface ExtraProps {
    viewInfos: ImmutableObject<{
        [jimuMapViewId: string]: IMJimuMapViewInfo;
    }>;
}
/**
 * The JimuMapViewComponent component props
 */
export interface JimuMapViewComponentProps {
    /**
     * The map widget id selected from the JimuMapViewSelector component.
     */
    useMapWidgetId: string;
    /** @ignore */
    children?: ViewRenderFunction | React.ReactNode;
    /**
     * ViewGroup will be created when the first view is added. Views in the groups may still not be loaded after group created.
     */
    onViewGroupCreate?: (viewGroup: JimuMapViewGroup) => void;
    /**
     * The function will be called when all of the JimuMapView instances are loaded.
     */
    onViewsCreate?: (views: {
        [viewId: string]: JimuMapView;
    }) => void;
    /**
     * The function will be called when the current active view of the map widget is changed.
     * For example, when we click on the switch-map tool for multi-source map or change datasources for the map widget.
     */
    onActiveViewChange?: (activeView: JimuMapView, previousActiveViewId: string) => void;
}
declare class _JimuMapViewComponent extends React.PureComponent<JimuMapViewComponentProps & ExtraProps, {}> {
    viewManager: MapViewManager;
    componentDidMount(): void;
    componentDidUpdate(prevProps: JimuMapViewComponentProps & ExtraProps): void;
    onViewsCreate: (views: {
        [viewId: string]: JimuMapView;
    }) => void;
    onViewGroupCreate: () => void;
    onActiveViewChange: (previousActiveViewId: string) => void;
    getActiveViewId: (mapWidgetId: string, infos: import("seamless-immutable").ImmutableObject<{
        [jimuMapViewId: string]: import("seamless-immutable").ImmutableObject<import("jimu-core").JimuMapViewInfo>;
    }>) => string;
    getWhetherAllViewsCreated: (viewIds: string[], infos: import("seamless-immutable").ImmutableObject<{
        [jimuMapViewId: string]: import("seamless-immutable").ImmutableObject<import("jimu-core").JimuMapViewInfo>;
    }>) => boolean;
    getWhetherViewCreated: (viewId: any, infos: import("seamless-immutable").ImmutableObject<{
        [jimuMapViewId: string]: import("seamless-immutable").ImmutableObject<import("jimu-core").JimuMapViewInfo>;
    }>) => boolean;
    getViewIdsFromMapWidgetId: (mapWidgetId: string, infos: import("seamless-immutable").ImmutableObject<{
        [jimuMapViewId: string]: import("seamless-immutable").ImmutableObject<import("jimu-core").JimuMapViewInfo>;
    }>) => string[];
    getViews: (viewIds: string[]) => {
        [viewId: string]: JimuMapView;
    };
    render(): {};
}
/**
 * A react component that makes it easy to use JimuMapView from the map widget.
 * In most cases, you can pass on `useMapWidgetIds`, and use `onViewsCreate`, `onActiveViewChange` to get callback from the JimuMapViewComponent.
 */
export declare const JimuMapViewComponent: ReactRedux.ConnectedComponent<typeof _JimuMapViewComponent, Pick<React.ClassAttributes<_JimuMapViewComponent> & JimuMapViewComponentProps & ExtraProps, "children" | "ref" | "key" | "onActiveViewChange" | "onViewGroupCreate" | "useMapWidgetId" | "onViewsCreate"> & JimuMapViewComponentProps>;
export {};
