/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, IMThemeVariables } from 'jimu-core';
export interface DialogTemplatePopperProps {
    theme: IMThemeVariables;
    referenceElement: HTMLElement;
    showList?: boolean;
    formatMessage: (id: string, values?: {
        [key: string]: any;
    }) => string;
    onItemSelect: (item: any) => void;
    onClose: () => void;
}
interface State {
    open: boolean;
}
export declare class DialogTemplatePopper extends React.PureComponent<DialogTemplatePopperProps, State> {
    contentRef: HTMLElement;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private readonly handleOutsideClick;
    togglePopper: () => void;
    onItemSelect: (templateJson: any) => void;
    render(): jsx.JSX.Element;
}
export {};
