import { Routes, Route } from "react-router-dom"
import Resume from "./pages/resume"
import Home from "./pages"

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="resume/*" element={<Resume />} />
      <Route path="resume/*" element={<Resume />} />
    </Routes>
  )
}

export default App
