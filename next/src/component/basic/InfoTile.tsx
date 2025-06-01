const InfoTile = ({ label, value, id }: { label: string; value: string; id?: string }) => {

    return (
        <a href={`#${id}`} className="space-y-2">
            <b className="text-lg md:text-xl">{label}</b>
            <p className="text-sm">{value}</p>
        </a>
    )
}

export default InfoTile;