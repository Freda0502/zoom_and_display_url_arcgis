/// <reference types="react" />
/** @jsx jsx */
import { React, jsx } from 'jimu-core';
import { TreeItemsType, TreeItemType } from './tree-types';
/**
 * The tree-main component props
 */
export interface TreeMainProps {
    className?: string;
    topTag?: React.ComponentType<any> | string;
    treeType?: string;
    singleLeveled?: boolean;
    rootItemVisible?: boolean;
    dndEnabled?: boolean;
    rootItemJson: TreeItemType | TreeItemsType;
    withStates?: any;
    parentComponent?: any;
    handleAction?: (actionKey: string, actionData: Record<string, any>, refComponent: any) => any;
    handleActionMap?: {
        [actionKey: string]: (actionData: Record<string, any>, refComponent?: any) => any;
    };
}
export interface TreeMainState {
    dragItems: any[];
}
export declare class TreeMain extends React.Component<TreeMainProps, TreeMainState> {
    constructor(props: any);
    static defaultProps: {
        className: string;
        topTag: string;
        treeType: string;
        singleLeveled: boolean;
        rootItemVisible: boolean;
        dndEnabled: boolean;
        withStates: {};
        parentComponent: any;
        handleAction: (actionKey: any, ...actionArgs: any[]) => any;
        handleActionMap: {};
    };
    render(): any;
    renderItemJson(itemJsons: any): jsx.JSX.Element;
    defaultHandleActionMap: {
        renderOverrideMain: (actionData: any, refComponent: any) => jsx.JSX.Element;
        setDragItemJsons: (actionData: any, refComponent: any) => void;
        getDragItemJsons: (actionData: any, refComponent: any) => any;
    };
}
