const InfoTile = ({ label, value }: { label: string; value: string }) => {

    return (
        <div className="space-y-2">
            <b className="text-lg md:text-xl">{label}</b>
            <p className="text-sm">{value}</p>
        </div>
    )
}

export default InfoTile;