import { Routes, Route } from "react-router-dom"
import Resume from "./pages/resume"

const App = () => {
  return (
    <Routes>
      <Route path="resume/*" element={<Resume />} />
      <Route path="resume/*" element={<Resume />} />
    </Routes>
  )
}

export default App
