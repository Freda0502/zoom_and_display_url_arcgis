import { FeatureLayerDataSource, MapServiceDataSource } from 'jimu-core/data-source';
import { DataSourceTypes, WebSceneDataSource } from '../arcgis-data-source-interface';
import { MapDataSourceConstructorOptions, MapDataSourceImpl } from './map-data-source-impl';
export interface WebSceneDataSourceContructorOptions extends MapDataSourceConstructorOptions {
    map?: __esri.WebScene;
}
export declare class WebSceneDataSourceImpl extends MapDataSourceImpl implements WebSceneDataSource {
    type: DataSourceTypes.WebScene;
    map: __esri.WebScene;
    PortalItem: typeof __esri.PortalItem;
    Portal: typeof __esri.Portal;
    WebScene: typeof __esri.WebScene;
    ready(): Promise<(FeatureLayerDataSource | MapServiceDataSource)[]>;
    protected createMap(): void;
    protected createChildDataSources(): Promise<Array<FeatureLayerDataSource | MapServiceDataSource>>;
}
