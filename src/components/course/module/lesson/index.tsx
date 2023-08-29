import { ILesson } from '@/interfaces/lesson'
import { timeMask } from '@/utils/time-mask'
import Image from 'next/image'
import Link from 'next/link'

export default function Lesson({
  lesson,
  position,
}: {
  lesson: ILesson
  position: number
}) {
  return (
    <div className="min-h-32 mb-4 cursor-pointer rounded-md border border-white p-3 hover:border-gray-100 hover:bg-slate-50 hover:shadow-md md:mx-6">
      <Link className="flex gap-5" href={`${lesson?.url}`} target="_blank">
        <div className="relative">
          <Image
            className="relative hidden h-full w-36 rounded-md brightness-75 filter md:block"
            src={`${lesson?.thumb}`}
            alt="Thumb da aula"
            width={336}
            height={188}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute left-1/2 top-1/2 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 text-white/60 md:block"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <div className="flex items-center gap-3 pt-3">
            <h3 className="text-lg font-medium">
              {position}. {lesson?.title}
            </h3>
            <span className="hidden text-gray-500 md:block">
              {timeMask(lesson?.duration || 0)}
            </span>
          </div>
          <p className="hidden text-gray-600 md:block">{lesson?.description}</p>
        </div>
      </Link>
    </div>
  )
}
