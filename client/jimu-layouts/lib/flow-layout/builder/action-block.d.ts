/** @jsx jsx */
import { jsx } from 'jimu-core';
import { PageContextProps } from 'jimu-layouts/layout-runtime';
export interface ActionBlockProps {
    pageContext: PageContextProps;
    blockOnly?: boolean;
    onPageTemplateSelected: (templatePageJson: any) => void;
    onBlockTemplateSelected: (templateBlockJson: any) => void;
    onScreenTemplateSelected: (templateScreenJson: any) => void;
}
export declare function ActionBlock(props: ActionBlockProps): jsx.JSX.Element;
