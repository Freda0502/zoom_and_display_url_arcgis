/// <reference types="seamless-immutable" />
/// <reference types="react" />
/** @jsx jsx */
import { React, ActionSettingProps, ImmutableObject, IMDataSourceInfo, ThemeVariables, Immutable, DataSourceJson, ReactRedux } from 'jimu-core';
interface StateExtraProps {
    dataSources: ImmutableObject<{
        [dsId: string]: DataSourceJson;
    }>;
    dataSourcesInfo: ImmutableObject<{
        [dsId: string]: IMDataSourceInfo;
    }>;
}
interface ExtraProps {
    theme?: ThemeVariables;
}
declare const _default: ReactRedux.ConnectedComponent<React.FC<Pick<Pick<ActionSettingProps<Immutable.ImmutableObject<import("./type").Config>> & ExtraProps & StateExtraProps, "intl" | "widgetId" | "theme" | "dataSourcesInfo" | "dataSources" | "onSettingChange" | "actionId" | "messageWidgetId" | "messageType" | "onDisableDoneBtn"> & Partial<Pick<ActionSettingProps<Immutable.ImmutableObject<import("./type").Config>> & ExtraProps & StateExtraProps, "config">> & Partial<Pick<{
    config: Immutable.ImmutableObject<{
        messageUseDataSource: any;
        actionUseDataSource: any;
        sqlExprObj: any;
        enabledDataRelationShip: boolean;
    }>;
}, never>>, "intl" | "widgetId" | "dataSourcesInfo" | "dataSources" | "config" | "onSettingChange" | "actionId" | "messageWidgetId" | "messageType" | "onDisableDoneBtn"> & {
    theme?: import("@emotion/react").Theme;
}>, Pick<Pick<Pick<ActionSettingProps<Immutable.ImmutableObject<import("./type").Config>> & ExtraProps & StateExtraProps, "intl" | "widgetId" | "theme" | "dataSourcesInfo" | "dataSources" | "onSettingChange" | "actionId" | "messageWidgetId" | "messageType" | "onDisableDoneBtn"> & Partial<Pick<ActionSettingProps<Immutable.ImmutableObject<import("./type").Config>> & ExtraProps & StateExtraProps, "config">> & Partial<Pick<{
    config: Immutable.ImmutableObject<{
        messageUseDataSource: any;
        actionUseDataSource: any;
        sqlExprObj: any;
        enabledDataRelationShip: boolean;
    }>;
}, never>>, "intl" | "widgetId" | "dataSourcesInfo" | "dataSources" | "config" | "onSettingChange" | "actionId" | "messageWidgetId" | "messageType" | "onDisableDoneBtn"> & {
    theme?: import("@emotion/react").Theme;
}, "intl" | "widgetId" | "theme" | "config" | "onSettingChange" | "actionId" | "messageWidgetId" | "messageType" | "onDisableDoneBtn"> & ActionSettingProps<Immutable.ImmutableObject<import("./type").Config>>>;
export default _default;
