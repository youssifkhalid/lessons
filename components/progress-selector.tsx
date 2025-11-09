"use client"
import { coursesData } from "@/lib/data"

interface ProgressSelectorProps {
  title: string
  subtitle: string
  value: Record<string, number>
  onChange: (courseId: string, index: number) => void
  type: "teacher" | "student"
}

export default function ProgressSelector({ title, subtitle, value, onChange, type }: ProgressSelectorProps) {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-6 hover:border-white/30 transition-all duration-300">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{subtitle}</p>

      <div className="space-y-3">
        {coursesData.courses.map((course) => (
          <div key={course.id} className="flex items-center gap-3">
            <span className="text-2xl">{course.emoji}</span>
            <select
              value={value[course.id] || -1}
              onChange={(e) => onChange(course.id, Number.parseInt(e.target.value))}
              className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-white/50 transition-all duration-300"
            >
              <option value={-1}>لم يتم تحديد</option>
              {course.lessons.map((lesson, idx) => (
                <option key={lesson.id} value={idx}>
                  الدرس {idx + 1}: {lesson.name.substring(0, 30)}...
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}
