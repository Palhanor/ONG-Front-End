import Modules from '@/components/course/modules'
import Professor from '@/components/course/professor'
import { ClockIcon, VideoIcon } from '@/components/general/Icons'
import Title from '@/components/general/Title'
import { ICourse } from '@/interfaces/course'
import { Course as CourseModel } from '@/model/Course'
import { timeMask } from '@/utils/time-mask'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getCourseBySlug(slug: string) {
  const response = await fetch(`${process.env.HYPERLINK}/api/cursos/${slug}`)
  if (response.status !== 200) notFound()
  const { data } = await response.json()
  return data
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const course: ICourse = await getCourseBySlug(params.slug)
  return {
    title: `Curso - ${course.name}`,
    description: 'Esse é o nosso curso sobre cursos.',
  }
}

export default async function Course({ params }: { params: { slug: string } }) {
  const course: CourseModel = await getCourseBySlug(params.slug)
  return (
    <>
      <div>
        <Image
          className="mb-10 h-36 object-cover md:h-auto md:w-full"
          src={course.banner}
          alt="Banner do curso"
          width={1440}
          height={360}
          loading="eager"
        />
      </div>

      <section className="md:custom-mx-global mx-6">
        <h1 className="pb-4 text-2xl font-semibold text-blue-700 md:pb-2 md:text-3xl">
          Cuso de {course.name}
        </h1>
        <p className="flex flex-col gap-3 font-medium text-gray-600 md:flex-row">
          <span className="flex items-center gap-1">
            <VideoIcon />
            {course.lessons} Aulas
          </span>
          <div className="hidden md:block">&#x2022;</div>
          <span className="flex items-center gap-1">
            <ClockIcon />
            {timeMask(course.duration)}
          </span>
        </p>
        <p className="mb-4 mt-3 text-base font-normal text-gray-700">
          {course.about}
        </p>
      </section>

      <Modules modules={course.modules} />

      <section className="mb-24 mt-16 px-[20%]">
        <Title icon="/icons/hands.svg">Nossos Professores</Title>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {course.professors.map((professor) => (
            <Professor key={professor.id} professor={professor} />
          ))}
        </div>
      </section>
    </>
  )
}
