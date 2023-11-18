type Props = {
  title: string
  index: string
}

export const SectionTitle = (props: Props) => {
  return (
    <div className="flex flex-col my-10 md:py-20 md:w-1/2 w-3/4">
      <div className="divider divider-start">
        <h2>
          <span className="text-primary">{props.index}.</span>
          <span className="font-bold text-[20px]"> {props.title}</span>
        </h2>
      </div>
    </div>
  )
}
