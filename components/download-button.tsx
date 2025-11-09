"use client"
import { Download } from "lucide-react"
import { useState } from "react"

export default function DownloadButton() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    try {
      const JSZip = (await import("jszip")).default
      const zip = new JSZip()

      // Create folder structure
      const folder = zip.folder("curriculum-tracker")
      if (!folder) return

      // Add HTML file
      const htmlContent = `<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>محقق المنهج الدراسي</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="root"></div>
  <script src="app.js"><\/script>
</body>
</html>`
      folder.file("index.html", htmlContent)

      // Add CSS file
      const cssContent = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  color: #e2e8f0;
  min-height: 100vh;
  padding: 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 40px;
  animation: slideDown 0.6s ease-out;
}

.header h1 {
  font-size: 2.5rem;
  background: linear-gradient(to right, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.course-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: fadeIn 0.5s ease-out;
}

.course-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255,255,255,0.4);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.course-title {
  font-size: 1.3rem;
  margin-bottom: 15px;
  font-weight: 600;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(255,255,255,0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(to right, #60a5fa, #a78bfa);
  transition: width 1s ease-out;
  border-radius: 4px;
}

.lesson-list {
  display: none;
  margin-top: 15px;
  max-height: 300px;
  overflow-y: auto;
}

.lesson-list.active {
  display: block;
  animation: slideDown 0.3s ease-out;
}

.lesson-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  margin: 5px 0;
  background: rgba(255,255,255,0.05);
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.lesson-item:hover {
  background: rgba(255,255,255,0.1);
  transform: translateX(5px);
}

.checkbox {
  width: 18px;
  height: 18px;
  border: 2px solid #60a5fa;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.checkbox.checked {
  background: #60a5fa;
  border-color: #60a5fa;
}

.checkbox.checked::after {
  content: '✓';
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 40px;
}

.stat-card {
  background: linear-gradient(135deg, rgba(96,165,250,0.1) 0%, rgba(167,139,250,0.1) 100%);
  border: 1px solid rgba(96,165,250,0.3);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  animation: fadeIn 0.5s ease-out;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #60a5fa;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.9rem;
  color: #cbd5e1;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 1.8rem;
  }
  
  .courses-grid {
    grid-template-columns: 1fr;
  }
}
`
      folder.file("styles.css", cssContent)

      // Add JavaScript file
      const jsContent = `const coursesData = {
  courses: [
    {
      id: "physics",
      name: "الفيزياء 💡",
      color: "#3b82f6",
      lessons: [
        { id: "p1_1", name: "الباب 1: مفهوم التيار الكهربي وشدة التيار", chapter: 1 },
        { id: "p1_2", name: "الباب 1: فرق الجهد الكهربي والقوة الدافعة الكهربية", chapter: 1 }
      ]
    },
    {
      id: "chemistry",
      name: "الكيمياء 🧪",
      color: "#10b981",
      lessons: [
        { id: "c1_1", name: "الباب 1: موقع العناصر الانتقالية", chapter: 1 }
      ]
    }
  ]
}

let completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '{}')

function init() {
  renderCourses()
  updateStats()
}

function renderCourses() {
  const container = document.getElementById('root')
  container.innerHTML = \`
    <div class="container">
      <div class="header">
        <h1>محقق المنهج الدراسي</h1>
        <p>تابع تقدمك الدراسي بسهولة</p>
      </div>
      <div class="courses-grid">
        \${coursesData.courses.map(course => \`
          <div class="course-card" onclick="toggleCourse(this)">
            <div class="course-title">\${course.name}</div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: \${getProgress(course.id)}%"></div>
            </div>
            <div class="progress-text">\${getCompletedCount(course.id)} / \${course.lessons.length}</div>
            <div class="lesson-list">
              \${course.lessons.map(lesson => \`
                <div class="lesson-item" onclick="toggleLesson('\${lesson.id}', event)">
                  <div class="checkbox \${completedLessons[lesson.id] ? 'checked' : ''}"></div>
                  <span>\${lesson.name}</span>
                </div>
              \`).join('')}
            </div>
          </div>
        \`).join('')}
      </div>
      <div class="stats-container">
        <div class="stat-card">
          <div class="stat-number">\${getTotalLessons()}</div>
          <div class="stat-label">إجمالي الدروس</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">\${Object.keys(completedLessons).filter(k => completedLessons[k]).length}</div>
          <div class="stat-label">مكتملة</div>
        </div>
      </div>
    </div>
  \`
}

function toggleCourse(element) {
  const list = element.querySelector('.lesson-list')
  list.classList.toggle('active')
  element.classList.toggle('expanded')
}

function toggleLesson(id, event) {
  event.stopPropagation()
  completedLessons[id] = !completedLessons[id]
  localStorage.setItem('completedLessons', JSON.stringify(completedLessons))
  renderCourses()
  updateStats()
}

function getProgress(courseId) {
  const course = coursesData.courses.find(c => c.id === courseId)
  if (!course) return 0
  const completed = course.lessons.filter(l => completedLessons[l.id]).length
  return Math.round((completed / course.lessons.length) * 100)
}

function getCompletedCount(courseId) {
  const course = coursesData.courses.find(c => c.id === courseId)
  if (!course) return 0
  return course.lessons.filter(l => completedLessons[l.id]).length
}

function getTotalLessons() {
  return coursesData.courses.reduce((sum, c) => sum + c.lessons.length, 0)
}

function updateStats() {
  // Update stats in real-time
}

init()
`
      folder.file("app.js", jsContent)

      // Generate ZIP and download
      const blob = await zip.generateAsync({ type: "blob" })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "curriculum-tracker.zip"
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error("Download error:", error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 rounded-lg border border-green-400/50 text-green-300 transition-all duration-300 disabled:opacity-50"
    >
      <Download size={18} />
      <span>{isDownloading ? "جاري التحميل..." : "تحميل كـ HTML/CSS/JS"}</span>
    </button>
  )
}
