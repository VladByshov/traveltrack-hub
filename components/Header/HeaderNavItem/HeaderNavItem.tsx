import Link from "next/link";
import {PathConstant} from "@/lib/constans/path.constant";
import css from "./HeaderNavItem.module.css"

interface HeaderNavItemProps {
    link: PathConstant;
    text: string;
    isActive?:boolean;
}

export default function HeaderNavItem({text,link, isActive}:HeaderNavItemProps) {
    return (
        <li className={css.listNavigationItem}>
            <Link className={isActive ? css.activeLink : css.link} href={link}>{text}</Link>
        </li>
    );
}