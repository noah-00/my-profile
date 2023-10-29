type HeaderMenuItemProps = {
  label: string
  index: number
}

export const HeaderMenuItem = (props: HeaderMenuItemProps) => {
  return (
    <li className="px-4">
      <a>
        <span className="text-primary">0{props.index}.</span>
        {props.label}
      </a>
    </li>
  )
}
