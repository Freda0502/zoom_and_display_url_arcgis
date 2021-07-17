/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, IMDataSourceJson, IntlShape, ImmutableObject, DataSourceJson } from 'jimu-core';
import { DataSourceListProps } from '../../types';
import { DataSourceTab } from './utils';
interface State {
    isExternalDsShown: boolean;
    getAppConfigAction: any;
    searchValue: string;
    dataTabs: DataSourceTab[];
}
interface ExtraProps {
    intl: IntlShape;
}
interface StateExtraProps {
    dataSources: ImmutableObject<{
        [dsId: string]: DataSourceJson;
    }>;
}
declare class _DataSourceList extends React.PureComponent<DataSourceListProps & ExtraProps & StateExtraProps, State> {
    externalDsStyle: {
        width: string;
        height: string;
        maxWidth: string;
        margin: number;
    };
    __unmount: boolean;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    showExternalDs: () => void;
    addDataTab: (tab: DataSourceTab) => void;
    removeDataTab: (tab: DataSourceTab) => void;
    onSelectDataFinished: (dsJsons: IMDataSourceJson[]) => void;
    onSelectDataCanceled: () => void;
    onToggleExternalDs: () => void;
    onSearchValueChange: (e: any) => void;
    ExternalDs: jsx.JSX.Element;
    render(): jsx.JSX.Element;
}
export declare const DataSourceList: React.FC<import("react-intl").WithIntlProps<Pick<React.ClassAttributes<_DataSourceList> & DataSourceListProps & ExtraProps & StateExtraProps, "className" | "onChange" | "intl" | "widgetId" | "ref" | "key" | "useDataSources" | "isMultiple" | "types" | "disableRemove" | "fromRootDsIds" | "isDataSourceInited" | "onCloseClick" | "changeInitStatus" | "disableSelection" | "fromDsIds" | "hideDs" | "hideHeader" | "hideTypeDropdown" | "disableAddData" | "enableToSelectOutputDsFromSelf"> & DataSourceListProps>> & {
    WrappedComponent: React.ComponentType<Pick<React.ClassAttributes<_DataSourceList> & DataSourceListProps & ExtraProps & StateExtraProps, "className" | "onChange" | "intl" | "widgetId" | "ref" | "key" | "useDataSources" | "isMultiple" | "types" | "disableRemove" | "fromRootDsIds" | "isDataSourceInited" | "onCloseClick" | "changeInitStatus" | "disableSelection" | "fromDsIds" | "hideDs" | "hideHeader" | "hideTypeDropdown" | "disableAddData" | "enableToSelectOutputDsFromSelf"> & DataSourceListProps>;
};
export {};
