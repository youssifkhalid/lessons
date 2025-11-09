"use client"
import type { Statistics } from "@/hooks/use-statistics"

interface NavigationProps {
  onViewChange: (view: "statistics" | "courses") => void
  statistics: Statistics
}

export default function Navigation({ onViewChange, statistics }: NavigationProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Statistics Card */}
        <div
          onClick={() => onViewChange("statistics")}
          className="group cursor-pointer relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 border border-purple-500/50 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 active:scale-95 p-8 backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center text-2xl">
                📊
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">الإحصائيات</h2>
                <p className="text-purple-300">تفصيلية وذكية</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-300">إجمالي الدروس المكتملة</span>
                <span className="text-purple-300 font-semibold">{statistics.totalCompletedLessons}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-300">الدروس المتراكمة</span>
                <span className="text-pink-300 font-semibold">{statistics.backlogLessons.length}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-300">الدروس المتقدمة</span>
                <span className="text-blue-300 font-semibold">{statistics.aheadLessons.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Card */}
        <div
          onClick={() => onViewChange("courses")}
          className="group cursor-pointer relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 border border-blue-500/50 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 active:scale-95 p-8 backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center text-2xl">
                📚
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">المواد الدراسية</h2>
                <p className="text-blue-300">5 مواد شاملة</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-gray-300 text-sm leading-relaxed">
                استعرض المواد وحدد التقدم للمعلم والطالب لكل درس بدقة
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
