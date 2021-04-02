import { Link } from "gatsby"
import React from "react"

export default function Home() {
  return (
    <nav>
      <h1>Mohammad Kharma</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/timeline">Timeline</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}
