/// <reference types="react" />
/** @jsx jsx */
import { React, IntlShape, ImmutableObject, ProxyJson, ThemeVariables, ReactRedux } from 'jimu-core';
export interface ProxySettingPopupProps {
    isOpen: boolean;
    className?: string;
    onFinish: () => Promise<void>;
    onCancel: () => void;
    onToggle: () => void;
}
interface ExtraProps {
    intl: IntlShape;
    theme: ThemeVariables;
}
interface StateToProps {
    appProxies: ImmutableObject<{
        [proxyId: string]: ProxyJson;
    }>;
}
export declare const ProxySettingPopup: ReactRedux.ConnectedComponent<React.FC<import("react-intl").WithIntlProps<React.PropsWithChildren<Pick<ProxySettingPopupProps & ExtraProps & StateToProps, "className" | "isOpen" | "intl" | "appProxies" | "onToggle" | "onCancel" | "onFinish"> & {
    theme?: import("@emotion/react").Theme;
}>>> & {
    WrappedComponent: React.ComponentType<React.PropsWithChildren<Pick<ProxySettingPopupProps & ExtraProps & StateToProps, "className" | "isOpen" | "intl" | "appProxies" | "onToggle" | "onCancel" | "onFinish"> & {
        theme?: import("@emotion/react").Theme;
    }>>;
}, Pick<import("react-intl").WithIntlProps<React.PropsWithChildren<Pick<ProxySettingPopupProps & ExtraProps & StateToProps, "className" | "isOpen" | "intl" | "appProxies" | "onToggle" | "onCancel" | "onFinish"> & {
    theme?: import("@emotion/react").Theme;
}>>, "className" | "children" | "isOpen" | "theme" | "forwardedRef" | "onToggle" | "onCancel" | "onFinish"> & ProxySettingPopupProps>;
export {};
