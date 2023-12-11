type Props = {
  name: string
}

export const TechBadge = (props: Props) => {
  return (
    <>
      <div className="badge badge-primary badge-outline gap-2 p-3 m-1">{props.name}</div>
    </>
  )
}
