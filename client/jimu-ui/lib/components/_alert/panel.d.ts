/// <reference types="react" />
/** @jsx jsx */
import { jsx, React } from 'jimu-core';
import { AlertType } from './type';
export interface AlertPanelProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    type: AlertType;
    text?: string;
    closable?: boolean;
    withIcon?: boolean;
    open?: boolean;
    onClose?: () => void;
}
export declare const AlertPanel: (props: AlertPanelProps) => jsx.JSX.Element;
export interface UncontrolledAlertPanelProps extends Omit<AlertPanelProps, 'open' | 'onClose'> {
}
export declare const UncontrolledAlertPanel: (props: AlertPanelProps) => jsx.JSX.Element;
