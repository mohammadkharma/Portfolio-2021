import React from "react"
import Navbar from "../components/Navbar"

export default function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <div className="content"></div>
      <footer>
        <p>Copyright 2021 Mohammad Kharma</p>
      </footer>
    </div>
  )
}
