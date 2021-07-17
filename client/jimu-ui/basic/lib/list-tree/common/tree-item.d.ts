/// <reference types="react" />
/** @jsx jsx */
import { React, jsx } from 'jimu-core';
import { ThemeProps } from 'jimu-ui';
import { TreeItemBlockInfoType, TreeItemInRelationType } from './tree-types';
/**
 * The tree-item component props
 */
export interface TreeItemProps {
    className?: string;
    treeType?: string;
    singleLeveled?: boolean;
    dndEnabled?: boolean;
    itemJsons: TreeItemInRelationType;
    withStates?: {
        [key: string]: any;
    };
    parentComponent?: any;
    handleAction?: (actionKey: string, actionData: Record<string, any>, refComponent: any) => any;
    handleActionMap?: {
        [actionKey: string]: (actionData: Record<string, any>, refComponent?: any) => any;
    };
    itemBlockInfo?: TreeItemBlockInfoType;
}
export interface TreeItemState {
}
export declare class _TreeItem extends React.Component<TreeItemProps & ThemeProps, TreeItemState> {
    dropZoneInteractable: Interact.Interactable;
    dragInteractable: Interact.Interactable;
    dropZoneRef: React.RefObject<HTMLDivElement>;
    dragRef: React.RefObject<HTMLDivElement>;
    dragTriggered: boolean;
    dndInteract: any;
    constructor(props: any);
    static defaultProps: {
        theme: {};
        className: string;
        treeType: string;
        singleLeveled: boolean;
        dndEnabled: boolean;
        withStates: {};
        parentComponent: any;
        handleAction: (actionKey: any, ...actionArgs: any[]) => any;
        handleActionMap: {};
        itemBlockInfo: {
            name: string;
            children: ({
                name: string;
                children: {
                    name: string;
                    children: ({
                        name: string;
                        children?: undefined;
                    } | {
                        name: string;
                        children: ({
                            name: string;
                            children: {
                                name: string;
                                children: {
                                    name: string;
                                }[];
                            }[];
                        } | {
                            name: string;
                            children?: undefined;
                        })[];
                    })[];
                }[];
            } | {
                name: string;
                children?: undefined;
            })[];
        };
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): any;
    renderChildBlocks(actionData: any, refComponent: any): any;
    defaultHandleActionMap: {
        overrideItemBlockInfo: (actionData: any, refComponent: any) => any;
        renderOverrideItemChildrenToggle: (actionData: any, refComponent: any) => jsx.JSX.Element;
        renderOverrideItemDragHandle: (actionData: any, refComponent: any) => jsx.JSX.Element;
        renderOverrideItemDetailToggle: (actionData: any, refComponent: any) => jsx.JSX.Element;
        renderOverrideItemIcon: (actionData: any, refComponent: any) => jsx.JSX.Element;
        renderOverrideItemTitle: (actionData: any, refComponent: any) => jsx.JSX.Element;
        renderOverrideItemCommands: (actionData: any, refComponent: any) => jsx.JSX.Element;
        renderOverrideItemDraggableContainer: (actionData: any, refComponent: any) => jsx.JSX.Element;
        renderOverrideItemMainLine: (actionData: any, refComponent: any) => jsx.JSX.Element;
        renderOverrideItemDetailLine: (actionData: any, refComponent: any) => jsx.JSX.Element;
        renderOverrideItemBody: (actionData: any, refComponent: any) => jsx.JSX.Element;
        renderOverrideItemContent: (actionData: any, refComponent: any) => jsx.JSX.Element;
        renderOverrideItemDroppableContainer: (actionData: any, refComponent: any) => jsx.JSX.Element;
        renderOverrideItemSubitems: (actionData: any, refComponent: any) => jsx.JSX.Element;
        renderOverrideItem: (actionData: any, refComponent: any) => jsx.JSX.Element;
        handleInitTreeItemDndDropZone: (actionData: any, refComponent: any) => void;
        handleInitTreeItemDndDrag: (actionData: any, refComponent: any) => void;
        getMetaData: (actionData: any, refComponent: any) => void;
        getDragItemJsons: (actionData: any, refComponent: any) => void;
        setDragItemJsons: (actionData: any, refComponent: any) => void;
        handleDidDrop: (...args: any[]) => void;
        handleToggleDetail: (...args: any[]) => void;
        handleExpandItem: (...args: any[]) => void;
        handleEditingTextChange: (...args: any[]) => void;
        handleExitEditing: (...args: any[]) => void;
        handleFindSearchText: (actionData: any, refComponent: any) => any;
        isItemDisplayable: (actionData: any, refComponent: any) => boolean;
        isItemFocused: (actionData: any, refComponent: any) => boolean;
        handleClickItemBody: (...args: any[]) => void;
        handleFocusItem: (actionData: any, refComponent: any) => void;
        handleDoubleClickItemTitle: (...args: any[]) => void;
        handleStartEditing: (...args: any[]) => void;
        onToggleDetail: (actionData: any, refComponent: any) => void;
        onExpandItem: (actionData: any, refComponent: any) => void;
        onEditingTextChange: (actionData: any, refComponent: any) => void;
        onExitEditing: (actionData: any, refComponent: any) => void;
        onDidDrop: (actionData: any, refComponent: any) => void;
        onClickItemBody: (actionData: any, refComponent: any) => void;
        onDoubleClickItemTitle: (actionData: any, refComponent: any) => void;
        onClickItemCommand: (actionData: any, refComponent: any) => void;
        onUpdateItem: (actionData: any, refComponent: any) => void;
    };
}
export declare const TreeItem: React.FC<Pick<Pick<TreeItemProps & ThemeProps, "itemJsons"> & Partial<Pick<TreeItemProps & ThemeProps, "className" | "theme" | "handleActionMap" | "treeType" | "handleAction" | "singleLeveled" | "dndEnabled" | "withStates" | "parentComponent" | "itemBlockInfo">> & Partial<Pick<{
    theme: {};
    className: string;
    treeType: string;
    singleLeveled: boolean;
    dndEnabled: boolean;
    withStates: {};
    parentComponent: any;
    handleAction: (actionKey: any, ...actionArgs: any[]) => any;
    handleActionMap: {};
    itemBlockInfo: {
        name: string;
        children: ({
            name: string;
            children: {
                name: string;
                children: ({
                    name: string;
                    children?: undefined;
                } | {
                    name: string;
                    children: ({
                        name: string;
                        children: {
                            name: string;
                            children: {
                                name: string;
                            }[];
                        }[];
                    } | {
                        name: string;
                        children?: undefined;
                    })[];
                })[];
            }[];
        } | {
            name: string;
            children?: undefined;
        })[];
    };
}, never>>, "className" | "handleActionMap" | "treeType" | "handleAction" | "singleLeveled" | "dndEnabled" | "itemJsons" | "withStates" | "parentComponent" | "itemBlockInfo"> & {
    theme?: import("@emotion/react").Theme;
}>;
