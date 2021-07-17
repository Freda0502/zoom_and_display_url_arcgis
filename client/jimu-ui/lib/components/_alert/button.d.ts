/// <reference types="react" />
/** @jsx jsx */
import { React } from 'jimu-core';
import { ButtonProps } from '../button';
import { AlertButtonSize, AlertButtonType, AlertType } from './type';
export interface AlertButtonProps extends Omit<ButtonProps, 'type' | 'size'> {
    type: AlertType;
    buttonType?: AlertButtonType;
    size?: AlertButtonSize;
}
export declare const AlertButton: React.ForwardRefExoticComponent<AlertButtonProps & React.RefAttributes<HTMLButtonElement>>;
