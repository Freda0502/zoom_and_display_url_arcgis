/// <reference types="react" />
/** @jsx jsx */
import { jsx, React, ReactRedux } from 'jimu-core';
interface Props {
    layoutId: string;
    formatMessage: (id: string) => string;
}
interface StateToProps {
    setting?: any;
}
declare class FlowLayoutSetting extends React.PureComponent<Props & StateToProps> {
    updateSpace: (value: any) => void;
    updatePadding: (value: any) => void;
    render(): jsx.JSX.Element;
}
declare const _default: ReactRedux.ConnectedComponent<typeof FlowLayoutSetting, Pick<React.ClassAttributes<FlowLayoutSetting> & Props & StateToProps, "layoutId" | "ref" | "key" | "formatMessage"> & Props>;
export default _default;
