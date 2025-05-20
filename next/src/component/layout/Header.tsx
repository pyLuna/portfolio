import Url from "@/utils/url";
import Link from "next/link";
import ThemeToggle from "./ThemeTrigger";

const Header = () => {

    return (
        <section className="p-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold m-2 border rounded-full p-2">
                Logo
            </Link>

            <nav className="header flex gap-4 items-center text-sm font-semibold">
                <Link href={Url.home}>Home</Link>
                <Link href={Url.resume} target="_blank" download={"resume.pdf"}>Resume</Link>
                {/* <Link href={Url.theme}>Theme</Link> */}
                <Link href={Url.admin}>Admin</Link>
                <Link href="/api/test">Test</Link>
                <Link href="#">Contact</Link>
            </nav>

            <ThemeToggle />
        </section>
    );
}

export default Header;