/// <reference types="react" />
import { React } from 'jimu-core';
import { CollapseProps } from 'jimu-ui';
export interface SettingCollapseProps extends Omit<CollapseProps, 'ref'> {
    type?: 'default' | 'primary';
    className?: string;
    /**
     * @ignore
     */
    level?: 0 | 1;
    leftIcon?: any;
    label: string;
    bottomLine?: boolean;
    onRequestOpen?: () => void;
    onRequestClose?: () => void;
    rightIcon?: any;
    rightActiveIcon?: any;
}
export declare const SettingCollapse: React.ComponentType<SettingCollapseProps>;
export interface UnControlledSettingCollapseProps extends Omit<SettingCollapseProps, 'isOpen' | 'onRequestOpen' | 'onRequestClose'> {
    defaultIsOpen?: boolean;
}
export declare const UnControlledSettingCollapse: (props: UnControlledSettingCollapseProps) => JSX.Element;
