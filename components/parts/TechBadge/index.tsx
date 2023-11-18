type Props = {
  name: string
  icon: string
}

export const TechBadge = (props: Props) => {
  return (
    <>
      <div className="badge badge-primary badge-outline gap-2 p-3 m-1">
        <div className={`${props.icon} h-4 w-4`} />
        {props.name}
      </div>
    </>
  )
}
