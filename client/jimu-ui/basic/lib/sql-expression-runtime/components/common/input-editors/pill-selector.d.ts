/// <reference types="react" />
/// <reference types="seamless-immutable" />
import { React, DataSource, IMFieldSchema, IntlShape, CodedValue, ClauseValueOptions, ClauseValuePair, DataSourceManager, ReactRedux } from 'jimu-core';
import { ClauseInputEditor } from '../default';
interface Props {
    value: ClauseValueOptions;
    dataSource: DataSource;
    runtime: boolean;
    isSmallSize?: boolean;
    onChange: (valueObj: ClauseValueOptions) => void;
    codedValues?: CodedValue[];
    fieldObj?: IMFieldSchema;
    sql?: string;
    style?: React.CSSProperties;
    className?: string;
}
interface IntlProps {
    intl: IntlShape;
}
interface DatasourceProps {
    datasourceInfo: any;
    datasourceBelongInfo: any;
}
interface State {
    list: any[];
    listWithSetValues: any[];
    isOpen: boolean;
}
export declare class _VIPillSelectorInner extends React.PureComponent<Props & DatasourceProps & IntlProps, State> {
    _isMounted: boolean;
    pillButton: any;
    dsManager: DataSourceManager;
    dataSource: DataSource;
    localDsRandomId: string;
    static contextType: React.Context<import("../../../../../..").QueryScopeContextProps>;
    static count: number;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    getDataSource: () => DataSource;
    componentDidUpdate(prevProps: Props & DatasourceProps): void;
    isMultiple: () => boolean;
    i18nMessage: (id: string, values?: any) => string;
    updateList: (fieldObj?: import("seamless-immutable").ImmutableObject<import("jimu-core").FieldSchema>) => void;
    getListWithSetValues: (list: any) => any;
    getDisplayLabel: (value: any) => string;
    onTogglePopper: () => void;
    isPillActive: (value: any) => boolean;
    onPillClick: (item: ClauseValuePair, e: any) => void;
    onDisplayChange: (inputEditor: ClauseInputEditor) => void;
    getPills: (list: any) => JSX.Element;
    render(): JSX.Element;
}
export declare const _VIPillSelector: ReactRedux.ConnectedComponent<typeof _VIPillSelectorInner, Pick<React.ClassAttributes<_VIPillSelectorInner> & Props & DatasourceProps & IntlProps, "className" | "style" | "onChange" | "intl" | "dataSource" | "sql" | "ref" | "value" | "key" | "runtime" | "fieldObj" | "isSmallSize" | "codedValues"> & Props>;
declare const VIPillSelector: React.ComponentType<React.PropsWithChildren<import("react-intl").WithIntlProps<Props & IntlProps>>>;
export default VIPillSelector;
