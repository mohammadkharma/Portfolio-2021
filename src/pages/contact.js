import React, { useState } from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/contact.module.css"
import { FaXing } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

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
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={handleChange}
            value={formState.firstName}
            placeholder="Enter your first name"
            className={styles.inputName}
          />
          <label htmlFor="lastName" className={styles.labelName}>
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={handleChange}
            value={formState.lastName}
            placeholder="Enter your last name"
            className={styles.inputName}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={formState.email}
            placeholder="Enter your email"
          />
          <label htmlFor="message">Message</label>
          <input
            id="message"
            name="message"
            type="text"
            onChange={handleChange}
            value={formState.message}
            placeholder="Enter your message"
            className={styles.message}
          />
          <button type="submit">Submit</button>
        </form>
        <div className={styles.iconsContainer}>
          <button>
            <a href="https://github.com/mohammadkharma">
              <FaGithub className={styles.img} />
              {/* <img src={GH} alt="Github" /> */}
            </a>
          </button>
          <button>
            <a href="https://www.linkedin.com/in/mohammad-kharma-95606ba9/">
              <FaLinkedin className={styles.img} />
              {/* <img src={LI} alt="LinkedIn" /> */}
            </a>
          </button>
          <button>
            <a href="https://www.xing.com/profile/Mohammad_Kharma2">
              <FaXing className={styles.img} />
              {/* <img src={XG} alt="Xing" /> */}
            </a>
          </button>
        </div>
        <div className={styles.iconsContainerDark}>
          <button>
            <a href="https://github.com/mohammadkharma">
              <FaGithub className={styles.img} />
            </a>
          </button>
          <button>
            <a href="https://www.linkedin.com/in/mohammad-kharma-95606ba9/">
              <FaLinkedin className={styles.img} />
            </a>
          </button>
          <button>
            <a href="https://www.xing.com/profile/Mohammad_Kharma2">
              <FaXing className={styles.img} />
            </a>
          </button>
        </div>
      </section>
    </Layout>
  )
}
