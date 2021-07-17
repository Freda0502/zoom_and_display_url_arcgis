import { IMDataViewJson } from 'jimu-core';
import { AbstractDataSource } from './abstract-data-source';
import { QueriableDataSource, DataSourceConstructorOptions, QueryOptions, QueryResult, DataRecord, QueryParams, IMQueryParams, WidgetDataSourcePair } from '../data-source-interface';
export declare abstract class AbstractQueriableDataSource extends AbstractDataSource implements QueriableDataSource {
    lastUpdateTime: Date;
    private lastQueryId;
    private lastQueryParams;
    private lastCountQueryParams;
    private lastRefreshTime;
    /**
     * Data will be cached here, not this.records.
     *
     * When selectRecordById, some selected records may be put in this.records, so they are not in the pages.
     */
    private pages;
    private pagePromises;
    private countPromise;
    private byIdPromise;
    private autoRefreshHandle;
    private _count;
    private throttleQueryRecordsByIdWithCurrentQueryParams;
    constructor(options: DataSourceConstructorOptions);
    ready(): Promise<void | any>;
    getCurrentQueryParams(excludeOption?: WidgetDataSourcePair): any;
    getRuntimeQueryParams(excludeWidgetId?: string): QueryParams;
    private getCurrentQueryParamsByQuery;
    private getMergedWidgetQueries;
    getCurrentQueryId(): string;
    getRealQueryParams(query: QueryParams, flag: 'query' | 'load', options?: QueryOptions): QueryParams;
    /**
     * the data source's query is a data view config as well.
     *  */
    protected getDataViewConfig(): IMDataViewJson;
    private mergeQueryWithConfigQuery;
    updateQueryParams(query: QueryParams, widgetId: string): void;
    getQueryPageSize(): number;
    getMaxRecordCount(): number;
    private getQueryWithoutPage;
    private checkClearLocalCache;
    getRecordsByPage(page: number, pageSize: number, useNoSelectionView?: boolean): DataRecord[];
    getRecordsByPageWithSelection(page: number, pageSize: number): DataRecord[];
    getPagesData(): {
        [page: number]: DataRecord[];
    };
    setPagesData(pages: {
        [page: number]: DataRecord[];
    }): void;
    clearRecordsNotAddVersion(): void;
    /**
     * get continuious page records
     */
    getRecords(useNoSelectionView?: boolean): DataRecord[];
    get count(): number;
    set count(c: number);
    private isRealSelectionEmpty;
    private getRealRecords;
    setRecords(records: DataRecord[]): void;
    getRealQueryPages(page: number, pageSize: number): number[];
    /**
     * the page/pageSize in query will not be used in the actual query
     */
    load(query: QueryParams, options?: QueryOptions): Promise<DataRecord[]>;
    /**
     * the resolved boolean means whether the query result is used (only the last query update records)
     * @param realQuery
     * @param page
     */
    private loadByPage;
    loadCount(query: QueryParams, options?: QueryOptions): Promise<number>;
    query(query: QueryParams, options?: QueryOptions): Promise<QueryResult>;
    queryCount(query: QueryParams, options?: QueryOptions): Promise<QueryResult>;
    loadById(id: string, refresh?: boolean): Promise<DataRecord>;
    queryById(id: string): Promise<DataRecord>;
    getAutoRefreshInterval(): number;
    getLastRefreshTime(): Date;
    startAutoRefresh(): void;
    stopAutoRefresh(): void;
    getMainDataSource(): QueriableDataSource;
    getDataViews(): QueriableDataSource[];
    getDataView(dataViewId: string): QueriableDataSource;
    setSelectedRecordIdsToInfo(ids: string[], triggerDataSource: QueriableDataSource): void;
    private queryRecordsByIdWithCurrentQueryParams;
    abstract getConfigQueryParams(): QueryParams;
    abstract getRemoteQueryParams(): QueryParams;
    abstract mergeQueryParams(baseQuery: QueryParams, newQuery: QueryParams): QueryParams;
    abstract allowToExportData(): Promise<boolean>;
    /**
     * Origin query is the query params which is passed to `query` / `load` method.
     * Real query is the result of merging origin query and other configured queries.
     * In the merging process, some query params may be removed due to the service capability.
     *
     * Use real query to send the query request, use origin query to get the removed query params and enhance the query result.
     */
    protected abstract doQuery(realQuery: IMQueryParams, originQuery: IMQueryParams): Promise<QueryResult>;
    protected abstract doQueryCount(realQuery: IMQueryParams): Promise<QueryResult>;
    protected abstract doQueryById(id: string): Promise<DataRecord>;
}
