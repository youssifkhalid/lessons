"use client"

interface StatisticsCardProps {
  title: string
  value: number
  icon: string
  color: string
}

export default function StatisticsCard({ title, value, icon, color }: StatisticsCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${color} p-6 text-white shadow-lg backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-white/80 mb-1">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
        <div className="text-4xl opacity-20">{icon}</div>
      </div>
    </div>
  )
}
