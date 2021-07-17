/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, ThemeVariables } from 'jimu-core';
interface Props {
    isHeader: boolean;
    isFooter: boolean;
    theme: ThemeVariables;
    onItemSelect: (blockIndex: number) => void;
}
export declare class HeaderFooterList extends React.PureComponent<Props> {
    getStyle(): import("jimu-core").SerializedStyles;
    createBlock(template: any, index: any): jsx.JSX.Element;
    render(): jsx.JSX.Element;
}
export {};
