/// <reference types="react" />
/** @jsx jsx */
import { React, ImmutableArray, UseDataSource } from 'jimu-core';
import { RichExpressionBuilderProps } from './expression-builder';
import { PanelHeaderProps, PopperProps } from 'jimu-ui';
import { RichPluginInjectedProps } from './plugin';
import { Sources } from '../../type';
export interface ExpressionPluginProps extends RichExpressionBuilderProps, RichPluginInjectedProps, PopperProps {
    widgetId: string;
    useDataSources?: ImmutableArray<UseDataSource>;
    header?: PanelHeaderProps;
    source?: Sources;
}
export declare const _Expression: (props: ExpressionPluginProps) => React.ReactElement;
export declare const Expression: React.ComponentType<any>;
