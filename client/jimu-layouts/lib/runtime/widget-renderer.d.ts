/// <reference types="react" />
/** @jsx jsx */
import { React, ReactRedux, jsx } from 'jimu-core';
import { LayoutItemProps, WidgetProps } from '../types';
declare class _WidgetRenderer extends React.PureComponent<LayoutItemProps & WidgetProps, {
    error: string;
}> {
    ref: React.RefObject<HTMLDivElement>;
    constructor(props: any);
    private loadWidgetClass;
    componentDidMount(): void;
    componentDidUpdate(): void;
    /**
     * Must add an extra div to keep the aspect ratio.
     * https://www.w3schools.com/howto/howto_css_aspect_ratio.asp
     */
    renderWidgetContent(): jsx.JSX.Element;
    getStyle(): import("jimu-core").SerializedStyles;
    onMouseDown(evt: any): void;
    render(): jsx.JSX.Element;
}
export declare const WidgetRenderer: ReactRedux.ConnectedComponent<typeof _WidgetRenderer, Pick<React.ClassAttributes<_WidgetRenderer> & LayoutItemProps & WidgetProps, "className" | "draggable" | "children" | "onClick" | "onDoubleClick" | "aspectRatio" | "layoutId" | "layoutItemId" | "ref" | "key" | "resizable" | "isInSection" | "showDefaultTools" | "selectable" | "forbidContextMenu" | "forbidToolbar" | "forceAspectRatio" | "resizeObserver"> & LayoutItemProps>;
export {};
