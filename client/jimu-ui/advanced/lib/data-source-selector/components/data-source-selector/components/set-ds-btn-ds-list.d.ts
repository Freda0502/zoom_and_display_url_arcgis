/// <reference types="react" />
/** @jsx jsx */
import { React, DataSourceJson, ThemeVariables, ImmutableObject, ImmutableArray, IntlShape, IMDataSourceInfo, UseDataSource, IMDataSourceJson } from 'jimu-core';
import { AllDataSourceTypes } from '../../../types';
export declare const DefaultDataViewId = "USE_MAIN_DATA_SOURCE";
interface Props {
    types: ImmutableArray<AllDataSourceTypes>;
    widgetId?: string;
    fromRootDsIds?: ImmutableArray<string>;
    buttonLabel?: string;
    useDataSources?: ImmutableArray<UseDataSource>;
    isMultiple?: boolean;
    closeDataSourceListOnChange?: boolean;
    fromDsIds?: ImmutableArray<string>;
    hideDs?: (dsJson: IMDataSourceJson) => boolean;
    hideHeader?: boolean;
    hideTypeDropdown?: boolean;
    disableAddData?: boolean;
    disableDataSourceList?: boolean;
    disableDataView?: boolean;
    enableToSelectOutputDsFromSelf?: boolean;
    hideDataView?: boolean;
    onChange?: (useDataSources: UseDataSource[]) => void;
    disableSelection?: (useDataSources: UseDataSource[]) => boolean;
    disableRemove?: (useDataSources: UseDataSource[]) => boolean;
}
interface ExtraProps {
    theme: ThemeVariables;
    intl: IntlShape;
}
interface StateExtraProps {
    dataSources: ImmutableObject<{
        [dsId: string]: DataSourceJson;
    }>;
    dataSourcesInfo: ImmutableObject<{
        [dsId: string]: IMDataSourceInfo;
    }>;
}
declare const _default: React.FC<Pick<Props & ExtraProps & StateExtraProps, "onChange" | "intl" | "widgetId" | "dataSourcesInfo" | "dataSources" | "useDataSources" | "buttonLabel" | "isMultiple" | "types" | "disableRemove" | "fromRootDsIds" | "disableSelection" | "fromDsIds" | "hideDs" | "hideHeader" | "hideTypeDropdown" | "disableAddData" | "enableToSelectOutputDsFromSelf" | "disableDataSourceList" | "disableDataView" | "hideDataView" | "closeDataSourceListOnChange"> & {
    theme?: import("@emotion/react").Theme;
}>;
/**
 * @ignore
 */
export default _default;
