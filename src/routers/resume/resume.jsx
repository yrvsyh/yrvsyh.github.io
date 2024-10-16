import { Routes, Route, Outlet } from "react-router"
import Yzy from "./yzy"
import styled from "styled-components"
import { FloatButton } from "antd"

const Paper = styled.div`
  width: 794px;
  height: 1123px;
  padding: 0;
  overflow: hidden;
`

const Layout = () => {
  return (
    <div className="relative flex flex-col items-center">
      <Paper>
        <Outlet />
      </Paper>
      <FloatButton />
    </div>
  )
}

const Index = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/yzy" element={<Yzy />} />
      </Route>
    </Routes>
  )
}

export default Index
