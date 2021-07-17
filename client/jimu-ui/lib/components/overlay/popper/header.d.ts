/// <reference types="react" />
/** @jsx jsx */
import { React } from 'jimu-core';
export interface PanelHeaderAction {
    name: string;
    label?: string;
    icon: any;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
export interface PanelHeaderProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    /**
     * If `true`, Set the cursor as `move`
     */
    moveable?: boolean;
    /**
     * The text that this component displays
     */
    title?: string;
    /**
     * if `false`, hide close button
     */
    showClose?: boolean;
    /**
     * Be invoked when clicking the close button
     */
    onClose?: (e: React.MouseEvent<HTMLDivElement>) => void;
    /**
     * @ignore
     *
     * Customize some actions
     *
     * Note: `actions` and `showClose` are mutually exclusive,
     * `actions` have higher priority, and up to 3 actions are allowed
     */
    actions?: PanelHeaderAction[];
    /**
     * @ignore
     */
    level?: 1 | 2;
}
export declare const PanelHeader: React.NamedExoticComponent<PanelHeaderProps>;
