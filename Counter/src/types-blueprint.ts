
// This this blueprint (rules) how button and display will behave

// must have these two categories when we add button
export interface ButtonProps{
    text: string;
    onclick: ()=> void;
}

export interface DisplayProps {
    value: number;
}