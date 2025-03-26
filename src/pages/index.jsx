import "./github-markdown-light.css"
import Markdown from "react-markdown"
import md from "../assets/markdown/home.md?raw"

const Home = () => {
  return (
    <div className="markdown-body">
      <Markdown>{md}</Markdown>
    </div>
  )
}

export default Home
