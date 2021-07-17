/// <reference types="react" />
/** @jsx jsx */
import { React, IntlShape } from 'jimu-core';
import { ThemeProps } from 'jimu-ui';
import { CommandActionDataType, CommandType } from './tree-types';
interface ExtraProps extends ThemeProps {
    intl: IntlShape;
}
export interface CommandListProps {
    className?: string;
    itemCommands: CommandType[];
    data?: any;
    moreCommand?: CommandType;
    maxIconCount?: number;
    onClickItemCommand?: (actionData: CommandActionDataType) => void;
}
export declare const CommandList: React.FC<Pick<React.PropsWithChildren<import("react-intl").WithIntlProps<CommandListProps & ExtraProps>>, "className" | "children" | "data" | "forwardedRef" | "onClickItemCommand" | "itemCommands" | "moreCommand" | "maxIconCount"> & {
    theme?: import("@emotion/react").Theme;
}>;
export {};
