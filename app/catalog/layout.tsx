"use client"

import React from "react";
import "modern-normalize";
import css from "./Catalog.module.css";
import { usePathname } from "next/navigation";
import SidebarDefault from "./@sidebar/default";

export default function CatalogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const showSidebar = pathname === "/catalog";

    return (
        <div className={css.catalogWrapper}>
            {showSidebar && (
                <aside className={css.filters}>
                    <SidebarDefault />
                </aside>
            )}
            <div className={css.catalogContent}>{children}</div>
        </div>
    );
}
