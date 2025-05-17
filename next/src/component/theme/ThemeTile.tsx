
type ThemeTileProps = {
    color: string;
    label: string;
};

/**
 * @description A component that displays a tile with a color and name
 * 
 * @example
 * <ThemeTile color="primary" name="Primary" />
 * 
 * @param color the color of the tile 
 * @param name the name of the tile
 * @returns 
 */
const ThemeTile = ({ color, label }: ThemeTileProps) => {
    const brightness = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
    return (
        <div>
            <h1>{label}</h1>
            <div className="flex flex-row gap-2">
                {brightness.map(br => {
                    return (
                        <div key={br + "-" + color} className="relative">
                            <div className={`border-1 place-content-center bg-${color}-${br} size-18 rounded-full`} />
                            <span className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-500/10 p-2 rounded-full">
                                <p className="text-center w-full">
                                    {br}
                                </p>
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ThemeTile;