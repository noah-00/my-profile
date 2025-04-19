import { RESUME_FILE_NAME } from '@/utils/Const'

type Props = {
  content: string
  lng: string
}

export const DownloadPdfButton = (props: Props) => {
  return (
    <a
      href={`/resume_${props.lng}.pdf`}
      target="_blank"
      download={RESUME_FILE_NAME}
      rel="noreferrer"
    >
      <button className="btn btn-outline btn-primary shadow-[inset_0px_0px_8px_1px] shadow-primary">
        {props.content}
      </button>
    </a>
  )
}
