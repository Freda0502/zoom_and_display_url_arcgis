/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, IMThemeVariables } from 'jimu-core';
import { TooltipRenderProps } from 'react-joyride';
interface ExtraProps {
    theme?: IMThemeVariables;
    disabled?: boolean;
    isStepInjected?: boolean;
}
export declare const _StepDialog: (props: TooltipRenderProps & ExtraProps) => jsx.JSX.Element;
export declare const StepDialog: React.FC<Pick<TooltipRenderProps & ExtraProps, "disabled" | "size" | "step" | "index" | "backProps" | "closeProps" | "primaryProps" | "skipProps" | "tooltipProps" | "continuous" | "isLastStep" | "setTooltipRef" | "isStepInjected"> & {
    theme?: import("@emotion/react").Theme;
}>;
export {};
