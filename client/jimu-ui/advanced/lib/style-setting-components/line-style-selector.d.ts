/// <reference types="react" />
import { LineType } from 'jimu-ui';
export interface LineStyleProps {
    type?: 'normal' | 'symbol';
    value: LineType;
    onChange?: (value: string) => void;
    className?: string;
    style?: any;
}
export declare const LineStyleTranstions: {
    dashed: string;
    dotted: string;
    double: string;
    solid: string;
    esriSLSDash: string;
    esriSLSDot: string;
    esriSLSSolid: string;
    esriSLSDashDot: string;
    esriSLSDashDotDot: string;
};
export declare const LineStyleSelector: (props: LineStyleProps) => JSX.Element;
