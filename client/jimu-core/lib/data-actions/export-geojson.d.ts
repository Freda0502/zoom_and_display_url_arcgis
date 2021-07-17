import { ExportBase } from './export-base';
import { DataSource, DataRecord } from '../data-sources/data-source-interface';
export default class ExportGeoJSON extends ExportBase {
    isSupported(dataSource: DataSource, records: DataRecord[]): Promise<boolean>;
    onExecute(dataSource: DataSource, records: DataRecord[]): Promise<boolean>;
}
