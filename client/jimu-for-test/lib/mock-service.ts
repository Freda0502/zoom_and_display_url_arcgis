import { ArcGISServerInfo, ServiceDefinition, ServiceManager } from 'jimu-core';
import { IQueryFeaturesResponse } from '@esri/arcgis-rest-feature-layer';

/**
 * Mocked query of a single layer, inluding query url, query results, query delay and so on.
 */
export interface MockQuery{
  url: string;
  result: IQueryFeaturesResponse;
  delay?: number;
}

/**
 * Mocked single feature layer data, including server info, layer definition, queries and so on.
 */
export interface MockFeatureLayerData{
  url: string;
  serverInfo: ArcGISServerInfo;
  layerDefinition: ServiceDefinition;
  queries?: MockQuery[];
}

/**
 * Mock a single feature layer.
 */
export function mockFeatureLayer(mockData: MockFeatureLayerData){
  const serverInfoUrl = ServiceManager.getInstance().getArcGISServerUrlFromServiceUrl(mockData.url);

  fetchMock.mockResponse(req => {
    const reqUrl = decodeURIComponent(req.url);
    if (reqUrl.split('?')[0] === serverInfoUrl) {
      return Promise.resolve(JSON.stringify(mockData.serverInfo));
    } else if (reqUrl.split('?')[0] === mockData.url) {
      return Promise.resolve(JSON.stringify(mockData.layerDefinition)); // schema
    } else {
      const query = mockData.queries && mockData.queries.find(q => decodeURIComponent(q.url) === reqUrl);
      if(query){
        if(query.delay){
          return new Promise(resolve => {
            setTimeout(() => {
              return resolve(JSON.stringify(query.result));
            }, query.delay)
          });
        }else{
          return Promise.resolve(JSON.stringify(query.result));
        }
      }else{
        console.log(`${reqUrl} is not mocked.`);
        return Promise.resolve({status: 404});
      }
    }
  })
}

/**
 * Mocked single layer in a service, including url, layer definition and so on.
 */
export interface MockLayerInService{
  url: string; // layer url, e.g. https://xxx/arcgis/rest/services/xxx/FeatureServer/0.
  layerDefinition: ServiceDefinition;
}

/**
 * Mocked whole service, including server info, service definition, layers in the service and so on.
 */
export interface MockServiceData{
  url: string; // service url, e.g. https://xxx/arcgis/rest/services/xxx/FeatureServer.
  serverInfo: ArcGISServerInfo;
  serviceDefinition: ServiceDefinition;
  layers?: MockLayerInService[];
}

/**
 * Mock a whole service, e.g. feature service, map service or scene service.
 */
export function mockService(mockData: MockServiceData){
  const serverInfoUrl = ServiceManager.getInstance().getArcGISServerUrlFromServiceUrl(mockData.url);

  fetchMock.mockResponse(req => {
    const reqUrl = decodeURIComponent(req.url);
    if (reqUrl.split('?')[0] === serverInfoUrl) {
      return Promise.resolve(JSON.stringify(mockData.serverInfo));
    } else if (reqUrl.split('?')[0] === mockData.url) {
      return Promise.resolve(JSON.stringify(mockData.serviceDefinition));
    } else {
      const layer = mockData.layers && mockData.layers.find(l => reqUrl.split('?')[0] === l.url);
      if(layer){
        return Promise.resolve(JSON.stringify(layer.layerDefinition));
      }else{
        console.log(`${reqUrl} is not mocked.`);
        return Promise.resolve({status: 404});
      }
    }
  })
}
