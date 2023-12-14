type Props = {
  content: string
}

export const DownloadPdfButton = (props: Props) => {
  return (
    <a href="/resume.pdf" target="_blank">
      <button className="btn btn-outline btn-primary">{props.content}</button>
    </a>
  )
}
