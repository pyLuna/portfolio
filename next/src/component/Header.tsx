import Link from "next/link";
import ThemeToggle from "./ThemeTrigger";

const Header = () => {
    return (
        <section className="p-4 flex items-center justify-between shadow-sm">
            <h1 className="text-xl font-semibold m-2 border rounded-full p-2">
                Logo
            </h1>

            <nav className="flex gap-2">
                <Link href="#">Contact</Link>
                <ThemeToggle />
            </nav>
        </section>
    );
}

export default Header;