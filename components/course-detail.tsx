"use client"

import { useState, useMemo } from "react"
import { ArrowLeft, ChevronDown, CheckCircle2 } from "lucide-react"
import type { Course } from "@/lib/data"

interface CourseDetailProps {
  course: Course
  onBack: () => void
  completedLessons: Record<string, boolean>
  teacherCompletedLessons: Record<string, boolean>
  onToggleLessonStudent: (lessonId: string) => void
  onToggleLessonTeacher: (lessonId: string) => void
}

export default function CourseDetail({
  course,
  onBack,
  completedLessons,
  teacherCompletedLessons,
  onToggleLessonStudent,
  onToggleLessonTeacher,
}: CourseDetailProps) {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(1)
  const [teacherMode, setTeacherMode] = useState(false)

  const chapters = useMemo(() => {
    const uniqueChapters = Array.from(new Set(course.lessons.map((l) => l.chapter))).sort((a, b) => a - b)
    return uniqueChapters
  }, [course])

  const getLessonsByChapter = (chapter: number) => {
    return course.lessons.filter((l) => l.chapter === chapter)
  }

  const getProgressPercentage = (chapter: number) => {
    const lessons = getLessonsByChapter(chapter)
    const completed = lessons.filter((l) =>
      teacherMode ? teacherCompletedLessons[l.id] : completedLessons[l.id],
    ).length
    return lessons.length > 0 ? Math.round((completed / lessons.length) * 100) : 0
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          style={{ backgroundColor: course.color }}
        ></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-in fade-in slide-in-from-top duration-500">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <ArrowLeft size={20} />
            عودة
          </button>

          <div className="flex-1 ml-8">
            <h1 className="text-4xl font-bold flex items-center gap-4">
              <span className="text-5xl">{course.emoji}</span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {course.name}
              </span>
            </h1>
            <p className="text-gray-400 mt-2">
              {course.lessons.length} درس في {chapters.length} أبواب
            </p>
          </div>

          {/* Toggle between student and teacher mode */}
          <button
            onClick={() => setTeacherMode(!teacherMode)}
            className={`px-6 py-2 rounded-lg transition-all duration-300 font-semibold ${
              teacherMode
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                : "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
            }`}
          >
            {teacherMode ? "وضع المعلم" : "وضع الطالب"}
          </button>
        </div>

        {/* Chapters View */}
        <div className="space-y-3">
          {chapters.map((chapter, idx) => {
            const isExpanded = expandedChapter === chapter
            const lessons = getLessonsByChapter(chapter)
            const progress = getProgressPercentage(chapter)

            return (
              <div
                key={chapter}
                className="animate-in fade-in slide-in-from-bottom duration-500"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <button
                  onClick={() => setExpandedChapter(isExpanded ? null : chapter)}
                  className="w-full p-4 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-lg hover:border-white/40 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1 text-right">
                      <div>
                        <h3 className="font-bold text-lg">الباب {chapter}</h3>
                        <p className="text-sm text-gray-400">{lessons.length} درس</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold" style={{ color: course.color }}>
                          {progress}%
                        </p>
                        <div className="w-16 h-1 bg-white/10 rounded-full mt-1 overflow-hidden">
                          <div
                            className="h-full transition-all duration-500"
                            style={{ width: `${progress}%`, backgroundColor: course.color }}
                          ></div>
                        </div>
                      </div>
                      <ChevronDown
                        size={24}
                        className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </div>
                  </div>
                </button>

                {/* Expanded Lessons */}
                {isExpanded && (
                  <div className="mt-2 space-y-2 animate-in fade-in slide-in-from-top duration-300">
                    {lessons.map((lesson, lessonIdx) => {
                      const isCompleted = teacherMode ? teacherCompletedLessons[lesson.id] : completedLessons[lesson.id]

                      return (
                        <div
                          key={lesson.id}
                          className="animate-in fade-in slide-in-from-right duration-300"
                          style={{ animationDelay: `${lessonIdx * 30}ms` }}
                        >
                          <div className="p-3 bg-white/5 border border-white/10 rounded-lg hover:border-white/30 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                            <div className="flex items-start gap-3">
                              <button
                                onClick={() =>
                                  teacherMode ? onToggleLessonTeacher(lesson.id) : onToggleLessonStudent(lesson.id)
                                }
                                className="mt-1 transition-all duration-300 hover:scale-110"
                              >
                                <CheckCircle2
                                  size={20}
                                  className={`transition-all duration-300 ${
                                    isCompleted
                                      ? "text-green-400 fill-green-400"
                                      : "text-gray-500 hover:text-purple-400"
                                  }`}
                                />
                              </button>
                              <div className="flex-1">
                                <p
                                  className={`text-sm transition-all duration-300 ${
                                    isCompleted ? "line-through text-gray-500" : "text-white"
                                  }`}
                                >
                                  {lesson.name}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
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
