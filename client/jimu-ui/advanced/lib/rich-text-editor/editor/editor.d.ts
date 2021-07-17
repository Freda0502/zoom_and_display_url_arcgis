/// <reference types="react" />
import { React } from 'jimu-core';
import { RichEditorCoreProps } from '../components/editor/core';
import { RichPluginInjectedProps } from './plugins/plugin';
import { Editor } from '../type';
export declare type RenderPlugin = ((props: RichPluginInjectedProps) => React.ReactNode);
export interface PluginProps {
    plugin?: RenderPlugin;
}
export declare type RichTextEditorProps = RichEditorCoreProps & PluginProps & {
    nowrap?: boolean;
};
export declare const useMixinKeyboardEnterModules: (propModules: {
    [x: string]: any;
}, editor: Editor) => {
    [x: string]: any;
};
export declare const _RichTextEditor: (props: RichTextEditorProps) => React.ReactElement;
/**
 *  A react component for rich text editing. RichTextEditor relies on the 3rd party library [Quill](https://github.com/quilljs/quill)
 */
export declare const RichTextEditor: React.ComponentType<RichTextEditorProps>;
