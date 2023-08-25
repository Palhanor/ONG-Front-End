import { ICourse } from '@/interfaces/course'
import { NextResponse } from 'next/server'
import { Context } from 'vm'
import { Course } from '../../../../model/Course'
import { courses } from '../../data/courses'

export async function GET(request: Request, context: Context) {
  const slug: string = context.params.slug
  console.log(slug)
  const course: ICourse | undefined = courses.find(
    (course) => course.slug === slug,
  )
  if (!course) return NextResponse.json({ data: [] }, { status: 404 })

  const realCourse = new Course(course)

  return NextResponse.json({ data: realCourse }, { status: 200 })
}
