"use client"

import { useState } from "react"
import type { BacklogLesson } from "@/hooks/use-statistics"

interface BacklogLessonsProps {
  backlogLessons: BacklogLesson[]
  aheadLessons: BacklogLesson[]
}

export default function BacklogLessons({ backlogLessons, aheadLessons }: BacklogLessonsProps) {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null)

  const groupByChapter = (lessons: BacklogLesson[]) => {
    return lessons.reduce(
      (acc, lesson) => {
        const key = `${lesson.courseId}-${lesson.chapter}`
        if (!acc[key]) acc[key] = []
        acc[key].push(lesson)
        return acc
      },
      {} as Record<string, BacklogLesson[]>,
    )
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Backlog */}
      <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/50 rounded-xl p-6 backdrop-blur-xl">
        <h3 className="text-2xl font-bold text-red-300 mb-4 flex items-center gap-2">
          <span>📈</span> الدروس المتراكمة ({backlogLessons.length})
        </h3>

        {backlogLessons.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <p className="text-lg">✨ لا توجد دروس متراكمة</p>
            <p className="text-sm mt-2">تقدم ممتاز!</p>
          </div>
        ) : (
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {Object.entries(groupByChapter(backlogLessons)).map(([key, lessons]) => (
              <div key={key} className="bg-white/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedCourse(expandedCourse === key ? null : key)}
                  className="w-full p-3 text-left font-semibold text-red-300 hover:bg-white/5 transition-colors duration-300 flex items-center justify-between"
                >
                  <span>
                    {lessons[0].courseName} - الباب {lessons[0].chapter}
                  </span>
                  <span className="text-xs bg-red-500/50 px-2 py-1 rounded">{lessons.length} دروس</span>
                </button>

                {expandedCourse === key && (
                  <div className="p-3 bg-black/20 border-t border-white/10 space-y-2">
                    {lessons.map((lesson) => (
                      <div key={lesson.id} className="text-sm text-gray-300 pl-4 border-l border-red-500/50">
                        {lesson.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Ahead */}
      <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/50 rounded-xl p-6 backdrop-blur-xl">
        <h3 className="text-2xl font-bold text-blue-300 mb-4 flex items-center gap-2">
          <span>⚡</span> الدروس المتقدمة ({aheadLessons.length})
        </h3>

        {aheadLessons.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <p className="text-lg">🚀 لا توجد دروس متقدمة</p>
            <p className="text-sm mt-2">المسار متوازن</p>
          </div>
        ) : (
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {Object.entries(groupByChapter(aheadLessons)).map(([key, lessons]) => (
              <div key={key} className="bg-white/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedCourse(expandedCourse === key ? null : key)}
                  className="w-full p-3 text-left font-semibold text-blue-300 hover:bg-white/5 transition-colors duration-300 flex items-center justify-between"
                >
                  <span>
                    {lessons[0].courseName} - الباب {lessons[0].chapter}
                  </span>
                  <span className="text-xs bg-blue-500/50 px-2 py-1 rounded">{lessons.length} دروس</span>
                </button>

                {expandedCourse === key && (
                  <div className="p-3 bg-black/20 border-t border-white/10 space-y-2">
                    {lessons.map((lesson) => (
                      <div key={lesson.id} className="text-sm text-gray-300 pl-4 border-l border-blue-500/50">
                        {lesson.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
