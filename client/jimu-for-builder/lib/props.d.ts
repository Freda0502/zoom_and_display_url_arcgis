/// <reference types="react" />
import { ImmutableObject, UrlParameters, IMUser, IntlShape, IMThemeVariables, IMLayoutItemJson, LayoutInfo, BoundingBox, DataSourceJson, IMWidgetJson, WidgetJson } from 'jimu-core';
/** All widget setting props */
export declare type AllWidgetSettingProps<T> = WidgetSettingProps & WidgetSettingInjectedProps<T>;
/**
 * The `onSettingChange` callback function.
 *
 * Updated setting values can be passed in the first parameter (`widgetJson`) as an object. Only changed properties need to be included.
 * To delete an existing property, set it to `null`.
 * If the widget generates an output data source, include it as the second parameter (optional).
 *
 */
export declare type SettingChangeFunction = (widgetJson: Partial<WidgetJson>, outputDataSourcesJson?: DataSourceJson[]) => void;
/** The widget setting props */
export interface WidgetSettingProps extends React.HTMLAttributes<HTMLDivElement> {
    widgetId: string;
    /**
     *
     * When a setting is changed via input from the user, call this function to save that changed value into the widget configuration.
     */
    onSettingChange: SettingChangeFunction;
}
/** @ignore */
export interface WidgetItemSettingProps {
    layout: IMLayoutItemJson;
    onSettingChange: (layoutInfo: LayoutInfo, setting: any) => void;
    onPosChange: (layoutInfo: LayoutInfo, bbox: BoundingBox) => void;
}
/** The properties injected by framework. */
export declare type WidgetSettingInjectedProps<T> = Omit<IMWidgetJson, 'config'> & {
    dispatch: any;
    queryObject: ImmutableObject<UrlParameters>;
    config: T;
    locale: string;
    appI18nMessages: any;
    intl: IntlShape;
    token?: string;
    user?: IMUser;
    theme: IMThemeVariables;
    portalUrl?: string;
    portalSelf?: any;
};
