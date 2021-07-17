/// <reference types="react" />
/** @jsx jsx */
import { React, ThemeVariables, jsx, IntlShape } from 'jimu-core';
import { UnitTypes, Placement } from 'jimu-ui';
interface Props {
    unit?: UnitTypes;
    units?: UnitTypes[];
    onChange?: (unit: UnitTypes) => void;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    className?: string;
    style?: any;
    placement?: Placement;
    disabled?: boolean;
}
interface ExtraProps {
    intl?: IntlShape;
    theme?: ThemeVariables;
}
interface State {
    show: boolean;
}
export declare class _UnitSelector extends React.PureComponent<Props & ExtraProps, State> {
    domNode: React.RefObject<HTMLButtonElement>;
    static defaultProps: Partial<Props>;
    constructor(props: any);
    handleChange: (newUnit: any) => void;
    handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    nls: (id: string) => string;
    isDisabled: () => boolean;
    getPopperStyle: () => import("jimu-core").SerializedStyles;
    render(): jsx.JSX.Element;
}
export declare const UnitSelector: React.FC<Pick<React.PropsWithChildren<import("react-intl").WithIntlProps<any>>, string | number | symbol> & {
    theme?: import("@emotion/react").Theme;
}>;
export {};
