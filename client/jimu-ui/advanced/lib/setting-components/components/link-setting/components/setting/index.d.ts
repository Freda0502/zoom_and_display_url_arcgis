/// <reference types="react" />
/** @jsx jsx */
import { React, IMAppConfig, ImmutableArray, jsx, ThemeVariables, UseDataSource, BrowserSizeMode, ReactRedux, IntlShape } from 'jimu-core';
import { IMLinkParam, OpenTypes } from '../../types';
interface Props {
    className?: string;
    linkParam?: IMLinkParam;
    onSettingConfirm?: (linkParam: IMLinkParam) => void;
    /**
     * Use widget id to get widget context, e.g. whether widget is in repeated data source context.
     */
    widgetId?: string;
    selectAreaMaxHeight?: string;
    isLinkPageSetting?: boolean;
    useDataSources?: ImmutableArray<UseDataSource>;
}
interface States {
    originLinkParam: IMLinkParam;
    linkParam: IMLinkParam;
}
interface StateExtraProps {
    appConfig: IMAppConfig;
    browserSizeMode: BrowserSizeMode;
}
interface ExtraProps {
    theme?: ThemeVariables;
    intl?: IntlShape;
}
export declare class _LinkSetting extends React.PureComponent<Props & ExtraProps & StateExtraProps, States> {
    constructor(props: any);
    componentWillMount(): void;
    render(): jsx.JSX.Element;
    getLinkTypeContent: () => jsx.JSX.Element;
    componentDidMount(): void;
    getLinkContent: (linkType: string) => jsx.JSX.Element;
    linkTypeChange: (e: any) => void;
    radioOpenTypeChange: (openType: OpenTypes) => void;
    linkParamChange: (changedParam: IMLinkParam, isTypeSame?: boolean) => void;
    settingConfirm: () => void;
    isLinkParamOk: (linkParam: IMLinkParam) => boolean;
}
export declare const LinkSetting: ReactRedux.ConnectedComponent<React.FC<import("react-intl").WithIntlProps<Props>> & {
    WrappedComponent: React.ComponentType<Props>;
}, Pick<import("react-intl").WithIntlProps<Props>, "className" | "widgetId" | "forwardedRef" | "useDataSources" | "linkParam" | "onSettingConfirm" | "selectAreaMaxHeight" | "isLinkPageSetting"> & Props>;
export {};
