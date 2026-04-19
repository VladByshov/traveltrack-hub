import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import "modern-normalize";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import {Suspense} from "react";
import PageLoader from "@/components/PageLoader/PageLoader";
import {Toaster} from "react-hot-toast";

const inter = Inter({
    subsets: ["latin"],
    preload: false,
});

export const metadata: Metadata = {
    title: "Travel Trucks",
    description: "Campers of your dreams!",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <TanStackProvider>
            <body className={inter.className}>
            <Toaster position="top-right" />
            <Suspense fallback={<PageLoader />}>
                <Header/>
                {children}
            </Suspense>
            </body>
        </TanStackProvider>
        </html>
    );
}
