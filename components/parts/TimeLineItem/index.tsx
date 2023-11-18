type Props = {
  children: React.ReactNode
  year: string
  title: string
  index: number
  isLast?: boolean
}

export const TimeLineItem = (props: Props) => {
  const timelineItemClass =
    props.index % 2 === 0 ? 'timeline-start md:text-end mb-12 px-2' : 'timeline-end mb-12 px-2'

  const timelineItemIconClass = props.isLast ? 'i-ion-load-a' : 'i-ion-checkmark'

  return (
    <li>
      <hr />
      <div className="timeline-middle">
        <div className="bg-primary p-1 flex items-center rounded-full">
          <div className={`bg-base-300 h-4 w-4 ${timelineItemIconClass}`}></div>
        </div>
      </div>
      <div className={timelineItemClass}>
        <time className="font-mono italic pb-1">{props.year}</time>
        <div className="text-xl pb-1 text-secondary font-bold">{props.title}</div>
        <div className="pb-2">{props.children}</div>
      </div>
      {!props.isLast && <hr />}
    </li>
  )
}
