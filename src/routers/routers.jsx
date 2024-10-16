import { Routes, Route } from "react-router"
import Resume from "./resume/resume"

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <div>Home</div>
      <div>
        Homeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
      </div>
    </div>
  )
}

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume/*" element={<Resume />} />
    </Routes>
  )
}

export default Index
