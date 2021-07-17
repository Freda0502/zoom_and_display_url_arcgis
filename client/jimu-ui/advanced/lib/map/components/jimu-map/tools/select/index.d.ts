/// <reference types="react" />
import { BaseTool, BaseToolProps, IconType } from '../../layout/base/base-tool';
interface SelectState {
}
export default class Select extends BaseTool<BaseToolProps, SelectState> {
    toolName: string;
    constructor(props: any);
    getTitle(): string;
    getIcon(): IconType;
    getExpandPanel(): JSX.Element;
}
export {};
