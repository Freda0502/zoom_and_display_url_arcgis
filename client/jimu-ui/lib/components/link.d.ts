/// <reference types="react" />
/** @jsx jsx */
import { jimuHistory, IMUrlParameters, React, LinkTo, jsx, ReactRedux, IMDialogJson, IMDialogInfos } from 'jimu-core';
import { ButtonProps } from './button';
export * from './_link-tip';
export declare type LinkTarget = '_self' | '_blank' | '_parent' | '_top';
export interface LinkProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Custom html element to use as the link element.
     *
     * @default "a"
     */
    tag?: React.ElementType;
    /**
     * Callback fired when the root element is clicked.
     */
    onClick?: (evt: React.MouseEvent<HTMLLinkElement>) => void;
    /**
     * Sets the value of the native `target` property on the \<a\> element.
     * @see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target)
     */
    target?: LinkTarget;
    replace?: boolean;
    history?: jimuHistory.History;
    to?: LinkTo;
    queryObject?: IMUrlParameters;
    innerRef?: React.Ref<HTMLButtonElement>;
    title?: string;
    className?: string;
    style?: React.CSSProperties;
    customStyle?: CustromStyle;
    themeStyle?: ButtonProps;
}
interface StateProps {
    dialogJson: IMDialogJson;
    currentDialogJson: IMDialogJson;
    dispatch?: any;
    currentPageId: string;
    currentDialogId: string;
    isPageDlg: boolean;
    currentPageDlgId: string;
    dialogInfos: IMDialogInfos;
}
interface CustromStyle {
    style?: React.CSSProperties;
    hoverStyle?: React.CSSProperties;
    visitedStyle?: React.CSSProperties;
}
interface State {
    isTipPopperOpen: boolean;
    handleHrefChange: boolean;
}
export declare const isModifiedEvent: (event: any) => boolean;
export declare class _LinkComponent extends React.PureComponent<LinkProps & StateProps, State> {
    static count: number;
    href: string;
    id: string;
    constructor(props: any);
    componentWillUnmount(): void;
    isToWebAddress: () => boolean;
    isToTopWindow: () => boolean;
    stopGoingToOtherSite: () => boolean;
    handleClick: (event: any) => void;
    isHrefCanBeChanged(tryToOpenAnchoredDlg?: boolean): boolean;
    isCurrentDlgCanBeClosed(): boolean;
    clearSelection(): void;
    render(): jsx.JSX.Element;
}
export declare const _ConnectedLink: ReactRedux.ConnectedComponent<React.ComponentClass<any, any>, Pick<any, string | number | symbol> & LinkProps>;
export declare const _Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLButtonElement>>;
export declare const Link: React.ComponentType<React.PropsWithChildren<Pick<LinkProps & React.RefAttributes<HTMLButtonElement>, "color" | "title" | "replace" | "to" | "is" | "tag" | "hidden" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "id" | "lang" | "placeholder" | "slot" | "spellCheck" | "style" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "innerRef" | "queryObject" | "ref" | "target" | "key" | "history" | "customStyle" | "themeStyle"> & {
    theme?: import("@emotion/react").Theme;
}>>;
