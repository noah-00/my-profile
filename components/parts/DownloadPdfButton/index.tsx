type Props = {
  content: string
  lng: string
}

export const DownloadPdfButton = (props: Props) => {
  return (
    <a href={`/resume_${props.lng}.pdf`} target="_blank">
      <button className="btn btn-outline btn-primary">{props.content}</button>
    </a>
  )
}
