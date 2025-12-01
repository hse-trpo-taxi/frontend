type SupportCommentType = {
    name: string;
    description: string;
}

export const SupportComment = ({name, description} : SupportCommentType) => {
    return (
        <>
            <p className="text-[12px] text-[#0D162D]">{name}</p>
            <p className="text-[10px] mt-[5px]">{description}</p>
        </>
    )
}