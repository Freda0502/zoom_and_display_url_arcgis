/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, ThemeVariables, ImmutableArray, IntlShape, UseDataSource, Expression, ResizeObserver, ExpressionPart, BrowserSizeMode } from 'jimu-core';
import { ExpSelection, PopoverItem, EditResult } from './types';
interface Props {
    useDataSources: ImmutableArray<UseDataSource>;
    expression: Expression;
    /**
     * Use widget id to get widget context, e.g. whether widget is in repeated data source context.
     */
    widgetId?: string;
    autoFocus?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onChange: (expression: Expression) => void;
}
interface State {
    isPopoverOpen: boolean;
    isEditorMounted: boolean;
    expSelection: ExpSelection;
    selectedPopoverItemIndex: string;
}
interface ExtraProps {
    theme: ThemeVariables;
    intl: IntlShape;
}
interface StateToProps {
    browserSizeMode: BrowserSizeMode;
}
declare class _ExpressionEditor extends React.PureComponent<Props & ExtraProps & StateToProps, State> {
    static count: number;
    id: string;
    contentEditableContainer: React.RefObject<HTMLDivElement>;
    helperContainer: React.RefObject<HTMLDivElement>;
    errorMsgContainer: React.RefObject<HTMLDivElement>;
    expressionString: string;
    ltrStyle: {
        direction: string;
    };
    resizeObserver: ResizeObserver;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props & ExtraProps & StateToProps, prevState: State): void;
    componentWillUnmount(): void;
    resizeHelperContainer: () => void;
    setSelectionToEnd: () => void;
    getWhetherLoseFocus: () => boolean;
    getExpressionString: (container?: HTMLElement) => string;
    getComponent: (part: ExpressionPart, index: number) => jsx.JSX.Element;
    getWhetherInEditablePart: () => boolean;
    getSingleExpFromPopoverItem: (item: PopoverItem) => string;
    renderPartsToHtml: (parts: ExpressionPart[]) => string;
    getNewExpression: (parts: ExpressionPart[]) => Expression;
    onChange: (e: any) => void;
    onClick: (e: any) => void;
    onHelperItemSelect: (e: Expression, partId: string, isReplacing: boolean) => void;
    onBlur: (e: any) => void;
    onKeyDown: (e: any) => void;
    handleBackspace: () => void;
    handleDelete: () => void;
    doRemove: (editResult: EditResult, originalParts: ExpressionPart[], removedCharNumber: number) => void;
    handleLeftArrow: () => void;
    handleRightArrow: () => void;
    handleDownArrow: () => void;
    handleUpArrow: () => void;
    handleEnter: () => void;
    handlePopoverItemClick: (item: PopoverItem, partId: string) => void;
    handleFieldPopoverClick: (newParts: ExpressionPart[], partId: string, item: PopoverItem) => void;
    handleDsPopoverClick: (parts: ExpressionPart[], partId: string, item: PopoverItem) => void;
    handleFunctionPopoverClick: (newParts: ExpressionPart[], partId: string, item: PopoverItem) => void;
    render(): jsx.JSX.Element;
}
declare const ExpressionEditor: React.FC<import("react-intl").WithIntlProps<(Pick<Pick<React.ClassAttributes<_ExpressionEditor> & Props & ExtraProps & StateToProps, "className" | "style" | "onChange" | "intl" | "expression" | "widgetId" | "theme" | "ref" | "autoFocus" | "key" | "useDataSources"> & Props, "className" | "style" | "onChange" | "intl" | "expression" | "widgetId" | "ref" | "autoFocus" | "key" | "useDataSources"> & {
    theme?: import("@emotion/react").Theme;
}) | (Pick<React.PropsWithChildren<Pick<React.ClassAttributes<_ExpressionEditor> & Props & ExtraProps & StateToProps, "className" | "style" | "onChange" | "intl" | "expression" | "widgetId" | "theme" | "ref" | "autoFocus" | "key" | "useDataSources"> & Props>, "className" | "style" | "children" | "onChange" | "intl" | "expression" | "widgetId" | "ref" | "autoFocus" | "key" | "useDataSources"> & {
    theme?: import("@emotion/react").Theme;
})>> & {
    WrappedComponent: React.ComponentType<(Pick<Pick<React.ClassAttributes<_ExpressionEditor> & Props & ExtraProps & StateToProps, "className" | "style" | "onChange" | "intl" | "expression" | "widgetId" | "theme" | "ref" | "autoFocus" | "key" | "useDataSources"> & Props, "className" | "style" | "onChange" | "intl" | "expression" | "widgetId" | "ref" | "autoFocus" | "key" | "useDataSources"> & {
        theme?: import("@emotion/react").Theme;
    }) | (Pick<React.PropsWithChildren<Pick<React.ClassAttributes<_ExpressionEditor> & Props & ExtraProps & StateToProps, "className" | "style" | "onChange" | "intl" | "expression" | "widgetId" | "theme" | "ref" | "autoFocus" | "key" | "useDataSources"> & Props>, "className" | "style" | "children" | "onChange" | "intl" | "expression" | "widgetId" | "ref" | "autoFocus" | "key" | "useDataSources"> & {
        theme?: import("@emotion/react").Theme;
    })>;
};
export default ExpressionEditor;
