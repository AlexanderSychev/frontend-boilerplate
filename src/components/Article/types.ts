export interface Props {
    className?: string;
}

export interface Behavior {
    title: string;
    content: string;
    setTitle(title: string): any;
    setContent(title: string): any;
}
