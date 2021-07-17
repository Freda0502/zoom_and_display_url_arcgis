import { IMAppConfig, appConfigUtils, AppConfig, BrowserSizeMode, LayoutItemJson, LayoutParentType } from 'jimu-core';
declare const getUniqueId: typeof appConfigUtils.getUniqueId, getUniqueLabel: typeof appConfigUtils.getUniqueLabel;
export { getUniqueId, getUniqueLabel };
export declare function isFirstLevelPage(appConfig: IMAppConfig, pageId: string): boolean;
export declare function isPageHasSubPage(appConfig: IMAppConfig, pageId: string): boolean;
export declare function getRealPageCount(appConfig: IMAppConfig): number;
export declare function getSubRealPageCount(appConfig: IMAppConfig, parentPageId: string): number;
/**
 * Exclude the passed in page and it's sub pages.
 * @param appConfig
 * @param pageId the page that is excluded
 */
export declare function getRealPageCountExcludeOnePage(appConfig: IMAppConfig, pageId: string): number;
export declare function isRealPage(appConfig: IMAppConfig, pageId: string): boolean;
export declare function getCleanAppConfig(appConfig: IMAppConfig): AppConfig;
export declare function removeOrphanItems(appConfig: AppConfig, checkOnly: boolean): AppConfig;
export declare function buildAppConfigStructure(appConfig: AppConfig): AppConfig;
export declare function buildPageStructure(appConfig: AppConfig): AppConfig;
export declare function buildDialogStructure(appConfig: AppConfig): AppConfig;
export declare function buildHeaderStructure(appConfig: AppConfig): AppConfig;
export declare function buildFooterStructure(appConfig: AppConfig): AppConfig;
export declare function buildLayoutStructure(appConfig: AppConfig, parent: {
    type: LayoutParentType;
    id: string;
}, sizemode: BrowserSizeMode, layoutId: string): AppConfig;
export declare function buildWidgetStructure(appConfig: AppConfig, sizemode: BrowserSizeMode, layoutItem: LayoutItemJson): AppConfig;
export declare function buildSectionStructure(appConfig: AppConfig, sizemode: BrowserSizeMode, layoutItem: LayoutItemJson): AppConfig;
export declare function buildScreenGroupStructure(appConfig: AppConfig, sizemode: BrowserSizeMode, layoutItem: LayoutItemJson): AppConfig;
