/// <reference types="react" />
/** @jsx jsx */
import { jsx } from 'jimu-core';
import { ThemeProps } from 'jimu-ui';
import { BaseTreeListProps, TreeItemsType } from './common/tree-types';
export declare type ListItemsType = TreeItemsType;
/**
 * The list component props
 */
export interface ListProps extends BaseTreeListProps {
    /**
     * The key of template that you want to use to render the content
     */
    listType?: string;
    /**
     * List item nodes array
     */
    itemsJson?: ListItemsType;
}
export declare function _List(props: ListProps & ThemeProps): jsx.JSX.Element;
/**
 * List component
 * @see {@link ListProps} for details.
 */
export declare const List: import("react").FC<Pick<ListProps & ThemeProps, "className" | "forwardRef" | "topTag" | "singleLeveled" | "rootItemVisible" | "dndEnabled" | "onUpdateItem" | "onClickItemBody" | "onToggleDetail" | "onExpandItem" | "onDidDrop" | "onDoubleClickItemTitle" | "onEditingTextChange" | "onExitEditing" | "onClickItemCommand" | "advancedActionMap" | "itemsJson" | "listType"> & {
    theme?: import("@emotion/react").Theme;
}>;
