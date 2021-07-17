/// <reference types="react" />
import { React } from 'jimu-core';
import { InputProps } from './types';
/**
 * Common Props for the 'switch' type components, such as Radio, Checkbox, and Switch.
 *
 * Inherits properties from `HTMLInputElement`. `type` prop is automatically handled by the component.
 *
 * See [additional props available from HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement).
 */
export interface SwitchBaseProps extends Omit<InputProps, 'onChange' | 'type'> {
    /**
     * The `ref` that is forwarded to the input element.
     */
    forwardedRef?: React.Ref<HTMLInputElement>;
    /**
     * If `true`, the component is focused.
     */
    focus?: boolean;
    /**
     * Callback fires when the `checked` state is changed.
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    /**
     * If `true`, the component is indeterminate, regardless of `checked`.
     */
    indeterminate?: boolean;
}
/** The base component that provides the common methods and UI for Checkbox, Radio and Switch components. */
export declare class SwitchBase extends React.PureComponent<SwitchBaseProps> {
    switchType: 'checkbox' | 'radio';
    constructor(props: SwitchBaseProps);
    onClick(evt: React.MouseEvent<HTMLInputElement>): void;
    onFocus(evt: React.FocusEvent<HTMLInputElement>): void;
    onBlur(evt: React.FocusEvent<HTMLInputElement>): void;
    onChange(evt: React.ChangeEvent<HTMLInputElement>): void;
    updateIndeterminate(): void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: SwitchBaseProps): void;
    render(): JSX.Element;
}
