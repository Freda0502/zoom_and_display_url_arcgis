/// <reference types="react" />
/** @jsx jsx */
import { React } from 'jimu-core';
import { LinearUnit } from 'jimu-ui';
interface Props {
    className?: string;
    style?: React.CSSProperties;
    value: string;
    onChange?: (value: string) => void;
}
export declare class Size extends React.PureComponent<Props> {
    static defaultProps: Partial<Props>;
    toFix2: (number: number) => string;
    convertValue: (value: string | LinearUnit) => any;
    convertToRem: (number: number) => number;
    convertToPx: (rem: string) => number;
    handleChange: (value: LinearUnit) => void;
    render(): React.ReactElement;
}
export {};
