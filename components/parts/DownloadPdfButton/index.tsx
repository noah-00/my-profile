import { RESUME_URL } from '@/utils/MtData'

type Props = {
  content: string
}

export const DownloadPdfButton = (props: Props) => {
  return (
    <a href={RESUME_URL} target="_blank">
      <button className="btn btn-outline btn-primary">{props.content}</button>
    </a>
  )
}
