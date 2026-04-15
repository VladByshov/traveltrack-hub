import css from "./Header.module.css"
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className={css.header}>
            <Link
                className={css.logo} href={"/"}>
                <Image className={css.logoMobile} src="/svg/logo.svg" alt="Logo" width={136} height={16}/>
            </Link>
            <nav className={css.navigation}>
                <ul className={css.listNavigation}>
                    <li className={css.listNavigationItem}>
                        <Link className={css.link} href={"/"}>Home</Link>
                    </li>
                    <li className={css.listNavigationItem}>
                        <Link className={css.link} href={"/catalog"}>Catalog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}