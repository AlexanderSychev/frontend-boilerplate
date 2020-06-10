export interface Props {
    className?: string;
    value?: string;
    maxLength?: number;
    disabled?: boolean;
    placeholder?: string;
    onChange?(value: string): any;
}
