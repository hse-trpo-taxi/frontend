type BlueAttributeType = {
    name: string;
    value: string;
}

export const BlueAttribute = ({ name, value }: BlueAttributeType) => {
    return (
        <div>
            <p className="text-[12px] text-[#1049D9]">{name}</p>
            <p className="text-[14px]">{value}</p>
        </div>
    )
}