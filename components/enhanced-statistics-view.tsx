"use client"
import { useState } from "react"
import { ArrowLeft, TrendingUp, Target, Zap, BookOpen, BarChart3 } from "lucide-react"
import StatisticsCard from "./statistics-card"
import ProgressSelectorNew from "./progress-selector-new"
import BacklogLessons from "./backlog-lessons"
import DetailedCharts from "./detailed-charts"
import type { Statistics } from "@/hooks/use-statistics"

interface EnhancedStatisticsViewProps {
  statistics: Statistics
  onBack: () => void
  completedLessons: Record<string, boolean>
  teacherCompletedLessons: Record<string, boolean>
  onToggleLessonStudent: (lessonId: string) => void
  onToggleLessonTeacher: (lessonId: string) => void
}

export default function EnhancedStatisticsView({
  statistics,
  onBack,
  completedLessons,
  teacherCompletedLessons,
  onToggleLessonStudent,
  onToggleLessonTeacher,
}: EnhancedStatisticsViewProps) {
  const [showDetailedView, setShowDetailedView] = useState(false)
  const [activeFilter, setActiveFilter] = useState<"all" | "backlog" | "ahead">("all")

  const completionPercentage =
    statistics.totalLessons > 0 ? Math.round((statistics.totalCompletedLessons / statistics.totalLessons) * 100) : 0

  const backlogPercentage =
    statistics.totalLessons > 0 ? Math.round((statistics.backlogLessons.length / statistics.totalLessons) * 100) : 0

  const gap = statistics.backlogLessons.length

  return (
    <div className="min-h-screen pb-20">
      <div className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-white/5 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <ArrowLeft size={24} className="text-purple-400" />
              </button>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  لوحة الإحصائيات
                </h1>
                <p className="text-sm text-gray-400 mt-1">تحليل شامل لتقدمك الدراسي</p>
              </div>
            </div>
            <button
              onClick={() => setShowDetailedView(!showDetailedView)}
              className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 rounded-lg border border-blue-400/50 text-blue-300 transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              <BarChart3 size={18} />
              <span className="hidden sm:inline">عرض تفصيلي</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-background border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <Target size={24} className="text-purple-400" />
                <span className="text-2xl font-bold text-purple-300">{completionPercentage}%</span>
              </div>
              <p className="text-sm text-gray-400">نسبة الإنجاز</p>
              <div className="mt-3 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000"
                  style={{ width: `${completionPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-background border border-red-500/20 rounded-xl p-6 hover:border-red-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp size={24} className="text-red-400" />
                <span className="text-2xl font-bold text-red-300">{gap}</span>
              </div>
              <p className="text-sm text-gray-400">الدروس المتراكمة</p>
              <div className="mt-3 text-xs text-red-400">{backlogPercentage}% من المنهج</div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-background border border-green-500/20 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <Zap size={24} className="text-green-400" />
                <span className="text-2xl font-bold text-green-300">{statistics.aheadLessons.length}</span>
              </div>
              <p className="text-sm text-gray-400">متقدم عن المنهج</p>
              <div className="mt-3 text-xs text-green-400">متابعة قوية</div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-background border border-blue-500/20 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <BookOpen size={24} className="text-blue-400" />
                <span className="text-2xl font-bold text-blue-300">{statistics.totalLessons}</span>
              </div>
              <p className="text-sm text-gray-400">إجمالي الدروس</p>
              <div className="mt-3 text-xs text-blue-400">المنهج الكامل</div>
            </div>
          </div>
        </div>

        {showDetailedView && (
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <DetailedCharts statistics={statistics} />
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <ProgressSelectorNew
            title="تقدم المعلم"
            subtitle="اختر الدروس التي تم شرحها"
            completedLessons={teacherCompletedLessons}
            onToggleLesson={onToggleLessonTeacher}
            type="teacher"
          />
          <ProgressSelectorNew
            title="تقدم الطالب"
            subtitle="اختر الدروس التي تم ذاكرتها"
            completedLessons={completedLessons}
            onToggleLesson={onToggleLessonStudent}
            type="student"
          />
        </div>

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

        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">تفاصيل التقدم</h2>
            <div className="flex gap-2">
              {["all", "backlog", "ahead"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter as any)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-purple-500/30 border border-purple-400 text-purple-300"
                      : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10"
                  }`}
                >
                  {filter === "all" && "الكل"}
                  {filter === "backlog" && "متراكم"}
                  {filter === "ahead" && "متقدم"}
                </button>
              ))}
            </div>
          </div>
          <BacklogLessons
            backlogLessons={activeFilter !== "ahead" ? statistics.backlogLessons : []}
            aheadLessons={activeFilter !== "backlog" ? statistics.aheadLessons : []}
          />
        </div>
      </div>
    </div>
  )
}
