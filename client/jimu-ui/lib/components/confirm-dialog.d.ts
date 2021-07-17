/// <reference types="react" />
interface Props {
    title: string;
    content: string;
    level: 'info' | 'warning';
    hasNotShowAgainOption?: boolean;
    confirmLabel?: string;
    cancelLabel?: string;
    onClose: () => void;
    onConfirm: (notShowAgain?: boolean) => void;
}
export declare const CONFIRM_DELETE_ID = "confirm-delete-widget";
export declare function ConfirmDialog(props: Props): JSX.Element;
export {};
