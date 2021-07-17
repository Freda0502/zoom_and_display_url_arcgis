/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, DataSource, IMFieldSchema, IntlShape, CodedValue, ClauseValuePair, DataSourceManager, ImmutableArray, ReactRedux } from 'jimu-core';
import { DropdownButtonProps } from './dropdown-button';
import { DropdownMenuProps } from './dropdown-menu';
import { PositioningStrategy } from './overlay/popper';
interface AdvancedSelectProps {
    field: IMFieldSchema;
    dataSource: DataSource;
    values?: ImmutableArray<ClauseValuePair>;
    excludeValues?: ImmutableArray<ClauseValuePair>;
    isEmptyOptionHidden?: boolean;
    allTag?: string;
    onChange: (valueObj: ClauseValuePair[]) => void;
    pageSize?: number;
    isMultiple?: boolean;
    codedValues?: CodedValue[];
    sql?: string;
    style?: React.CSSProperties;
    className?: string;
    /**
     * Defines the size of the dropdown button. The button will take the default size if the value is `undefined`.
     * @default "default"
     */
    size?: 'default' | 'sm' | 'lg';
    /**
     * Whether to put dropdown menu to body by ReactDOM.createPortal
     *
     * @default true
     */
    appendToBody?: boolean;
    /**
     * Describes the positioning strategy to use.
     * @default 'absolute'
     */
    strategy?: PositioningStrategy;
    /**
     * Control multi-select's z-index,
     * but if appendToBody is true, it'll be invalid
     */
    zIndex?: number;
    /**
     * if `true`, the dropdown will take the full width of its parent container.
     */
    fluid?: boolean;
    /**
     * Applies to the internal DropdownButton component, except `size` property.
     * @see {@link DropdownButtonProps} for details.
     */
    buttonProps?: Omit<DropdownButtonProps, 'size'>;
    /**
     * Applies to the internal DropdownMenu component.
     * @see {@link DropdownMenuProps} for details.
     */
    menuProps?: DropdownMenuProps;
    isOpen?: boolean;
    toggle?: (isOpen?: boolean) => void;
}
interface IntlProps {
    intl: IntlShape;
}
interface DatasourceProps {
    datasourceInfo: any;
    datasourceBelongInfo: any;
}
interface AdvancedSelectState {
    loaded: boolean;
    isNumberField: boolean;
    isSelectedListShown: boolean;
    isOpen: boolean;
    pageSize: number;
    currentList: any[];
    queryMode: QueryMode;
    count: number;
    page: number;
    list: any[];
    searchCount: number;
    searchPage: number;
    searchList: any[];
    sql: string;
    codedvalues: CodedValue[];
}
declare enum QueryMode {
    Remote = "REMOTE",
    LocalBySearch = "LOCAL_BY_SEARCH",
    RemoteBySearch = "REMOTE_BY_SEARCH"
}
export declare class _AdvancedSelectInner extends React.PureComponent<AdvancedSelectProps & IntlProps & DatasourceProps, AdvancedSelectState> {
    _isMounted: boolean;
    dsManager: DataSourceManager;
    dataSource: DataSource;
    dataSourceForSearch: DataSource;
    buttonRef: any;
    searchRef: any;
    modifiers: any;
    fieldLength: number;
    isHosted: boolean;
    listRef: HTMLDivElement;
    localDsRandomId: string;
    isRTL: boolean;
    static contextType: React.Context<import("./query-scope-context").QueryScopeContextProps>;
    static count: number;
    constructor(props: any);
    showOutputWarningInBuilder: () => boolean;
    showOutputWarning: () => boolean;
    getSqlByCascadeAndExcludedValues: () => string;
    getIncludedCodedValues: () => CodedValue[];
    i18nMessage: (id: string, values?: any) => string;
    componentDidMount(): void;
    componentWillUnmount(): void;
    createDatasources: () => void;
    destroyDatasources: () => void;
    componentDidUpdate(prevProps: AdvancedSelectProps & DatasourceProps, prevStates: AdvancedSelectState): void;
    updateList: (page: number, queryCount?: boolean) => Promise<void>;
    updateSearchCount: (sql: string) => void;
    updateSearchList: (sql?: string, page?: number) => void;
    getKeyWhere: () => string;
    onTogglePopper: (evt: any) => void;
    isItemChecked: (value: any) => boolean;
    onItemClick: (item: ClauseValuePair, willActive: boolean) => void;
    onScroll: (e: any) => void;
    loadNextPageData: () => void;
    loadMoreData: () => void;
    onTextChange: (value: any) => void;
    isDataEmpty: () => boolean;
    isSearchMoreBtnShown: () => boolean;
    getAllTag: () => string;
    getSelectLabel: () => string;
    showSelectedList: (isShown: boolean) => void;
    unCheckAll: () => void;
    getDropdownMenuStyle: () => import("jimu-core").SerializedStyles;
    getOutputWarningContainer: (item: any) => jsx.JSX.Element;
    render(): jsx.JSX.Element;
}
export declare const _AdvancedSelect: ReactRedux.ConnectedComponent<typeof _AdvancedSelectInner, Pick<React.ClassAttributes<_AdvancedSelectInner> & AdvancedSelectProps & IntlProps & DatasourceProps, "values" | "size" | "className" | "style" | "onChange" | "isOpen" | "toggle" | "zIndex" | "intl" | "dataSource" | "sql" | "ref" | "fluid" | "key" | "appendToBody" | "strategy" | "menuProps" | "buttonProps" | "codedValues" | "isMultiple" | "field" | "excludeValues" | "isEmptyOptionHidden" | "allTag" | "pageSize"> & AdvancedSelectProps>;
export declare const AdvancedSelect: React.ComponentType<React.PropsWithChildren<import("react-intl").WithIntlProps<AdvancedSelectProps & IntlProps>>>;
export {};
