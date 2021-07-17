/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, ReactRedux, LayoutItemConstructorProps } from 'jimu-core';
import { LayoutProps, StateToLayoutProps } from 'jimu-layouts/layout-runtime';
declare const enum LayoutEntryMode {
    ChooseLayoutType = 0,
    RenderLayout = 1
}
interface State {
    mode: LayoutEntryMode;
}
declare class LayoutEntry extends React.Component<LayoutProps & StateToLayoutProps, State> {
    state: State;
    shouldComponentUpdate(nextProps: LayoutProps): boolean;
    onLayoutTypeSelected: () => void;
    switchToChoosingMobe: () => void;
    render(): jsx.JSX.Element;
}
declare const _default: ReactRedux.ConnectedComponent<typeof LayoutEntry, Pick<React.ClassAttributes<LayoutEntry> & LayoutProps & StateToLayoutProps, "className" | "style" | "visible" | "layouts" | "ref" | "key" | "isItemAccepted" | "isInSection" | "isInWidget" | "isRepeat" | "isPageItem" | "itemDraggable" | "itemResizable" | "itemSelectable" | "droppable" | "showDefaultTools" | "onItemClick" | "ignoreMinHeight"> & LayoutProps>;
export default _default;
export declare function defaultWidetFilter(item: LayoutItemConstructorProps, isPlaceholder: boolean): boolean;
