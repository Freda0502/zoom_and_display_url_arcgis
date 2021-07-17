/// <reference types="react" />
import { DataSource, React, IMWidgetJson, ImmutableArray, IntlShape, ImmutableObject, DataSourceJson, UseDataSource, IMDataSourceJson } from 'jimu-core';
import { AllDataSourceTypes } from '../../../../types';
import { DataSourceTab } from '../../utils';
interface State {
    selectedTypes: ImmutableArray<AllDataSourceTypes>;
    toUseRootDss: {
        [widgetId: string]: DataSource[];
    };
    toUseChildDss: {
        [rootDsId: string]: DataSource[];
    };
    toUseWidgets: IMWidgetJson[];
}
interface Props {
    isDataSourceInited: boolean;
    dataSources: ImmutableObject<{
        [dsId: string]: DataSourceJson;
    }>;
    types: ImmutableArray<AllDataSourceTypes>;
    intl: IntlShape;
    searchValue: string;
    widgetId?: string;
    isMultiple?: boolean;
    hideTypeDropdown?: boolean;
    fromDsIds?: ImmutableArray<string>;
    fromRootDsIds?: ImmutableArray<string>;
    enableToSelectOutputDsFromSelf?: boolean;
    hideDs?: (dsJson: IMDataSourceJson) => boolean;
    removeDataTab: (tab: DataSourceTab) => void;
    addDataTab: (tab: DataSourceTab) => void;
    useDataSources?: ImmutableArray<UseDataSource>;
    onChange?: (useDataSources: UseDataSource[]) => void;
    disableSelection?: boolean;
    disableRemove?: boolean;
}
export default class DataSourceWidgetOutputs extends React.PureComponent<Props, State> {
    __unmount: boolean;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props, prevState: State): void;
    componentWillUnmount(): void;
    initData: () => void;
    setToUseDataSources: (usedTypes: ImmutableArray<AllDataSourceTypes>, fromRootDsIds: ImmutableArray<string>, fromDsIds: ImmutableArray<string>, hideDs: (dsJson: IMDataSourceJson) => boolean, searchValue: string, widgetId: string) => void;
    setSelectedType: (types: ImmutableArray<AllDataSourceTypes>) => void;
    getRootDss: () => {
        [widgetId: string]: DataSource[];
    };
    getToUseWidgets: (toUseRootDss: {
        [widgetId: string]: DataSource[];
    }, toUseChildDss: {
        [rootDsId: string]: DataSource[];
    }) => IMWidgetJson[];
    getToUseRootDss: (usedTypes: ImmutableArray<string>, fromRootDsIds: ImmutableArray<string>, fromDsIds: ImmutableArray<string>, hideDs: (dsJson: IMDataSourceJson) => boolean, searchValue: string, excludeWidgetId: string) => {
        [widgetId: string]: DataSource[];
    };
    getToUseChildDss: (usedTypes: ImmutableArray<string>, fromRootDsIds: ImmutableArray<string>, fromDsIds: ImmutableArray<string>, hideDs: (dsJson: IMDataSourceJson) => boolean, searchValue: string) => Promise<{
        [rootDsId: string]: DataSource[];
    }>;
    getToUseChildDssByWidgetId: (wId: string) => {
        [rootDsId: string]: DataSource[];
    };
    isValid: (ds: DataSource, fromDsIds: ImmutableArray<string>, hideDs: (dsJson: IMDataSourceJson) => boolean, searchValue: string) => boolean;
    getWhetherShowList: () => boolean;
    getWhetherShowRootDss: () => boolean;
    getWhetherShowChildDss: () => boolean;
    render(): JSX.Element;
}
export {};
