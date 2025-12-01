type AttributeType = {
    name: string;
    value: string;
    color?: string;
}

export const Attribute = ({ name, value, color }: AttributeType) => {
    return (
        <div>
            <p className="text-[10px] text-[#8F9399]">{name}</p>
            <p className="text-[12px]" style={{ color: color }}>{value}</p>
        </div>
    )
}