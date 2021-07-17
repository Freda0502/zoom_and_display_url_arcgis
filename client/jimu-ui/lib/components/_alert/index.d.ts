/// <reference types="react" />
import { AlertPanelProps } from './panel';
import { AlertTooltipProps } from './tooltip';
import { AlertForm } from './type';
export declare type _AlertProps = AlertTooltipProps & AlertPanelProps & {
    form?: AlertForm;
};
export declare const _Alert: (props: _AlertProps) => JSX.Element;
export * from './button';
