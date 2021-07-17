/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, ThemeVariables, DataSource, DataRecord, DataAction, IMWidgetJson, ThemeButtonType } from 'jimu-core';
import { ButtonSize } from './button';
interface Props {
    widgetId: string;
    dataSource: DataSource;
    records: DataRecord[];
    dataName?: string;
    type?: ThemeButtonType;
    size?: ButtonSize;
}
interface ThemeProps {
    theme: ThemeVariables;
}
interface State {
    isOpen: boolean;
    loading: boolean;
    actionGroups: {
        [key: string]: DataAction[];
    };
    action?: DataAction;
    showConfirm?: boolean;
    confirmContent?: {
        title: string;
        content: string;
        okLabel: string;
        cancelLabel: string;
    };
}
export declare class _DataActionDropDown extends React.PureComponent<Props & ThemeProps, State> {
    constructor(props: any);
    onDropDownToggle: () => void;
    onActionItemClick: (evt: any, action: DataAction) => Promise<void>;
    getWidget(widgetId: string): IMWidgetJson;
    getActionLabel(actionName: string, firstAction: DataAction): string;
    handleClearConfirm: () => void;
    handleConfirmedAction: () => void;
    createAction(actionName: string): JSX.Element;
    getLoadingStyle(): import("jimu-core").SerializedStyles;
    render(): jsx.JSX.Element;
}
export declare const DataActionDropDown: React.FC<Pick<Props & ThemeProps, "type" | "size" | "widgetId" | "dataSource" | "records" | "dataName"> & {
    theme?: import("@emotion/react").Theme;
}>;
export {};
