import { Routes, Route, Outlet, Navigate } from "react-router"
import Yzy from "./yzy"
import { useLayoutEffect } from "react"
import Lby from "./lby"

const Index = () => {
  useLayoutEffect(() => {
    document.querySelector("body").classList.add("a4")

    return () => {
      document.querySelector("body").classList.remove("a4")
    }
  }, [])

  return (
    <Routes>
      <Route index element={<Navigate to="yzy" replace />} />
      <Route path="yzy" element={<Yzy />} />
      <Route path="lby" element={<Lby />} />
    </Routes>
  )
}

export default Index
