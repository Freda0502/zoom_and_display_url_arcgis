import { DataSourceManager, IMDataSourceJson, IMDataSourceSchema, IMReversedDataSourceSchema, IMDataSourceInfo, ImmutableArray } from 'jimu-core';
import { GeometryType } from '@esri/arcgis-rest-types';
import { DataSource, DataSourceConstructorOptions, DataRecord, DataSourceStatus } from '../data-source-interface';
/**
 * Include the common implementations for datasource.
 */
export declare abstract class AbstractDataSource implements DataSource {
    id: string;
    type: string;
    dataViewId: string;
    localId: string;
    private fetchedSchema;
    private schema;
    private reverseSchema;
    private dataSourceJson;
    private readonly originDataSourceJson;
    private _url;
    /**
     * jimuName of selected fields, the fields are configured in the widget which generated output data source.
     */
    private selectedFields;
    /**
     * Whether listen selected records from other data sources which are derived from the same main data source.
     */
    private listenSelection;
    isDataView: boolean;
    belongToDataSource: DataSource;
    isLocal: boolean;
    dataSourceManager: DataSourceManager;
    isDataSourceSet: boolean;
    parentDataSource: DataSource;
    jimuChildId: string;
    protected records: DataRecord[];
    protected sourceRecords?: DataRecord[];
    constructor(options: DataSourceConstructorOptions);
    get url(): string;
    set url(u: string);
    getLabel(): string;
    getDataSourceJson(): IMDataSourceJson;
    setDataSourceJson(dsJson: IMDataSourceJson): void;
    traverseToMergeDataSourceJson(baseDsJson: IMDataSourceJson, newDsJson: IMDataSourceJson): IMDataSourceJson;
    getSchema(): IMDataSourceSchema;
    getSelectedFields(): string[];
    setSelectedFields(jimuNames: string[]): void;
    setSchema(schema: IMDataSourceSchema): void;
    fetchSchema(): Promise<IMDataSourceSchema>;
    getFetchedSchema(): IMDataSourceSchema;
    setFetchedSchema(fetchedSchema: IMDataSourceSchema): void;
    getGeometryType(): GeometryType;
    /** @ignore */
    getReversedConfigSchema(): IMReversedDataSourceSchema;
    setRecords(records: DataRecord[]): void;
    setJsonData(data: any[]): void;
    /**
     * @param schema
     */
    private getOneReversedConfigSchema;
    getStatus(): DataSourceStatus;
    setStatus(status: DataSourceStatus): void;
    getCountStatus(): DataSourceStatus;
    setCountStatus(status: DataSourceStatus): void;
    getVersion(): number;
    addVersion(): void;
    getSourceVersion(): number;
    addSourceVersion(): void;
    getSelectedRecordIdsFromInfo(): ImmutableArray<string>;
    setSelectedRecordIdsToInfo(ids: string[], triggerDataSource: DataSource): void;
    getRecords(useNoSelectionView?: boolean): DataRecord[];
    getRecordsWithSelection(): DataRecord[];
    /**
     * If the selected records have not been loaded, they will be filled to the end of the records array.
     * These selected records should match query params of current data source.
     */
    protected concatRecordsAndSelection(records: DataRecord[], selectRecords: DataRecord[]): DataRecord[];
    clearSourceRecordsNotAddVersion(): void;
    clearSourceRecords(): void;
    setSourceRecords(records: DataRecord[]): void;
    getSourceRecords(): DataRecord[];
    /**
     * Return whether current data source can save source records to itself.
     * A data view / local data source doesn't save source records, instead, will use source records in main data source.
     * Selection view is a special data view which will save selected records.
     */
    protected canSaveSource(): boolean;
    protected getSelectionDataView(): DataSource;
    getSelectedRecords(): DataRecord[];
    getSelectedRecordIndexes(): number[];
    getSelectedRecordIds(): string[];
    nextRecord(): DataRecord;
    prevRecord(): DataRecord;
    getRecord(index: number): DataRecord;
    getSourceRecord(index: number): DataRecord;
    getRecordById(id: string): DataRecord;
    getSourceRecordById(id: string): DataRecord;
    clearSelection(): void;
    private clearOneDsSelection;
    updateSelectionStateAndChangeUrl(selectionType: 'byId' | 'byIndex', values: Array<string | number>): void;
    selectRecord(index: number): void;
    selectRecords(indexes: number[]): void;
    selectRecordById(id: string, record?: DataRecord): void;
    selectRecordsByIds(ids: string[], records?: DataRecord[]): void;
    /**
     *
     * @param selection
     */
    protected copySelectionToDataView(selection: DataRecord[]): void;
    getInfo(): IMDataSourceInfo;
    clearRecords(): void;
    clearRecordsNotAddVersion(): void;
    getIdField(): string;
    getRootDataSource(): DataSource;
    ready(): Promise<void | any>;
    getOriginDataSources(): DataSource[];
    getMainDataSource(): DataSource;
    getDataViews(): DataSource[];
    getDataView(dataViewId: string): DataSource;
    getLocalDataSources(): DataSource[];
    getLocalDataSource(localId: string): DataSource;
    getAllDerivedDataSources(): DataSource[];
    getSaveStatus(): DataSourceStatus;
    setSaveStatus(status: DataSourceStatus): void;
    setListenSelection(listen: boolean): void;
    getListenSelection(): boolean;
    protected isSelectionView(): boolean;
    protected isLocalViewOfSelectionView(): boolean;
    addRecord(record: DataRecord): Promise<DataRecord>;
    private doAddRecord;
    updateRecord(record: DataRecord): Promise<boolean>;
    updateRecords(records: DataRecord[]): Promise<boolean>;
    private doUpdateRecords;
    deleteRecord(index: number): Promise<boolean>;
    deleteRecordById(id: string): Promise<boolean>;
    private deleteOneRecord;
    private doDeleteOneRecord;
    private doDeleteOneRecordFromSourceRecords;
    private doAddRecordToSourceRecords;
    private doUpdateRecordsInSourceRecords;
    destroy(): void;
}
