/// <reference types="react" />
/** @jsx jsx */
import { React } from 'jimu-core';
import { Sources } from '../../type';
import { PopperProps } from 'jimu-ui';
import { RichPluginInjectedProps } from './plugin';
interface _BubblePluginProps extends PopperProps {
    source?: Sources;
}
export declare type BubblePluginProps = _BubblePluginProps & RichPluginInjectedProps;
export declare const _Bubble: (props: BubblePluginProps) => React.ReactElement;
export declare const Bubble: React.ComponentType<any>;
export {};
