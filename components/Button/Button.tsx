import css from "./Button.module.css"

export type ButtonColor = "green" | "white";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
    color: ButtonColor;
    disabled?: boolean;
}

export default function Button({
                                   text,
                                   color,
                                   onClick,
                                   className,
                                   type = "button",
                                   disabled = false
                               }: ButtonProps) {
    return (
        <button
            className={`${css.primary} ${css[color]} ${className || ""}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {text}
        </button>
    );
}