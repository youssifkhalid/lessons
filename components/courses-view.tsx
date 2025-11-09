"use client"
import { ArrowLeft } from "lucide-react"
import { coursesData } from "@/lib/data"
import CourseCard from "./course-card"

interface CoursesViewProps {
  onBack: () => void
  onSelectCourse: (courseId: string) => void
  completedLessons: Record<string, boolean>
  teacherCompletedLessons: Record<string, boolean>
  onToggleLessonStudent: (lessonId: string) => void
  onToggleLessonTeacher: (lessonId: string) => void
}

export default function CoursesView({
  onBack,
  onSelectCourse,
  completedLessons,
  teacherCompletedLessons,
  onToggleLessonStudent,
  onToggleLessonTeacher,
}: CoursesViewProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={onBack}
        className="flex items-center gap-2 mb-8 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 text-gray-300 hover:text-white"
      >
        <ArrowLeft size={20} />
        عودة
      </button>

      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        المواد الدراسية
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursesData.courses.map((course, idx) => (
          <div
            key={course.id}
            className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <button
              onClick={() => onSelectCourse(course.id)}
              className="w-full hover:scale-105 transition-transform duration-300 active:scale-95"
            >
              <CourseCard
                course={course}
                completedLessons={completedLessons}
                teacherCompletedLessons={teacherCompletedLessons}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
