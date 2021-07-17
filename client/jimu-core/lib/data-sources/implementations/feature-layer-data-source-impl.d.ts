import { ServiceDefinition, IMDataSourceSchema } from 'jimu-core';
import { IFeature, GeometryType, IPopupInfo } from '@esri/arcgis-rest-types';
import { IQueryFeaturesOptions } from '@esri/arcgis-rest-feature-layer';
import { AbstractQueriableDataSource } from '../ds-base-types';
import { DataSourceConstructorOptions, DataSourceTypes, QueryResult, CodedValue, FeatureLayerDataSource, FeatureDataRecord, IMFeatureLayerQueryParams, FeatureLayerQueryParams, QueryOptions, WidgetDataSourcePair, SceneLayerDataSource } from '../data-source-interface';
export interface FeatureLayerDataSourceConstructorOptions extends DataSourceConstructorOptions {
    /**
     * If the feature layer data source is used by a scene layer data source to do query,
     * will save the scene layer data source to make it easy to find it.
     */
    associatedDataSource?: SceneLayerDataSource;
    /**
     * If the feature layer data source is created from a JS API feature layer,
     * will use data in the layer as source of current data source.
     */
    layer?: __esri.FeatureLayer;
    /**
     * If the feature layer data source is created from an array directly,
     * will save the array to `sourceRecords` and use it as source of current data source.
     */
    sourceRecords?: FeatureDataRecord[];
}
export interface FeatureLayerDataSourceConstructorOptionsWithJSAPILayer extends FeatureLayerDataSourceConstructorOptions {
    layer?: __esri.FeatureLayer;
}
export interface FeatureLayerDataSourceConstructorOptionsWithRecords extends FeatureLayerDataSourceConstructorOptions {
    sourceRecords?: FeatureDataRecord[];
}
export declare class FeatureLayerDataSourceImpl extends AbstractQueriableDataSource implements FeatureLayerDataSource {
    portalUrl?: string;
    itemId?: string;
    layerId?: string;
    private _layer?;
    protected sourceRecords?: FeatureDataRecord[];
    private associatedDataSource?;
    private layerDefinition;
    private allowExportRemoteCheckPromise;
    type: DataSourceTypes.FeatureLayer;
    createFeatureLayerPromise: Promise<__esri.FeatureLayer>;
    constructor(options: FeatureLayerDataSourceConstructorOptionsWithJSAPILayer);
    constructor(options: FeatureLayerDataSourceConstructorOptionsWithRecords);
    setAssociatedDataSource(associatedDataSource: SceneLayerDataSource): void;
    getAssociatedDataSource(): SceneLayerDataSource;
    getIdField(): string;
    getGeometryType(): GeometryType;
    setJsonData(data: Array<IFeature | __esri.Graphic>): void;
    doQuery(realQuery: IMFeatureLayerQueryParams, originQuery: IMFeatureLayerQueryParams): Promise<QueryResult>;
    /**
     * Some query params are not supported according to the feature service capability. See https://developers.arcgis.com/rest/services-reference/query-feature-service-layer-.htm.
     * We will remove these query params before sending query request. See `fixQueryParam` method.
     * However, we can enhance the result after the query request is back.
     *
     * For example, if `supportsOrderByOnlyOnLayerFields` is true, only fields from the layer's fields array can be used with the `orderByFields` parameter,
     * the `outStatisticfieldName` from outStatistics can't be used. In the case, data source can help to sort the records and return an expected result.
     */
    enhanceQueryResult(queryResult: QueryResult, originQuery: IMFeatureLayerQueryParams): QueryResult;
    private sliceRecordsByPage;
    private sortRecordsByFields;
    private compareRecordsByFields;
    /**.
     * Negative number means value of r1 should be before value of r2,
     * 0 means value of r1 is equal as value of r2,
     * positive means value of r1 should be after value of r2.
     */
    private getCompareValueResult;
    doQueryCount(queryParams: IMFeatureLayerQueryParams): Promise<QueryResult>;
    protected doAddRecordToServerSideSource(record: FeatureDataRecord): Promise<FeatureDataRecord>;
    protected doDeleteOneRecordFromServerSideSource(record: FeatureDataRecord): Promise<boolean>;
    protected doUpdateRecordsInServerSideSource(records: FeatureDataRecord[]): Promise<boolean>;
    private doQueryCountByLayer;
    private doQueryCountByUrl;
    doQueryById(id: string): Promise<FeatureDataRecord>;
    queryById(id: string): Promise<FeatureDataRecord>;
    getConfigQueryParams(): FeatureLayerQueryParams;
    mergeQueryParams(baseQuery: FeatureLayerQueryParams, newQuery: FeatureLayerQueryParams): FeatureLayerQueryParams;
    getCurrentQueryParams(excludeOption?: WidgetDataSourcePair): FeatureLayerQueryParams;
    getRealQueryParams(query: any, flag: 'query' | 'load', options?: QueryOptions): FeatureLayerQueryParams;
    getRemoteQueryParams(): FeatureLayerQueryParams;
    private applyGDBVersionAndFix;
    /**
     * Some query params are not supported according to the feature service capability, we'll fix it here.
     */
    fixQueryParam(q: IMFeatureLayerQueryParams): IMFeatureLayerQueryParams;
    private addRecordByLayer;
    private addRecordByUrl;
    private updateRecordsByLayer;
    private updateRecordsByUrl;
    private deleteOneRecordByLayer;
    private deleteOneRecordByUrl;
    fetchSchema(): Promise<IMDataSourceSchema>;
    private createLayerByItemId;
    private fetchSchemaWithoutLayer;
    private fetchSchemaWithLayer;
    private updateLayerDefinitionByLayer;
    getLayerDefinition(): ServiceDefinition;
    getFieldCodedValueList(jimuFieldName: string, record?: FeatureDataRecord): CodedValue[];
    getGDBVersion(): string;
    changeGDBVersion(gdbVersion: string): void;
    private getUpdatedLayerDefinition;
    private getOrderByArray;
    /**
     * Convert IMFeatureLayerQueryParams to IQueryFeaturesOptions, to query features by service url.
     */
    changeJimuQueryToRestJSQuery(queryParams: IMFeatureLayerQueryParams): IQueryFeaturesOptions;
    /**
     * Convert IMFeatureLayerQueryParams to __esri.Query | __esri.QueryProperties, to query features by layer (instance of ArcGIS JS API FeatureLayer class).
     */
    changeJimuQueryToJSAPILayerQuery(queryParams: IMFeatureLayerQueryParams): Promise<__esri.Query | __esri.QueryProperties>;
    private doQueryByUrl;
    private doQueryByLayer;
    private _q;
    allowToExportData(): Promise<boolean>;
    private allowToExportDataInRemote;
    private allowToExportDataInItem;
    /**
     * Check export setting in portal/AGOL (item setting page).
     */
    private getWhetherAllowToExportInItemSetting;
    getPopupInfo(): Promise<IPopupInfo>;
    supportSymbol(): boolean;
    supportAttachment(): boolean;
    get layer(): __esri.FeatureLayer;
    set layer(l: __esri.FeatureLayer);
}
