import { useRouter } from "next/navigation";
import Button from "../ui/Button";

type MenuTileProps = {
    href?: string;
    title: string;
    subtitle?: string
    onClick?: () => void
}
const MenuTile = ({ href, title, subtitle, onClick }: MenuTileProps) => {
    const router = useRouter();
    const handleClick = () => {
        if (href) router.replace(href);
        onClick?.();
    }

    return (
        <Button
            onClick={handleClick}
            variant="text"
            className="flex !text-foreground !no-underline border border-primary-200/80 flex-col items-start gap-1 text-sm p-4 bg-secondary-900/30 hover:bg-secondary-900 rounded-lg">
            {title}
            {subtitle && <small className="!text-[10px] md:text-sm text-gray-400">{subtitle}</small>}
        </Button>
    )
}

export default MenuTile;