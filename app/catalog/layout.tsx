import css from "./Catalog.module.css";
import React from "react";
import "modern-normalize"


export default function CatalogLayout({
                                          children,
                                          sidebar
                                      }: Readonly<{
    children: React.ReactNode;
    sidebar: React.ReactNode;
}>) {
    return (
        <div className={css.container}>
            <aside className={css.aside}>{sidebar}</aside>
            <div className={css.mainContent}>{children}</div>
        </div>
    );
}