export interface Props {
    className?: string;
    value?: string;
    disabled?: boolean;
    placeholder?: string;
    onChange?(value: string): any;
}
