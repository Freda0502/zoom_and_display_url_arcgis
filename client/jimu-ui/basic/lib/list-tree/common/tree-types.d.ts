/// <reference types="react" />
import { SVGIconProps } from 'jimu-ui';
export declare type TreeItemInRelationType = TreeItemType[];
export declare type TreeItemsType = TreeItemType[];
export interface CommandActionDataType {
    event: React.SyntheticEvent;
    data?: any;
    command: CommandType;
    itemCommands: CommandType[];
}
export interface CommandType {
    /**
     * Id that can be used to identify the command item
     */
    key?: any;
    /**
     * Label of the command item
     */
    label?: string;
    /**
     * Whether the command item is collapsed
     */
    collapsed?: boolean;
    /**
     * Whether the command item is only displayed when hovering mouse on it
     */
    onlyShowOnHover?: boolean;
    /**
     * Icon of the command item
     */
    iconProps?: SVGIconProps | (() => SVGIconProps);
    /**
     * Callback fired when the command is executed
     */
    action?: (actionData: CommandActionDataType) => void;
}
export interface TreeItemBlockInfoType {
    name: string;
    children?: TreeItemBlockInfoType[];
}
export interface TreeItemType {
    /**
     * Id that can be used to identify the item
     */
    itemKey: string;
    /**
     * Array that includes of all child items
     */
    itemChildren?: TreeItemsType;
    /**
     * Whether the item is disabled
     */
    itemStateDisabled?: boolean;
    /**
     * Whether the children is expanded
     */
    itemStateExpanded?: boolean;
    /**
     * Whether the item is checked
     */
    itemStateChecked?: boolean;
    /**
     * The text currently being edited
     */
    itemStateEditingText?: string;
    /**
     * Whether the detail content is displayed
     */
    itemStateDetailVisible?: boolean;
    /**
     * Detail content of the item
     */
    itemStateDetailContent?: any;
    /**
     * Icon of the item
     */
    itemStateIcon?: SVGIconProps | (() => SVGIconProps);
    /**
     * Title of the item
     */
    itemStateTitle?: string;
    /**
     * Array that includes the commands can be executed for the item
     */
    itemStateCommands?: CommandType[];
}
export interface TreeActionDataType {
    [key: string]: any;
}
export interface UpdateTreeActionDataType extends TreeActionDataType {
    updateType: TreeActionType;
}
export declare enum TreeActionType {
    HandleDidDrop = "handleDidDrop",
    HandleToggleDetail = "handleToggleDetail",
    HandleExpandItem = "handleExpandItem",
    HandleEditingTextChange = "handleEditingTextChange",
    HandleExitEditing = "handleExitEditing",
    HandleStartEditing = "handleStartEditing"
}
/**
 * The base tree/list component props
 */
export interface BaseTreeListProps {
    /**
     * ForwardRef to component outer div
     */
    forwardRef?: (ref: any) => void;
    /**
     * Add class name to the component
     */
    className?: string;
    /**
     * A component or tag name to render the component's top level node
     */
    topTag?: React.ComponentType<any> | string;
    /**
     * Whether to function as a single level list
     */
    singleLeveled?: boolean;
    /**
     * Whether to display the root item itself
     */
    rootItemVisible?: boolean;
    /**
     * Whether to support drag-and-drop feature
     */
    dndEnabled?: boolean;
    /**
     * Fired when the item is updated
     */
    onUpdateItem?: (actionData: {
        [key: string]: any;
    }, refComponent: any) => void;
    /**
     * Fired when the item body is clicked
     */
    onClickItemBody?: (actionData: {
        event: React.SyntheticEvent;
    }, refComponent: any) => void;
    /**
     * Fired when detail content is shown or collapsed
     */
    onToggleDetail?: (actionData: {
        itemStateDetailVisible: boolean;
    }, refComponent: any) => void;
    /**
     * Fired when children is expanded or unexpanded
     */
    onExpandItem?: (actionData: {
        itemStateExpanded: boolean;
    }, refComponent: any) => void;
    /**
     * Fired when an dragging item is dropped
     */
    onDidDrop?: (actionData: {
        dropType: string;
        dragItem: any;
    }, refComponent: any) => void;
    /**
     * Fired when the item title is double-clicked
     */
    onDoubleClickItemTitle?: (actionData: {
        event: React.SyntheticEvent;
    }, refComponent: any) => void;
    /**
     * Fired when the editing text of item title is changed
     */
    onEditingTextChange?: (actionData: {
        itemStateEditingText: string;
    }, refComponent: any) => void;
    /**
     * Fired when editing text of item title is finished
     */
    onExitEditing?: (actionData: {
        itemStateEditingText: string;
    }, refComponent: any) => void;
    /**
     * Fired when any command item is clicked
     */
    onClickItemCommand?: (actionData: CommandActionDataType, refComponent: any) => void;
    /**
     * The callbacks that will be fired when a corresponding action is triggered
     */
    advancedActionMap?: {
        overrideItemBlockInfo?: (actionData: {
            itemBlockInfo: TreeItemBlockInfoType;
        }, refComponent: any) => TreeItemBlockInfoType;
        mapTreeItemProperties?: (actionData: {
            targetItemJsons: TreeItemInRelationType;
        }, refComponent: any) => Array<[string, string | ((actionData: any, refComponent: any) => any)]>;
        renderOverrideItemDraggableContent?: (actionData: any, refComponent: any) => any;
        renderOverrideItemDraggableContainer?: (actionData: {
            children: any;
        }, refComponent: any) => any;
        renderOverrideItemDroppableContent?: (actionData: any, refComponent: any) => any;
        renderOverrideItemDroppableContainer?: (actionData: {
            children: any;
        }, refComponent: any) => any;
        renderOverrideItemChildrenToggle?: (actionData: any, refComponent: any) => any;
        renderOverrideItemDragHandle?: (actionData: any, refComponent: any) => any;
        renderOverrideItemDetailToggle?: (actionData: any, refComponent: any) => any;
        renderOverrideItemIcon?: (actionData: any, refComponent: any) => any;
        renderOverrideItemTitle?: (actionData: any, refComponent: any) => any;
        renderOverrideItemCommands?: (actionData: any, refComponent: any) => any;
        renderOverrideItemMainLine?: (actionData: any, refComponent: any) => any;
        renderOverrideItemDetailLine?: (actionData: any, refComponent: any) => any;
        renderOverrideItemBody?: (actionData: any, refComponent: any) => any;
        renderOverrideItemContent?: (actionData: any, refComponent: any) => any;
        renderOverrideItemSubitems?: (actionData: any, refComponent: any) => any;
        renderOverrideItem?: (actionData: any, refComponent: any) => any;
        renderOverrideMain?: (actionData: any, refComponent: any) => any;
        renderOverride?: (actionData: any, refComponent: any) => any;
        isItemDisplayable?: (actionData: any, refComponent: any) => boolean;
        isItemFocused?: (actionData: any, refComponent: any) => boolean;
        handleFocusItem?: (actionData: any, refComponent: any) => void;
        getMetaData?: (actionData: {
            targetItemJsons: TreeItemInRelationType;
        }, refComponent: any) => any;
    };
}
