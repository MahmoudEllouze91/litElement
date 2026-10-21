export type CardType = 'sm' | 'md'| 'lg' | 'bg';

export interface LinkProp {
    isInverse: boolean;
    label: string;
    type: 'link' | 'button';
    url: string;
    variation: 'primary' | 'secondary';
}