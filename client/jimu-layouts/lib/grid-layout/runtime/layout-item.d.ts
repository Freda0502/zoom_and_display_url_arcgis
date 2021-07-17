/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, ReactRedux } from 'jimu-core';
import { LayoutItemProps, StateToLayoutItemProps } from '../../types';
declare type GridItemProps = LayoutItemProps & StateToLayoutItemProps;
declare class GridItem extends React.PureComponent<GridItemProps> {
    render(): jsx.JSX.Element;
}
declare const _default: ReactRedux.ConnectedComponent<typeof GridItem, Pick<React.ClassAttributes<GridItem> & LayoutItemProps & StateToLayoutItemProps, "className" | "draggable" | "children" | "onClick" | "onDoubleClick" | "aspectRatio" | "layoutId" | "layoutItemId" | "ref" | "key" | "resizable" | "isInSection" | "showDefaultTools" | "selectable" | "forbidContextMenu" | "forbidToolbar" | "forceAspectRatio" | "resizeObserver"> & LayoutItemProps>;
export default _default;
