import Link from "next/link";

type MenuTileProps = {
    href: string;
    title: string;
    subtitle?: string
}
const MenuTile = ({ href, title, subtitle }: MenuTileProps) => {
    return (
        <Link
            href={href}
            className="flex border md:border-0 border-primary-200/80 flex-col gap-1 text-sm p-4 bg-secondary-900/30 hover:bg-secondary-900 rounded-lg">
            {title}
            {subtitle && <p className=" text-xs md:text-sm text-gray-400">{subtitle}</p>}
        </Link>
    )
}

export default MenuTile;