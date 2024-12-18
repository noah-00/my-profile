'use client'

import React, { useState } from 'react'

import Image, { StaticImageData } from 'next/image'
import { useTheme } from 'next-themes'

import { MotionFadeIn } from '@/components/motion/MotionFadeIn'
import { MotionFadeInFromBottom } from '@/components/motion/MotionFadeInFromBottom'

import { THEME_DARK } from '@/utils/Const'

const TABS = ['Web Services', 'Web Sites']

type Props = {
  projects: {
    image: StaticImageData
    title: string
    description: string
    technologies: string[]
    type: string
    github: string
    demo: string
  }[]
}

export const Projects = (props: Props) => {
  const { theme } = useTheme()

  const isDark = theme === THEME_DARK
  const shadowClass = isDark
    ? 'shadow-[0_3px_6px_rgba(94,_234,_212,_0.7)]'
    : 'shadow-[0_3px_6px_rgba(77,_110,_212,_0.7)]'

  const [tab, setTab] = useState(TABS[0])

  return (
    <>
      {/* Tabs */}
      <MotionFadeIn delay={0.15}>
        <div role="tablist" className="tabs tabs-boxed mt-8 lg:mx-20 mx-4 lg:tabs-lg p-2">
          {TABS.map((t) => (
            <a
              role="tab"
              className={`tab ${tab === t && 'tab-active'}`}
              onClick={() => setTab(t)}
              key={t}
            >
              {t}
            </a>
          ))}
        </div>
      </MotionFadeIn>

      {/* Tab contents */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
        {props.projects.map(
          (project, index) =>
            project.type === tab && (
              <MotionFadeInFromBottom delay={0.15 * (index + 1 / 2)} key={index}>
                <div className={`card bg-base-100 ${shadowClass}`}>
                  <figure>
                    <Image src={project.image} alt={`Project Image ${index}`} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-2xl">{project.title}</h2>
                    <p>{project.description}</p>
                    <div className="text-sm space-x-2 space-y-2">
                      {project.technologies &&
                        project.technologies.map((technology, index) => {
                          return (
                            <span key={index} className="badge badge-primary badge-outline">
                              {technology}
                            </span>
                          )
                        })}
                    </div>
                    <div className="space-x-4 mt-2">
                      <a className="link" href={project.github} target="_blank">
                        <div className="h-7 w-7 hover:bg-primary i-ion-logo-github"></div>
                      </a>
                      <a className="link" href={project.demo} target="_blank">
                        <div className="h-7 w-7 hover:bg-primary i-clarity-pop-out-line"></div>
                      </a>
                    </div>
                  </div>
                </div>
              </MotionFadeInFromBottom>
            )
        )}
      </div>
    </>
  )
}
