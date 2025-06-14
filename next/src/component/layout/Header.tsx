"use client";
import Url from "@/lib/utils/url";
import { Fascinate } from "next/font/google";
import Link from "next/link";
import ThemeToggle from "./ThemeTrigger";

const font = Fascinate({ weight: ["400"], subsets: ["latin"] });

const Header = () => {
    return (
        <section className="sticky top-0 flex flex-row gap-4 pl-6 lg:pl-0 bg-background items-center justify-between">
            <Link href={Url.admin.home} className="cursor-default">
                <span className={`${font.className} !text-2xl`}>jo.</span>
            </Link>

            <nav className="header flex gap-4 items-center text-sm font-semibold">
                <Link href={Url.home}>Home</Link>
                <a href={Url.resume} target="_blank">Resume</a>
                <a
                    target="_blank"
                    href={"https://github.com/pyLuna/portfolio/tree/main/next"}
                >
                    Source Code
                </a>
                <Link href="#">Contact</Link>
                <ThemeToggle />
            </nav>

        </section>
    );
}

export default Header;