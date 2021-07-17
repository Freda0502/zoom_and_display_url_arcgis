/// <reference types="react" />
/** @jsx jsx */
import { React, ThemeVariables, IntlShape } from 'jimu-core';
import { ExpressionBuilderProps } from '../../types';
interface ExpressionBuilderPopupProps extends ExpressionBuilderProps {
    isOpen: boolean;
    onClose: () => void;
}
interface ExtraProps {
    theme: ThemeVariables;
    intl: IntlShape;
}
declare const ExpressionBuilderPopup: React.FC<import("react-intl").WithIntlProps<Pick<ExpressionBuilderPopupProps & ExtraProps, "className" | "style" | "onChange" | "isOpen" | "intl" | "expression" | "widgetId" | "useDataSources" | "onClose" | "types" | "fieldTypes"> & {
    theme?: import("@emotion/react").Theme;
}>> & {
    WrappedComponent: React.ComponentType<Pick<ExpressionBuilderPopupProps & ExtraProps, "className" | "style" | "onChange" | "isOpen" | "intl" | "expression" | "widgetId" | "useDataSources" | "onClose" | "types" | "fieldTypes"> & {
        theme?: import("@emotion/react").Theme;
    }>;
};
export default ExpressionBuilderPopup;
