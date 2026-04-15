import css from "./Button.module.css"

export type ButtonColor = "green" | "white";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
    type?: string;
    color: ButtonColor;
}

export default function Button({
                                   text,
                                   color,
                                   onClick,
                                   className
                               }: ButtonProps) {
    return (
        <button className={`${css.primary} ${css[color]} ${className || ""}`} onClick={onClick}>
            {text}
        </button>
    );
}