import css from "./Button.module.css"

interface ButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
    type?: string;
}

export default function Button({
                                   text,
                                   onClick,
                               }: ButtonProps) {
    return (
        <button className={css.primary} onClick={onClick}>
        {text}
    </button>
    );
}