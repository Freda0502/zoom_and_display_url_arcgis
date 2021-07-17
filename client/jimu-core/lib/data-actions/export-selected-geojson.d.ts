import { ExportSelectedBase } from './export-selected-base';
import { DataSource, DataRecord } from '../data-sources/data-source-interface';
export default class ExportSelectedGeoJSON extends ExportSelectedBase {
    isSupported(dataSource: DataSource, records: DataRecord[]): Promise<boolean>;
    onExecute(dataSource: DataSource, records: DataRecord[]): Promise<boolean>;
}
