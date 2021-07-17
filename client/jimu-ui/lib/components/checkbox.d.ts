/// <reference types="react" />
import { SwitchBase, SwitchBaseProps } from './_switchBase';
import { React } from 'jimu-core';
/**
 * @ignore
 */
export declare class _CheckboxComponent extends SwitchBase {
    render(): JSX.Element;
}
/**
 * The unstyled version of the Checkbox component.
 * Please use {@link Checkbox} instead.
 */
export declare const _Checkbox: React.ForwardRefExoticComponent<SwitchBaseProps & React.RefAttributes<HTMLInputElement>>;
/**
 * A UI component used to turn an option on or off.
 *
 * #### Example:
 * ```typescript
 * import { Checkbox } from 'jimu-ui';
 * <Checkbox checked/>
 * ```
 * #### Props:
 * See {@link SwitchBaseProps} for more details.
 */
export declare const Checkbox: React.ComponentType<SwitchBaseProps & React.RefAttributes<HTMLInputElement>>;
