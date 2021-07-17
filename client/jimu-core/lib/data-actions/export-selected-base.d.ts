import { AbstractDataAction } from '../base-data-action';
import { DataSource, DataRecord } from '../data-sources/data-source-interface';
export declare abstract class ExportSelectedBase extends AbstractDataAction {
    isSupported(dataSource: DataSource, records: DataRecord[]): Promise<boolean>;
    getRecords(dataSource: DataSource): Promise<DataRecord[]>;
}
