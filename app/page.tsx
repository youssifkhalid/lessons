"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import EnhancedStatisticsView from "@/components/enhanced-statistics-view"
import CoursesView from "@/components/courses-view"
import CourseDetail from "@/components/course-detail"
import { useStatistics } from "@/hooks/use-statistics"
import { coursesData } from "@/lib/data"

export default function Home() {
  const [currentView, setCurrentView] = useState<"home" | "statistics" | "courses" | "course-detail">("home")
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null)
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({})
  const [teacherCompletedLessons, setTeacherCompletedLessons] = useState<Record<string, boolean>>({})

  const statistics = useStatistics(completedLessons, teacherCompletedLessons)

  useEffect(() => {
    document.documentElement.classList.add("dark")

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {})
    }

    const savedStudent = localStorage.getItem("studentLessons")
    const savedTeacher = localStorage.getItem("teacherLessons")
    if (savedStudent) setCompletedLessons(JSON.parse(savedStudent))
    if (savedTeacher) setTeacherCompletedLessons(JSON.parse(savedTeacher))
  }, [])

  useEffect(() => {
    localStorage.setItem("studentLessons", JSON.stringify(completedLessons))
  }, [completedLessons])

  useEffect(() => {
    localStorage.setItem("teacherLessons", JSON.stringify(teacherCompletedLessons))
  }, [teacherCompletedLessons])

  const handleToggleLessonStudent = (lessonId: string) => {
    setCompletedLessons((prev) => ({
      ...prev,
      [lessonId]: !prev[lessonId],
    }))
  }

  const handleToggleLessonTeacher = (lessonId: string) => {
    setTeacherCompletedLessons((prev) => ({
      ...prev,
      [lessonId]: !prev[lessonId],
    }))
  }

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
    if (theme === "dark") {
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }

  const handleOpenCourseDetail = (courseId: string) => {
    setSelectedCourseId(courseId)
    setCurrentView("course-detail")
  }

  const handleCloseCourseDetail = () => {
    setSelectedCourseId(null)
    setCurrentView("courses")
  }

  const selectedCourse = selectedCourseId ? coursesData.courses.find((c) => c.id === selectedCourseId) : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-6000"></div>
      </div>

      <div className="relative z-10">
        <Header onThemeToggle={handleToggleTheme} currentTheme={theme} />

        {currentView === "home" && <Navigation onViewChange={setCurrentView} statistics={statistics} />}

        {currentView === "statistics" && (
          <EnhancedStatisticsView
            statistics={statistics}
            onBack={() => setCurrentView("home")}
            completedLessons={completedLessons}
            teacherCompletedLessons={teacherCompletedLessons}
            onToggleLessonStudent={handleToggleLessonStudent}
            onToggleLessonTeacher={handleToggleLessonTeacher}
          />
        )}

        {currentView === "courses" && (
          <CoursesView
            onBack={() => setCurrentView("home")}
            onSelectCourse={handleOpenCourseDetail}
            completedLessons={completedLessons}
            teacherCompletedLessons={teacherCompletedLessons}
            onToggleLessonStudent={handleToggleLessonStudent}
            onToggleLessonTeacher={handleToggleLessonTeacher}
          />
        )}

        {currentView === "course-detail" && selectedCourse && (
          <CourseDetail
            course={selectedCourse}
            onBack={handleCloseCourseDetail}
            completedLessons={completedLessons}
            teacherCompletedLessons={teacherCompletedLessons}
            onToggleLessonStudent={handleToggleLessonStudent}
            onToggleLessonTeacher={handleToggleLessonTeacher}
          />
        )}
      </div>
    </div>
  )
}
