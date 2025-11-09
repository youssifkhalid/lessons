"use client"

import type { Course } from "@/lib/data"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface CourseCardProps {
  course: Course
  completedLessons: Record<string, boolean>
  teacherCompletedLessons: Record<string, boolean>
}

export default function CourseCard({ course, completedLessons, teacherCompletedLessons }: CourseCardProps) {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null)

  const chapters = Array.from(new Set(course.lessons.map((l) => l.chapter))).sort((a, b) => a - b)
  const getLessonsByChapter = (chapter: number) => course.lessons.filter((l) => l.chapter === chapter)

  const studentCompleted = course.lessons.filter((l) => completedLessons[l.id]).length
  const teacherCompleted = course.lessons.filter((l) => teacherCompletedLessons[l.id]).length
  const studentPercentage = Math.round((studentCompleted / course.lessons.length) * 100)
  const teacherPercentage = Math.round((teacherCompleted / course.lessons.length) * 100)

  return (
    <div
      className="relative group bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl overflow-hidden backdrop-blur-xl hover:border-white/40 transition-all duration-300"
      style={{ borderColor: `${course.color}33` }}
    >
      {/* Animated background glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl pointer-events-none"
        style={{ backgroundColor: course.color }}
      ></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="p-6" style={{ borderBottom: `3px solid ${course.color}` }}>
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <span className="text-3xl">{course.emoji}</span>
            {course.name}
          </h3>
          <p className="text-sm text-gray-400 mt-2">{course.lessons.length} درس</p>

          {/* Progress bars */}
          <div className="space-y-2 mt-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-400">الطالب</span>
                <span className="text-xs font-bold text-gray-300">{studentPercentage}%</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500"
                  style={{ width: `${studentPercentage}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-400">المعلم</span>
                <span className="text-xs font-bold text-gray-300">{teacherPercentage}%</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-400 to-cyan-500 transition-all duration-500"
                  style={{ width: `${teacherPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapters */}
        <div className="max-h-96 overflow-y-auto">
          {chapters.map((chapter) => {
            const lessons = getLessonsByChapter(chapter)
            const isExpanded = expandedChapter === chapter

            return (
              <div key={chapter} className="border-t border-white/10">
                <button
                  onClick={() => setExpandedChapter(isExpanded ? null : chapter)}
                  className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors duration-300 text-left font-semibold"
                >
                  <span>الباب {chapter}</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-4 pb-3 space-y-2 bg-black/20">
                    {lessons.map((lesson) => (
                      <div key={lesson.id} className="text-xs text-gray-400 leading-tight py-1">
                        {lesson.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
