/// <reference types="react" />
/** @jsx jsx */
import { React, jsx } from 'jimu-core';
export interface WidgetPlaceholderProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    type?: 'thumbnail' | 'picture';
    widgetId?: string;
    icon: string;
    message?: string;
    autoFlip?: boolean;
}
export declare const WidgetPlaceholder: (props: WidgetPlaceholderProps) => jsx.JSX.Element;
