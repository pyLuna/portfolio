const InfoTile = ({ label, value, id }: { label: string; value: string; id?: string }) => {

    return (
        <a href={`#${id}`} className="space-y-2">
            <b>{label}</b>
            <p className="text-xs lg:text-sm">{value}</p>
        </a>
    )
}

export default InfoTile;