import React from 'react'

type Props = {
  skillsData: { label: string; iconClass: string }[]
}

const SkillBadge = ({ iconClass, label }: any) => (
  <div className="badge md:badge-lg md:p-4 p-2.5 m-1.5 h-auto">
    <span className={`${iconClass} mr-2`}></span>
    {label}
  </div>
)

export const Skills = async (props: Props) => {
  return (
    <div>
      {props.skillsData.map((language) => (
        <SkillBadge key={language.label} iconClass={language.iconClass} label={language.label} />
      ))}
    </div>
  )
}
