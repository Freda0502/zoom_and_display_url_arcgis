import { ArcGISServerInfo, ServiceDefinition } from 'jimu-core';
import { IQueryFeaturesResponse } from '@esri/arcgis-rest-feature-layer';
/**
 * Mocked query of a single layer, inluding query url, query results, query delay and so on.
 */
export interface MockQuery {
    url: string;
    result: IQueryFeaturesResponse;
    delay?: number;
}
/**
 * Mocked single feature layer data, including server info, layer definition, queries and so on.
 */
export interface MockFeatureLayerData {
    url: string;
    serverInfo: ArcGISServerInfo;
    layerDefinition: ServiceDefinition;
    queries?: MockQuery[];
}
/**
 * Mock a single feature layer.
 */
export declare function mockFeatureLayer(mockData: MockFeatureLayerData): void;
/**
 * Mocked single layer in a service, including url, layer definition and so on.
 */
export interface MockLayerInService {
    url: string;
    layerDefinition: ServiceDefinition;
}
/**
 * Mocked whole service, including server info, service definition, layers in the service and so on.
 */
export interface MockServiceData {
    url: string;
    serverInfo: ArcGISServerInfo;
    serviceDefinition: ServiceDefinition;
    layers?: MockLayerInService[];
}
/**
 * Mock a whole service, e.g. feature service, map service or scene service.
 */
export declare function mockService(mockData: MockServiceData): void;
