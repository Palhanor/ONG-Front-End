import { PlayIcon } from '@/components/general/Icons'
import useWindowWidth from '@/hooks/useWindowWidth'
import { ILesson } from '@/interfaces/lesson'
import { breakpoints } from '@/utils/breakpoints'
import { timeMask } from '@/utils/time-mask'
import Image from 'next/image'

interface LessonProps {
  lesson: ILesson
  handleSelection: (lesson: ILesson) => void
}

export default function Lesson({ lesson, handleSelection }: LessonProps) {
  const windowWidth = useWindowWidth()
  const handleSelectionMobile = (lesson: ILesson) => {
    if (windowWidth > breakpoints.MOBILE) handleSelection(lesson)
    else window.open(`https://www.youtube.com/watch?v=${lesson.url}`)
  }

  return (
    <div
      className="min-h-32 flex cursor-pointer flex-col gap-3 border-t border-gray-200 p-6 hover:bg-gray-50 md:flex-row md:gap-5 md:px-10"
      onClick={() => handleSelectionMobile(lesson)}
    >
      <div className="relative">
        <Image
          className="relative m-auto h-full w-full rounded-md brightness-75 filter md:m-0 md:block md:w-44"
          src={`${lesson?.thumb}`}
          alt="Thumb da aula"
          width={336}
          height={188}
        />
        <PlayIcon />
      </div>
      <div>
        <div className="flex items-center gap-3">
          <h3 className="text-center text-lg font-medium md:text-left">
            {lesson?.title}
          </h3>
          <span className="hidden text-gray-500 lg:block">
            {timeMask(lesson?.duration || 0)}
          </span>
        </div>
        <p className="hidden text-gray-600 md:block">{lesson?.description}</p>
      </div>
    </div>
  )
}
