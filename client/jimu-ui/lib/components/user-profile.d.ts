/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, ThemeVariables, SerializedStyles, IntlShape } from 'jimu-core';
interface Props {
    userThumbnail: string;
    theme: ThemeVariables;
    user: any;
    portalUrl: string;
    intl: IntlShape;
    className?: string;
    saveStatus?: boolean;
}
interface State {
    accountPopoverOpen: boolean;
    helpHref: string;
    helpUtils: any;
    signFlag: boolean;
    isShowLeaveAlertPopup: boolean;
}
export default class _UserProfile extends React.PureComponent<Props, State> {
    dropdownMenuCon: HTMLElement;
    __unmount: boolean;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    nls: (id: string) => string;
    sign: () => void;
    signOut: () => void;
    signIn: () => void;
    toggleAccount: () => void;
    getMenuInnerStyle: (theme: ThemeVariables) => SerializedStyles;
    getHelpUrl: () => void;
    getTrainingUrl: () => string;
    handleToggleForLeaveAlertPopup: (isOk: any) => void;
    confirmSign: () => void;
    render(): jsx.JSX.Element;
}
export declare const UserProfile: React.ComponentType<React.PropsWithChildren<Pick<Props, "className" | "intl" | "portalUrl" | "user" | "saveStatus" | "userThumbnail"> & {
    theme?: import("@emotion/react").Theme;
}>>;
export {};
