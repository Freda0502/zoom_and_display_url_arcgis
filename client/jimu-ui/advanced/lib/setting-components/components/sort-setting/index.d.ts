/// <reference types="react" />
/** @jsx jsx */
import { React, IntlShape, OrderByOption, ThemeVariables, IMUseDataSource, ImmutableArray, UseDataSource } from 'jimu-core';
interface ExtraProps {
    intl: IntlShape;
}
export interface SortSettingOption {
    ruleOptionName: string;
    rule: OrderByOption[];
    isEditOptionName?: boolean;
}
export interface SortSettingProps {
    singleRowItemOnly?: boolean;
    optionRenderFunction?: (props: SortSettingProps, createOptionElement: (useDataSources: ImmutableArray<UseDataSource>, el: any, index: number) => any) => JSX.Element;
    onChange: (sortData: SortSettingOption[], index?: number) => void;
    useDataSource: IMUseDataSource;
    value: ImmutableArray<SortSettingOption>;
    theme?: ThemeVariables;
    className?: string;
}
export interface SortSettingState {
    option: SortSettingOption;
}
export declare const SortSetting: React.ComponentType<React.PropsWithChildren<import("react-intl").WithIntlProps<SortSettingProps & ExtraProps>>>;
export {};
