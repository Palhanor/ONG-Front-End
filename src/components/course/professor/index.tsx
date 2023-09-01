import { IProfessor } from '@/interfaces/professor'
import Image from 'next/image'

export default function Professor({ professor }: { professor: IProfessor }) {
  return (
    <div className="mt-6 flex flex-col items-center lg:gap-1">
      <Image
        className="mb-2"
        src={professor.image || ''}
        alt={`Foto de ${professor.name}`}
        width={143}
        height={143}
      />
      <p className="mb-1 text-center text-lg font-medium">{professor.name}</p>
      <span className="text-center text-gray-600">{professor.subject}</span>
    </div>
  )
}
