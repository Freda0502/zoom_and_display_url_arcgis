/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, IMThemeVariables } from 'jimu-core';
export interface PageTemplatePopperProps {
    theme: IMThemeVariables;
    referenceElement: HTMLElement;
    onItemSelect: (item: any) => void;
    onClose: () => void;
}
interface State {
    open: boolean;
}
export declare class BlockTemplatePopper extends React.PureComponent<PageTemplatePopperProps, State> {
    contentRef: HTMLElement;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private readonly handleOutsideClick;
    getStyle(): import("jimu-core").SerializedStyles;
    togglePopper: () => void;
    render(): jsx.JSX.Element;
}
export {};
