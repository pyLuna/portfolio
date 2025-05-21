import { useAdminContextHook } from "@/hooks/useAdminHook";
import { Api } from "@/lib/utils/api.url";
import { post } from "@/lib/utils/fetch";
import Url from "@/lib/utils/url";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Debug from "../Debug";
import Button from "../ui/Button";
import ThemeToggle from "./ThemeTrigger";

const Header = () => {
    const router = useRouter();
    const adminContext = useAdminContextHook();
    const handleLogout = async () => {
        await post(Api.admin.logout);
        router.replace(Url.admin.login);
    }

    return (
        <section className="p-4 flex items-center justify-between">
            <Link href={Url.admin.home} className="text-xl font-semibold m-2 border rounded-full p-2">
                Logo
            </Link>

            <nav className="header flex gap-4 items-center text-sm font-semibold">
                <Link href={Url.home}>Home</Link>
                <Link href={Url.resume} target="_blank" download={"resume.pdf"}>Resume</Link>
                {/* <Link href={Url.theme}>Theme</Link> */}
                <Debug>
                    <Link href="/api/test">Test</Link>
                </Debug>
                <Link href="#">Contact</Link>
                {adminContext?.admin && <Button onClick={handleLogout}>Logout</Button>}
            </nav>

            <ThemeToggle />
        </section>
    );
}

export default Header;