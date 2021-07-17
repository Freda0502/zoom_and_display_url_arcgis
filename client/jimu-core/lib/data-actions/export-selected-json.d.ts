import { ExportSelectedBase } from './export-selected-base';
import { DataSource, DataRecord } from '../data-sources/data-source-interface';
export default class ExportSelectedJson extends ExportSelectedBase {
    onExecute(dataSource: DataSource, records: DataRecord[]): Promise<boolean>;
}
