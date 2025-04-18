import Header from "./header"
import { Education, Project, Skill, Summary, Work } from "./section"

const Container = ({ children }) => {
  return <div className="h-full flex flex-col justify-between p-12 gap-3">{children}</div>
}

const Yzy = () => {
  return (
    <Container>
      <Header />
      <Education />
      <Skill />
      <Work />
      <Project />
      <Summary />
    </Container>
  )
}

export default Yzy
