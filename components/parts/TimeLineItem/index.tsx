type Props = {
  children: React.ReactNode
  year: string
  title: string
  index: number
  description: string
  isLast?: boolean
}

export const TimeLineItem = (props: Props) => {
  const timelineItemClass =
    props.index % 2 === 0
      ? 'space-y-2 timeline-start md:text-end mb-12 px-2'
      : 'space-y-2 timeline-end mb-12 px-2'

  return (
    <li>
      <hr className="bg-primary" />
      <div className="timeline-middle">
        <div className="bg-primary p-1 flex items-center rounded-full">
          <div className="h-4 w-4" />
        </div>
      </div>
      <div className={timelineItemClass}>
        <time className="font-mono italic pb-1">{props.year}</time>
        <div className="text-2xl pb-1 text-secondary font-bold">{props.title}</div>
        <div className="pb-2">{props.description}</div>
        <div className="pb-2">{props.children}</div>
      </div>
      {!props.isLast && <hr className="bg-primary" />}
    </li>
  )
}
