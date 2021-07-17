/// <reference types="react" />
import { React } from 'jimu-core';
import { SwitchBaseProps } from './_switchBase';
/**
 * The unstyled version of the Switch component.
 * Please use {@link Switch} instead.
 */
export declare const _Switch: React.ForwardRefExoticComponent<SwitchBaseProps & React.RefAttributes<HTMLInputElement>>;
/**
 * A UI component used to toggle an on-off state.
 *
 * #### Example:
 * ```typescript
 * import { Switch } from 'jimu-ui';
 * <Switch checked/>
 * ```
 * #### Props:
 * See {@link SwitchBaseProps} for more details.
 */
export declare const Switch: React.ComponentType<SwitchBaseProps & React.RefAttributes<HTMLInputElement>>;
