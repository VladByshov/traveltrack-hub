"use client"

import css from "./Header.module.css"
import Image from "next/image";
import Link from "next/link";
import HeaderNavItem from "@/components/Header/HeaderNavItem/HeaderNavItem";
import {PathConstant} from "@/lib/constans/pathConstant";
import {usePathname} from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className={css.header}>
            <Link className={css.logo} href={PathConstant.Home}>
                <Image className={css.logoMobile} src="/svg/logo.svg" alt="Logo" width={136} height={16}/>
            </Link>
            <nav className={css.navigation}>
                <ul className={css.listNavigation}>
                    <HeaderNavItem link={PathConstant.Home} text={"Home"}/>
                    <HeaderNavItem isActive={pathname === PathConstant.Catalog} link={PathConstant.Catalog} text={"Catalog"}/>
                </ul>
            </nav>
        </header>
    );
}