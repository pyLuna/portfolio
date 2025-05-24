"use client";
import Url from "@/lib/utils/url";
import Link from "next/link";
import Debug from "../Debug";
import ThemeToggle from "./ThemeTrigger";

const Header = () => {
    return (
        <section className="sticky top-0 flex flex-row gap-4 bg-background items-center justify-between">
            <Link href={Url.admin.login} className="text-xl font-semibold m-2 border rounded-full p-2">
                Logo
            </Link>

            <nav className="header flex gap-4 items-center text-sm font-semibold">
                <Link href={Url.home}>Home</Link>
                <a href={Url.resume} target="_blank">Resume</a>
                <Debug>
                    <Link href="/api/test">Test</Link>
                </Debug>
                <Link href="#">Contact</Link>
            </nav>

            <ThemeToggle />
        </section>
    );
}

export default Header;