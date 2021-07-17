/// <reference types="react" />
/** @jsx jsx */
import { React, IntlShape, OrderByOption, ThemeVariables, IMUseDataSource, ImmutableArray } from 'jimu-core';
export interface SortProps {
    onChange: (sortData: OrderByOption[], index?: number) => void;
    value: ImmutableArray<OrderByOption>;
    useDataSource: IMUseDataSource;
    onDelete?: (sortData: OrderByOption[], index?: number) => void;
    onSelect?: (sortData: OrderByOption[], index?: number) => void;
    onSortButtonClick?: (sortData: OrderByOption[], index?: number) => void;
    onAddOption?: (sortData: OrderByOption[]) => void;
    theme?: ThemeVariables;
    className?: string;
}
interface ExtraProps {
    intl: IntlShape;
}
export interface SortState {
    option: OrderByOption;
}
export declare const Sort: React.ComponentType<React.PropsWithChildren<import("react-intl").WithIntlProps<SortProps & ExtraProps>>>;
export {};
