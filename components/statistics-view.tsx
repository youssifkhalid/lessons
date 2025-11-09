"use client"
import { ArrowLeft } from "lucide-react"
import StatisticsCard from "./statistics-card"
import ProgressSelector from "./progress-selector"
import BacklogLessons from "./backlog-lessons"
import type { Statistics } from "@/hooks/use-statistics"

interface StatisticsViewProps {
  statistics: Statistics
  onBack: () => void
  teacherProgress: Record<string, number>
  studentProgress: Record<string, number>
  onSetTeacherProgress: (courseId: string, index: number) => void
  onSetStudentProgress: (courseId: string, index: number) => void
}

export default function StatisticsView({
  statistics,
  onBack,
  teacherProgress,
  studentProgress,
  onSetTeacherProgress,
  onSetStudentProgress,
}: StatisticsViewProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={onBack}
        className="flex items-center gap-2 mb-8 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 text-gray-300 hover:text-white"
      >
        <ArrowLeft size={20} />
        عودة
      </button>

      {/* Progress Selectors */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <ProgressSelector
          title="تقدم المعلم"
          subtitle="آخر درس تم شرحه"
          value={teacherProgress}
          onChange={onSetTeacherProgress}
          type="teacher"
        />
        <ProgressSelector
          title="تقدم الطالب"
          subtitle="آخر درس تم ذاكرته"
          value={studentProgress}
          onChange={onSetStudentProgress}
          type="student"
        />
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatisticsCard
          title="إجمالي الدروس"
          value={statistics.totalLessons}
          icon="📚"
          color="from-blue-500 to-blue-600"
        />
        <StatisticsCard
          title="المكتملة"
          value={statistics.totalCompletedLessons}
          icon="✅"
          color="from-green-500 to-green-600"
        />
        <StatisticsCard
          title="المتراكمة"
          value={statistics.backlogLessons.length}
          icon="📈"
          color="from-red-500 to-red-600"
        />
        <StatisticsCard
          title="المتقدمة"
          value={statistics.aheadLessons.length}
          icon="⚡"
          color="from-yellow-500 to-yellow-600"
        />
      </div>

      {/* Backlog Section */}
      <BacklogLessons backlogLessons={statistics.backlogLessons} aheadLessons={statistics.aheadLessons} />
    </div>
  )
}
