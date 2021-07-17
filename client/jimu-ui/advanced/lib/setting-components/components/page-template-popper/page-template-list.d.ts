/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, ThemeVariables } from 'jimu-core';
interface Props {
    theme: ThemeVariables;
    formatMessage: (id: string, values?: {
        [key: string]: any;
    }) => string;
    onItemSelect: (pageJson: any) => void;
}
export declare class PageTemplateList extends React.PureComponent<Props> {
    render(): jsx.JSX.Element;
}
export {};
