import { IMState } from 'jimu-core';
import * as mockData from './lib/mock-data';
export * from './lib/widget-wrapper';
export * from './lib/test-utils';
export * from './lib/mock-service';
export * from './lib/mock-item';
export * from './lib/mock-get-selections';
export * from './lib/mock-systemjs-import';
export { mockData };
/**
 * init widget with default config
 */
export declare function initGlobal(): void;
export declare function getInitState(): IMState;
export declare function initExtensions(): void;
export { default as mockTheme } from './lib/theme-mock';
