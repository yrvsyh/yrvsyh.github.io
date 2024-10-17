import { useLayoutEffect } from "react"
import Header from "./header"
import { Education, Project, Summary, Work } from "./section"

const Container = ({ children }) => {
  return <div className="h-full flex flex-col justify-between p-16 gap-4">{children}</div>
}

const Lby = () => {
  useLayoutEffect(() => {
    document.title = "简历_刘白杨_外贸业务员_15502708455"
  }, [])

  return (
    <Container>
      <Header />
      <Education />
      <Work />
      <Project />
      <Summary />
    </Container>
  )
}

export default Lby
