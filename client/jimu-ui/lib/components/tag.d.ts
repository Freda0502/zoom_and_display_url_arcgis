/// <reference types="react" />
/** @jsx jsx */
import { React, jsx } from 'jimu-core';
interface Props {
    /**
     * Tag list data
     */
    data: string[];
    /**
     * Callback fired when the tag list is changed.
     */
    onChange?: (data: string[], index?: number) => void;
    className?: string;
}
export declare class _Tag extends React.PureComponent<Props> {
    static defaultProps: Partial<Props>;
    constructor(props: any);
    deleteLabel: (e: any, index: number) => void;
    render(): jsx.JSX.Element;
}
export declare const Tag: React.ComponentType<Props>;
export {};
