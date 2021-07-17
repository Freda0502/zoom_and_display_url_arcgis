/// <reference types="react" />
import { React, RepeatedDataSource, UseDataSource, ImmutableArray } from 'jimu-core';
export declare const DATA_URLINFO_REGEXP: RegExp;
export interface DynamicUrlResolverProps {
    /**
     * The data source inherited from the parent widget to parse expressions in rich text
     */
    repeatedDataSource?: RepeatedDataSource;
    /**
     * The data source of the widget where the component is located to parse expressions in rich text
     */
    useDataSources?: ImmutableArray<UseDataSource>;
    /**
     * The id of the widget where the component is located
     */
    widgetId?: string;
    /**
     * Rich text to display in this component
     */
    value: string;
    onHtmlResolved: (html: any) => void;
}
export declare const DynamicUrlResolver: React.ForwardRefExoticComponent<DynamicUrlResolverProps & React.RefAttributes<HTMLDivElement>>;
