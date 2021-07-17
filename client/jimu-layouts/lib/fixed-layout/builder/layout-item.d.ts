/// <reference types="react" />
/** @jsx jsx */
import { React, LayoutItemJson, ReactRedux, SerializedStyles } from 'jimu-core';
import { LayoutItemProps, FixedLayoutItemSetting } from 'jimu-layouts/layout-runtime';
interface OwnProps {
    layoutItem: LayoutItemJson;
    offsetX?: number;
    offsetY?: number;
    dw?: number;
    dh?: number;
    index: number;
    initRect?: ClientRect;
    containerRect?: ClientRect;
    isLayoutLockChildren?: boolean;
    onResizeStart: (id: string) => void;
    onResizing: (id: string, x: number, y: number, dw: number, dh: number, shiftKey: boolean, speed: number) => void;
    onResizeEnd: (id: string, x: number, y: number, dw: number, dh: number, shiftKey: boolean, layoutItem: LayoutItemJson, itemSetting: FixedLayoutItemSetting) => void;
    onMoveByKey: (id: string, dx: number, dy: number) => void;
}
interface StateToLayoutItemProps {
    selected: boolean;
}
interface State {
    dx?: number;
    dy?: number;
}
declare class FixedItem extends React.PureComponent<LayoutItemProps & OwnProps & StateToLayoutItemProps, State> {
    state: State;
    itemSetting: FixedLayoutItemSetting;
    handleResizeEnd: (id: string, dx: number, dy: number, dw: number, dh: number, shiftKey: boolean) => void;
    handleResizing: (id: string, dx: number, dy: number, dw: number, dh: number, shiftKey: boolean, speed: number) => void;
    moveUp: () => void;
    moveDown: () => void;
    moveLeft: () => void;
    moveRight: () => void;
    getKeyboardComponent(): JSX.Element;
    getPositionStyle(): SerializedStyles;
    render(): JSX.Element;
}
declare const _default: ReactRedux.ConnectedComponent<typeof FixedItem, Pick<React.ClassAttributes<FixedItem> & LayoutItemProps & OwnProps & StateToLayoutItemProps, "className" | "draggable" | "children" | "onClick" | "onDoubleClick" | "aspectRatio" | "index" | "layoutId" | "layoutItemId" | "ref" | "offsetX" | "offsetY" | "key" | "onResizeStart" | "resizable" | "isInSection" | "showDefaultTools" | "selectable" | "forbidContextMenu" | "forbidToolbar" | "forceAspectRatio" | "resizeObserver" | "layoutItem" | "dh" | "dw" | "initRect" | "containerRect" | "isLayoutLockChildren" | "onResizing" | "onResizeEnd" | "onMoveByKey"> & LayoutItemProps>;
export default _default;
