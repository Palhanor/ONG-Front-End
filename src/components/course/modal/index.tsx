import { ClockIcon, CloseIcon } from '@/components/general/Icons'
import { ILesson } from '@/interfaces/lesson'
import { timeMask } from '@/utils/time-mask'

interface ModalProps {
  selectedLesson: ILesson | null
  handleCloseSelection: () => void
}

export default function Modal({
  selectedLesson,
  handleCloseSelection,
}: ModalProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black/40">
      <div className="w-4/5 rounded-xl bg-white px-10 py-6 lg:w-3/5">
        <div className="mb-4 flex justify-between">
          <h3 className="text-lg font-semibold">{selectedLesson?.title}</h3>{' '}
          <div className="cursor-pointer" onClick={handleCloseSelection}>
            <CloseIcon className="h-6 w-6" />
          </div>
        </div>
        <div className="relative mb-4 flex h-[14.5rem] w-full justify-center pt-[56.3%] md:w-full ">
          <iframe
            className="absolute top-0 h-full w-full rounded-lg"
            width="1120"
            height="630"
            src={`https://www.youtube.com/embed/${selectedLesson?.url}`}
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <span className="flex gap-2 text-gray-500">
            <ClockIcon />
            {timeMask(selectedLesson?.duration || 0)}
          </span>
          <p className="mt-3">{selectedLesson?.description}</p>
        </div>
      </div>
    </div>
  )
}
