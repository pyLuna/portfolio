import Url from "@/utils/url";
import Link from "next/link";
import ThemeToggle from "./ThemeTrigger";

const Header = () => {

    return (
        <section className="p-4 flex items-center justify-between shadow-sm bg-primary-900/40 dark:bg-primary-300/30">
            <Link href="/" className="text-xl font-semibold m-2 border rounded-full p-2">
                Logo
            </Link>

            <nav className="header flex gap-4 items-center text-sm font-semibold">
                <Link href={Url.home}>Home</Link>
                <Link href={Url.resume} target="_blank" download={"resume.pdf"}>Resume</Link>
                {/* <Link href={Url.theme}>Theme</Link> */}
                <Link href="#">Contact</Link>
            </nav>

            <ThemeToggle />
        </section>
    );
}

export default Header;