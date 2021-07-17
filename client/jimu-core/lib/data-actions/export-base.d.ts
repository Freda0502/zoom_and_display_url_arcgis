import { AbstractDataAction } from '../base-data-action';
import { DataSource, DataRecord } from '../data-sources/data-source-interface';
export declare abstract class ExportBase extends AbstractDataAction {
    isSupported(dataSource: DataSource, records: DataRecord[]): Promise<boolean>;
    confirm(dataSource: DataSource, records: DataRecord[]): Promise<{
        needed: boolean;
        content?: {
            title: string;
            content: string;
            okLabel: string;
            cancelLabel: string;
        };
    }>;
    getRecords(dataSource: DataSource): Promise<DataRecord[]>;
    private query;
}
