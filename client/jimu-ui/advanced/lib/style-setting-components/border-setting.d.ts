/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, IMThemeVariables } from 'jimu-core';
import { BorderStyle } from 'jimu-ui';
export interface BorderStyleProps {
    className?: string;
    style?: any;
    /**
     * Border style, including type, color, and width
     */
    value?: BorderStyle;
    onChange?: (param: BorderStyle) => void;
}
interface StateToProps {
    appTheme?: IMThemeVariables;
}
export declare class _BorderSetting extends React.PureComponent<BorderStyleProps & StateToProps> {
    static defaultProps: Partial<BorderStyleProps>;
    _updateBorder(key: string, newValue: any): void;
    render(): jsx.JSX.Element;
}
/**
 * A react component for setting border style (border-style, border-color, border-width)
 */
export declare const BorderSetting: React.ComponentType<Pick<Pick<React.ClassAttributes<_BorderSetting> & BorderStyleProps, "className" | "style" | "onChange" | "ref" | "value" | "key"> & BorderStyleProps, "ref" | "key"> & Partial<Pick<Pick<React.ClassAttributes<_BorderSetting> & BorderStyleProps, "className" | "style" | "onChange" | "ref" | "value" | "key"> & BorderStyleProps, "className" | "style" | "onChange" | "value">> & Partial<Pick<Partial<BorderStyleProps>, never>>>;
export {};
