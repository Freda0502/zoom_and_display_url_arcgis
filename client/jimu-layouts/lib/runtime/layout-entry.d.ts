/// <reference types="react" />
import { React, ReactRedux } from 'jimu-core';
import { LayoutProps, StateToLayoutProps } from '../types';
declare class LayoutEntry extends React.PureComponent<LayoutProps & StateToLayoutProps> {
    render(): JSX.Element;
}
declare const _default: ReactRedux.ConnectedComponent<typeof LayoutEntry, Pick<React.ClassAttributes<LayoutEntry> & LayoutProps & StateToLayoutProps, "className" | "style" | "visible" | "layouts" | "ref" | "key" | "isItemAccepted" | "isInSection" | "isInWidget" | "isRepeat" | "isPageItem" | "itemDraggable" | "itemResizable" | "itemSelectable" | "droppable" | "showDefaultTools" | "onItemClick" | "ignoreMinHeight"> & LayoutProps>;
export default _default;
