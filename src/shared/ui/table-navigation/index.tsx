type TableNavigationType = {
  name: string[]
  currnet: string
  setCurrent: React.Dispatch<React.SetStateAction<string>>
}

export const TableNavigation = ({ name, currnet, setCurrent }: TableNavigationType) => {
  return (
    <div className="w-[100%] gap-[78px] flex border-b border-[#CDCDCD]">
      {name.map((item) => {
        return (
          <span
            key={item}
            onClick={() => setCurrent(item)}
            className={`text-[14px] ${currnet !== item ? 'text-[#8F9399] cursor-pointer' : 'border-b'}`}
          >
            {item}
          </span>
        )
      })}
    </div>
  )
}
