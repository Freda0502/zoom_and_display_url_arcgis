import { extensionSpec, Resource } from 'jimu-core';
declare global {
    interface Window {
        dojoConfig: any;
    }
}
export declare class ArcGISDependencyDefineExtension implements extensionSpec.DependencyDefine {
    id: string;
    themeChangeObserver: any;
    getDependencyKey(): string;
    getResources(): Resource[];
    private onThemeChange;
    private removeApiThemeStyle;
    private getAPIThemeUrl;
    private checkApiUrl;
}
export declare class ArcGISDataSourceFactoryUriExtension implements extensionSpec.DataSourceFactoryUri {
    id: string;
    getFactoryUri(dataSourceType: any): string;
}
