'use client'

type Props = {
  content: string
}

export const DownloadPdfButton = (props: Props) => {
  // TODO: add download function

  return <button className="btn btn-outline btn-primary">{props.content}</button>
}
