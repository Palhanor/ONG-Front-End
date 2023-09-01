'use client'

import { DownIcon } from '@/components/general/Icons'
import { ILesson } from '@/interfaces/lesson'
import { Module as ModuleModel } from '@/model/Module'
import { textPreview } from '@/utils/text-preview'
import { timeMask } from '@/utils/time-mask'
import { useState } from 'react'
import Lesson from './lesson'

interface ModuleProps {
  module: ModuleModel
  position: number
  handleSelection: (lesson: ILesson) => void
}

export default function Module({
  module,
  position,
  handleSelection,
}: ModuleProps) {
  const [open, setOpen] = useState<boolean>(false)
  const handleClick = () => setOpen((prev) => !prev)

  return (
    <div className="border-x border-t border-slate-300 last:border-b hover:bg-gray-50 md:border-slate-400 ">
      <div
        className={
          'cursor-pointer px-6 py-6 md:px-10 ' + (open && 'bg-green-600')
        }
        onClick={handleClick}
      >
        <header className="mb-3 flex justify-between">
          <div className="flex items-center gap-3">
            <h2
              className={
                'text-base font-semibold md:text-lg ' + (open && 'text-white')
              }
            >
              {position}. {module.title}
            </h2>
            <span
              className={
                'hidden text-gray-500 md:block ' + (open && 'text-gray-300')
              }
            >
              {timeMask(module.duration || 0)}
            </span>
          </div>
          <div
            className={'flex items-start ' + (open && 'rotate-180 items-end')}
          >
            <DownIcon className={'h-6 w-6 ' + (open && 'text-white')} />
          </div>
        </header>
        <p
          className={
            'text-sm text-gray-600 md:text-base ' + (open && 'text-gray-100')
          }
        >
          {textPreview(module.description, window.innerWidth, open)}
        </p>
      </div>
      {open && (
        <div>
          {module.lessons.map((lesson) => (
            <Lesson
              key={lesson.id}
              lesson={lesson}
              handleSelection={handleSelection}
            />
          ))}
        </div>
      )}
    </div>
  )
}
