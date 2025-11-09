"use client"
import { useState } from "react"
import { ChevronDown, CheckCircle2 } from "lucide-react"
import { coursesData } from "@/lib/data"

interface ProgressSelectorNewProps {
  title: string
  subtitle: string
  completedLessons: Record<string, boolean>
  onToggleLesson: (lessonId: string) => void
  type: "teacher" | "student"
}

export default function ProgressSelectorNew({
  title,
  subtitle,
  completedLessons,
  onToggleLesson,
  type,
}: ProgressSelectorNewProps) {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null)
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null)

  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-6 hover:border-white/40 transition-all duration-300">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-6">{subtitle}</p>

      <div className="space-y-2 max-h-96 overflow-y-auto">
        {coursesData.courses.map((course) => (
          <div key={course.id}>
            <button
              onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
              className="w-full flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              <span className="font-semibold text-white">{course.name}</span>
              <ChevronDown
                size={18}
                className={`transition-transform ${expandedCourse === course.id ? "rotate-180" : ""}`}
              />
            </button>

            {expandedCourse === course.id && (
              <div className="mt-2 ml-4 space-y-2 border-l-2 border-white/20 pl-4">
                {Array.from(new Set(course.lessons.map((l) => l.chapter))).map((chapter) => (
                  <div key={`${course.id}-ch${chapter}`}>
                    <button
                      onClick={() => {
                        const key = `${course.id}-ch${chapter}`
                        setExpandedChapter(expandedChapter === key ? null : key)
                      }}
                      className="flex items-center justify-between p-2 hover:bg-white/10 rounded transition-all"
                    >
                      <span className="text-sm text-gray-300">الباب {chapter}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          expandedChapter === `${course.id}-ch${chapter}` ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {expandedChapter === `${course.id}-ch${chapter}` && (
                      <div className="mt-1 space-y-1 ml-4">
                        {course.lessons
                          .filter((l) => l.chapter === chapter)
                          .map((lesson) => (
                            <button
                              key={lesson.id}
                              onClick={() => onToggleLesson(lesson.id)}
                              className="w-full flex items-center gap-2 p-2 hover:bg-white/10 rounded transition-all text-left text-xs text-gray-300"
                            >
                              <CheckCircle2
                                size={16}
                                className={
                                  completedLessons[lesson.id] ? "text-green-400 fill-green-400" : "text-gray-600"
                                }
                              />
                              <span className={completedLessons[lesson.id] ? "line-through text-gray-500" : ""}>
                                {lesson.name}
                              </span>
                            </button>
                          ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
