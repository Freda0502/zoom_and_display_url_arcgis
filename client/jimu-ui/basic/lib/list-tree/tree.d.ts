/// <reference types="react" />
/** @jsx jsx */
import { React, jsx } from 'jimu-core';
import { ThemeProps } from 'jimu-ui';
import { TreeItemType, BaseTreeListProps, TreeItemInRelationType, TreeItemsType } from './common/tree-types';
import * as treeUtils from './common/tree-utils';
/**
 * The tree component props
 */
export interface TreeProps extends BaseTreeListProps {
    /**
     * The key of template that you want to use to render the content
     */
    treeType?: string;
    /**
     * Root item node of the tree
     */
    rootItemJson: TreeItemType | TreeItemsType;
    /**
     * The callback that will fire when any action is triggered (use default prop value unless for advanced usage)
     */
    handleAction?: (actionKey: string, actionData: Record<string, any>, refComponent: any) => any;
}
export interface TreeState {
    searchForText: string;
    focusItemJsons: TreeItemInRelationType;
    filterEnabled: boolean;
}
export declare class _Tree extends React.Component<TreeProps & ThemeProps, TreeState> {
    constructor(props: any);
    static defaultProps: {
        theme: {};
        className: string;
        topTag: string;
        treeType: string;
        singleLeveled: boolean;
        rootItemVisible: boolean;
        dndEnabled: boolean;
        handleAction: (propKey: any, ...actionArgs: any[]) => any;
        advancedActionMap: {};
    };
    render(): any;
    defaultHandleActionMap: {
        renderOverride: (actionData: any, refComponent: any) => jsx.JSX.Element;
        isItemDisplayable: (...args: any[]) => boolean;
        handleFocusItem: (...args: any[]) => void;
        getMetaData: (actionData: any, refComponent: any) => any;
    };
}
/**
 * Tree component
 * @see {@link TreeProps} for details.
 */
export declare const Tree: React.FC<Pick<Pick<TreeProps & ThemeProps, "rootItemJson" | "forwardRef" | "onUpdateItem" | "onClickItemBody" | "onToggleDetail" | "onExpandItem" | "onDidDrop" | "onDoubleClickItemTitle" | "onEditingTextChange" | "onExitEditing" | "onClickItemCommand"> & Partial<Pick<TreeProps & ThemeProps, "className" | "theme" | "treeType" | "handleAction" | "topTag" | "singleLeveled" | "rootItemVisible" | "dndEnabled" | "advancedActionMap">> & Partial<Pick<{
    theme: {};
    className: string;
    topTag: string;
    treeType: string;
    singleLeveled: boolean;
    rootItemVisible: boolean;
    dndEnabled: boolean;
    handleAction: (propKey: any, ...actionArgs: any[]) => any;
    advancedActionMap: {};
}, never>>, "className" | "treeType" | "rootItemJson" | "handleAction" | "forwardRef" | "topTag" | "singleLeveled" | "rootItemVisible" | "dndEnabled" | "onUpdateItem" | "onClickItemBody" | "onToggleDetail" | "onExpandItem" | "onDidDrop" | "onDoubleClickItemTitle" | "onEditingTextChange" | "onExitEditing" | "onClickItemCommand" | "advancedActionMap"> & {
    theme?: import("@emotion/react").Theme;
}>;
export { treeUtils };
export { TreeItem } from './common/tree-item';
