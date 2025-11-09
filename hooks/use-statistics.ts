"use client"

import { coursesData } from "@/lib/data"
import { useMemo } from "react"

export interface BacklogLesson {
  id: string
  name: string
  courseId: string
  courseName: string
  chapter: number
}

export interface Statistics {
  totalLessons: number
  totalCompletedLessons: number
  backlogLessons: BacklogLesson[]
  aheadLessons: BacklogLesson[]
}

export function useStatistics(
  completedLessons: Record<string, boolean>,
  teacherCompletedLessons: Record<string, boolean>,
): Statistics {
  return useMemo(() => {
    let totalLessons = 0
    let totalCompletedLessons = 0
    const backlog: BacklogLesson[] = []
    const ahead: BacklogLesson[] = []

    coursesData.courses.forEach((course) => {
      totalLessons += course.lessons.length

      course.lessons.forEach((lesson) => {
        const isStudentCompleted = completedLessons[lesson.id]
        const isTeacherCompleted = teacherCompletedLessons[lesson.id]

        if (isStudentCompleted && isTeacherCompleted) {
          totalCompletedLessons++
        }

        // الدروس المتراكمة: المعلم شرح لكن الطالب لم يذاكر
        if (isTeacherCompleted && !isStudentCompleted) {
          backlog.push({
            id: lesson.id,
            name: lesson.name,
            courseId: course.id,
            courseName: course.name,
            chapter: lesson.chapter,
          })
        }

        // الدروس المتقدمة: الطالب ذاكر لكن المعلم لم يشرح
        if (isStudentCompleted && !isTeacherCompleted) {
          ahead.push({
            id: lesson.id,
            name: lesson.name,
            courseId: course.id,
            courseName: course.name,
            chapter: lesson.chapter,
          })
        }
      })
    })

    return {
      totalLessons,
      totalCompletedLessons,
      backlogLessons: backlog,
      aheadLessons: ahead,
    }
  }, [completedLessons, teacherCompletedLessons])
}
