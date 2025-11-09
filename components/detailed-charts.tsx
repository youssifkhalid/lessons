"use client"
import type { Statistics } from "@/hooks/use-statistics"
import { coursesData } from "@/lib/data"

interface DetailedChartsProps {
  statistics: Statistics
}

export default function DetailedCharts({ statistics }: DetailedChartsProps) {
  // Calculate per-course statistics
  const courseStats = coursesData.courses.map((course) => {
    const completed = course.lessons.filter((l) => l.completed).length
    const total = course.lessons.length
    return {
      name: course.name,
      completed,
      total,
      percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
      color: course.color,
    }
  })

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      {/* Per-Course Progress */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
        <div className="relative bg-background border border-blue-500/20 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300">
          <h3 className="text-lg font-bold text-white mb-6">التقدم حسب المادة</h3>
          <div className="space-y-4">
            {courseStats.map((course, idx) => (
              <div
                key={idx}
                className="animate-in fade-in slide-in-from-left-4"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">{course.name}</span>
                  <span className="text-sm font-bold text-white">{course.percentage}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-1000 rounded-full"
                    style={{
                      width: `${course.percentage}%`,
                      backgroundColor: course.color,
                    }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {course.completed} / {course.total} دروس
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
        <div className="relative bg-background border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300">
          <h3 className="text-lg font-bold text-white mb-6">ملخص الإحصائيات</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
              <span className="text-gray-300">إجمالي الدروس</span>
              <span className="text-xl font-bold text-purple-300">{statistics.totalLessons}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
              <span className="text-gray-300">مكتملة</span>
              <span className="text-xl font-bold text-green-300">{statistics.totalCompletedLessons}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
              <span className="text-gray-300">متراكمة</span>
              <span className="text-xl font-bold text-red-300">{statistics.backlogLessons.length}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
              <span className="text-gray-300">متقدم عن المنهج</span>
              <span className="text-xl font-bold text-yellow-300">{statistics.aheadLessons.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
