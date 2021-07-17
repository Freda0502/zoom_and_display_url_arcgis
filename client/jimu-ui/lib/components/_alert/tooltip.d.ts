/// <reference types="react" />
import { Placement } from '../overlay';
import { AlertButtonProps } from './button';
export interface AlertTooltipProps extends AlertButtonProps {
    text?: string;
    placement?: Placement;
}
export declare const AlertTooltip: (props: AlertTooltipProps) => JSX.Element;
