import { IFeature, IPopupInfo } from '@esri/arcgis-rest-types';
import { FeatureLayerDataSource, SceneLayerDataSource, FeatureDataRecord, IMFeatureLayerQueryParams } from '../../data-sources/data-source-interface';
export declare function createFeatureLayerByRecords(dataSource: FeatureLayerDataSource, records: FeatureDataRecord[], sourceVersion?: number): Promise<{
    layer: __esri.FeatureLayer;
    sourceVersion?: number;
}>;
export declare function changeToRestAPIFeature(feature: IFeature | __esri.Graphic): IFeature;
export declare function changeToJSAPIGraphic(feature: IFeature | __esri.Graphic): Promise<__esri.Graphic>;
export declare function getPopupInfo(dataSource: FeatureLayerDataSource | SceneLayerDataSource): Promise<IPopupInfo>;
/**
 * Convert IMFeatureLayerQueryParams to __esri.Query | __esri.QueryProperties, to query features by layer (instance of ArcGIS JS API FeatureLayer class).
 */
export declare function changeJimuFeatureLayerQueryToJSAPILayerQuery(dataSource: FeatureLayerDataSource | SceneLayerDataSource, queryParams: IMFeatureLayerQueryParams): Promise<__esri.Query | __esri.QueryProperties>;
