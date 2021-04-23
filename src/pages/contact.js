import React, { useState } from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/contact.module.css"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  })

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.formState }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  return (
    <Layout>
      <div className={styles.contact}>
        <form
          onSubmit={handleSubmit}
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={formState.name}
            placeholder="Enter your name"
          />
          <label htmlFor="email">Name</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={formState.email}
            placeholder="Enter your email"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  )
}
