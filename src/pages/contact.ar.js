import React, { useState } from "react"
import Layout from "../components/Layout.ar"
import * as styles from "../styles/contact.module.css"

export default function Contact() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
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
      <section className={styles.contact}>
        <form
          onSubmit={handleSubmit}
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="firstName" className={styles.labelName}>
            الاسم الأول
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={handleChange}
            value={formState.firstName}
            placeholder="أدخل اسمك الأول"
            className={styles.inputName}
          />
          <label htmlFor="lastName" className={styles.labelName}>
            الكنية
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={handleChange}
            value={formState.lastName}
            placeholder="أدخل اسمك الأخير"
            className={styles.inputName}
          />
          <label htmlFor="email">البريد إلكتروني</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={formState.email}
            placeholder="أدخل بريدك الإلكتروني"
          />
          <label htmlFor="message">الرسالة</label>
          <input
            id="message"
            name="message"
            type="text"
            onChange={handleChange}
            value={formState.message}
            placeholder="أدخل رسالتك"
            className={styles.message}
          />
          <button type="submit">إرسال</button>
        </form>
      </section>
    </Layout>
  )
}
