import { IntlShape } from 'react-intl';
import { DataRecord, DataSource } from './data-sources/data-source-interface';
import type { IconResult } from './types/app-config';
export interface DataAction {
    /**
     * the unique id
     */
    id: string;
    index?: number;
    name?: string;
    label?: string;
    icon?: IconResult | string;
    /**
     * The widget id that provides the action.  No widget id means the actions is provide by jimu.
     */
    widgetId?: string;
    destroy: () => void;
    isSupported: (dataSource: DataSource, records: DataRecord[]) => Promise<boolean>;
    onExecute: (dataSource: DataSource, records: DataRecord[], name?: string, config?: any) => Promise<boolean>;
    confirm: (dataSource: DataSource, records: DataRecord[]) => Promise<{
        needed: boolean;
        content?: {
            title: string;
            content: string;
            okLabel: string;
            cancelLabel: string;
        };
    }>;
}
export interface DataActionConstructorOptions {
    id: string;
    name?: string;
    label?: string;
    icon?: string;
    index?: number;
    widgetId?: string;
}
export interface RegisterDataActionOptions {
    id: string;
    name?: string;
    uri?: string;
    icon?: string;
    widgetId?: string;
    label: string;
    ActionClass?: typeof DummnyDataAction;
}
export interface DataActionSettingProps<T> {
    widgetId: string;
    actionName: string;
    config?: T;
    intl?: IntlShape;
    onSettingChange: (confit: T) => void;
}
export declare abstract class AbstractDataAction implements DataAction {
    /**
     * The unique id
     */
    id: string;
    name: string;
    label: string;
    index: number;
    /**
     * The widget id that provides the action
     */
    widgetId: string;
    icon?: IconResult | string;
    constructor(options: DataActionConstructorOptions);
    destroy(): void;
    abstract isSupported(dataSource: DataSource, records: DataRecord[]): Promise<boolean>;
    abstract onExecute(dataSource: DataSource, records: DataRecord[], name?: string, actionConfig?: any): Promise<boolean>;
    confirm(dataSource: DataSource, records: DataRecord[]): Promise<{
        needed: boolean;
        content?: {
            title: string;
            content: string;
            okLabel: string;
            cancelLabel: string;
        };
    }>;
}
export declare class DummnyDataAction extends AbstractDataAction {
    isSupported(dataSource: DataSource, records: DataRecord[]): Promise<boolean>;
    onExecute(dataSource: DataSource, records: DataRecord[]): Promise<boolean>;
}
