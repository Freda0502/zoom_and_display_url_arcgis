import { DataSource, DataRecord } from '../data-sources/data-source-interface';
import { ExportSelectedBase } from './export-selected-base';
export default class ExportSelectedCSV extends ExportSelectedBase {
    onExecute(dataSource: DataSource, records: DataRecord[]): Promise<boolean>;
}
