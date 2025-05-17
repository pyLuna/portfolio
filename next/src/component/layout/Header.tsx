import Url from "@/utils/url";
import Link from "next/link";
import ThemeToggle from "./ThemeTrigger";

const Header = () => {
    return (
        <section className="p-4 flex items-center justify-between shadow-sm">
            <Link href="/" className="text-xl font-semibold m-2 border rounded-full p-2">
                Logo
            </Link>

            <nav className="flex gap-4 items-center">
                <Link href={Url.theme}>Theme</Link>
                <Link href="#">Contact</Link>
                <ThemeToggle />
            </nav>
        </section>
    );
}

export default Header;