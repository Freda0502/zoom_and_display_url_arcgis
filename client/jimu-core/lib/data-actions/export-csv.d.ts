import { ExportBase } from './export-base';
import { DataSource, DataRecord } from '../data-sources/data-source-interface';
export default class ExportCSV extends ExportBase {
    onExecute(dataSource: DataSource, records: DataRecord[]): Promise<boolean>;
}
