import * as React from 'react';
import * as Immutable from 'seamless-immutable';
import { ImmutableArray } from 'seamless-immutable';
import { IntlShape } from 'react-intl';
import { IMExpressionMap, IMExpression } from './types/expression';
import { IMDataSourceInfo } from './types/state';
import { DataSource } from './data-sources/data-source-interface';
import { UseDataSource } from './types/app-config';
import { RepeatedDataSource } from './repeat-data-source-context';
export interface MultipleExpressionResolveResults {
    [expressionId: string]: SingleExpressionResolveResult;
}
export interface SingleExpressionResolveResult {
    isSuccessful: boolean;
    value: string | ExpressionResolverErrorCode;
}
export declare type ResolverRenderFunction = (resolvedResults: MultipleExpressionResolveResults | SingleExpressionResolveResult) => React.ReactNode;
/**
 * If resolving expression fails, the error code will be returned to indicate the reason for the failure.
 */
export declare enum ExpressionResolverErrorCode {
    Failed = "RESOLVE_FAILED",
    NotMatched = "DATA_SOURCES_IN_EXPRESSION_CANNOT_MATCH_DATA_SOURCES_IN_USE"
}
/**
 * The ExpressionResolverComponent component props.
 */
export interface ExpressionResolverComponentProps {
    /**
     * Widget's `useDataSources`, the data sources that the widget is using.
     * If the data source of one expression part is not in the array, this part will not be resolved.
     */
    useDataSources: ImmutableArray<UseDataSource>;
    /**
     * Expressions that need to be resolved.
     */
    expression: IMExpressionMap | IMExpression;
    /**
     * Id of the widget.
     */
    widgetId: string;
    /**
     * If one of children components' rendering depends on the resolved result, you can choose to use this render function.
     */
    children?: ResolverRenderFunction | React.ReactNode;
    /**
     * Whether or not the expression is resolved successfully, the function will be called.
     */
    onChange?: (resolvedResults: MultipleExpressionResolveResults | SingleExpressionResolveResult) => void;
}
interface ExtraProps {
    intl: IntlShape;
    repeatedDataSource: RepeatedDataSource | RepeatedDataSource[];
}
interface State {
    results: MultipleExpressionResolveResults | SingleExpressionResolveResult;
    infos: {
        [dataSourceId: string]: IMDataSourceInfo;
    };
}
export declare class _ExpressionResolverComponent extends React.PureComponent<ExpressionResolverComponentProps & ExtraProps, State> {
    dataSources: {
        [dataSourceId: string]: DataSource;
    };
    resultsCache: MultipleExpressionResolveResults | SingleExpressionResolveResult;
    __unmount: boolean;
    __resolveCount: number;
    constructor(props: ExpressionResolverComponentProps & ExtraProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: ExpressionResolverComponentProps & ExtraProps, prevState: State): void;
    getLocalLoadId(): string;
    getWhetherExpressionsAreSame: (exp: IMExpressionMap | IMExpression, prevExp: IMExpressionMap | IMExpression) => boolean;
    getWhetherDsInfosAreSame: (infos: {
        [dataSourceId: string]: Immutable.ImmutableObject<import("jimu-core/lib/types/state").DataSourceInfo>;
    }, prevInfos: {
        [dataSourceId: string]: Immutable.ImmutableObject<import("jimu-core/lib/types/state").DataSourceInfo>;
    }, expression: IMExpressionMap | IMExpression) => boolean;
    getUseSelectionDsIdsFromExpression: (expression: IMExpressionMap | IMExpression) => string[];
    getUseSelectionDsIdsFromSingleExpression: (expression: IMExpression) => string[];
    getWhetherUseDssAreSame: (useDss: ImmutableArray<UseDataSource>, prevUseDss: ImmutableArray<UseDataSource>) => boolean;
    getWhetherIsMultipleExpression: (expression: IMExpression | IMExpressionMap) => boolean;
    resolveExpressions: (expression: IMExpressionMap | IMExpression, useDataSources: ImmutableArray<UseDataSource>, currentResolveCount: number) => Promise<string>;
    resolveSingleExpression: (expression: IMExpression) => Promise<string>;
    onDataSourceCreated: (dss: {
        [dataSourceId: string]: DataSource;
    }) => void;
    onDataSourceInfoChange: (infos: {
        [dataSourceId: string]: Immutable.ImmutableObject<import("jimu-core/lib/types/state").DataSourceInfo>;
    }) => void;
    getWhetherExpressionDssInUseDss: (expression: IMExpression) => boolean;
    getWhetherDsIdInUseDss: (dsId: string) => boolean;
    /**
     * When resolve functions (statistics), it will create local data sources.
     * Need to listen to the changes of these local data sources to know data source is refreshed.
     */
    getLocalDataSources: (useDataSources: ImmutableArray<UseDataSource>) => ImmutableArray<UseDataSource>;
    getQueries: (useDataSources: ImmutableArray<UseDataSource>, expression: IMExpressionMap | IMExpression) => {};
    render(): JSX.Element;
}
/**
 * The component is used to resolve {@link Expression}.
 * In most cases, pass on `useDataSources`, `expression` and `widgetId`, then you can get resolved result in the function `onChange`.
 */
export declare const ExpressionResolverComponent: React.FC<import("react-intl").WithIntlProps<Pick<ExpressionResolverComponentProps & ExtraProps, "children" | "onChange" | "intl" | "expression" | "widgetId" | "useDataSources">>> & {
    WrappedComponent: React.ComponentType<Pick<ExpressionResolverComponentProps & ExtraProps, "children" | "onChange" | "intl" | "expression" | "widgetId" | "useDataSources">>;
};
export {};
