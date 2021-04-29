import React from "react"
import Tilt from "react-vanilla-tilt"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import * as styles from "../styles/about.module.css"

export default function About() {
  return (
    <Layout>
      <div className={styles.about}>
        <h1>Let us get to know each other!</h1>
        <div className={styles.aboutMe}>
          <Tilt className={styles.tilt}>
            <section className={styles.aboutMeItem}>
              <StaticImage
                src="../images/basketball-min.jpg"
                alt="Basketball Kharma"
                placeholder="blurred"
                className={styles.img}
              />
              <div className={styles.aboutMeItemContent}>
                <h2>General Me</h2>
                <p>
                  As the first career path, my life was about Sports, Basketball
                  specifically. Being a player, a coach, and a teacher has
                  helped me out building my flexible, responsible, and mature
                  personality. In such a field, you get to work with different
                  people of different ages and you gain experience in working
                  under time pressure and harder circumstances. After that, I
                  worked as a Sales Manager / Assistant, till I left my home
                  country and change my career. And here I am today, living a
                  new dream as a Web Developer based in Berlin.
                </p>
                <br />
                <span>
                  "You miss 100 percent of the shots you never take."
                  <br />
                  Wayne Gretzky
                </span>
              </div>
            </section>
          </Tilt>
          <Tilt className={styles.tilt}>
            <section className={styles.aboutMeItem}>
              <StaticImage
                src="../images/Mohammad-Kharma-min.jpg"
                alt="Mohammad Kharma"
                placeholder="blurred"
                className={styles.img}
              />
              <div className={styles.aboutMeItemContent}>
                <h2>Current Me</h2>
                <p>
                  A fast-learning web developer who is passionate about clean
                  code and challenging problem-solving. Always up to date with
                  new technologies and looking for modern and clear designs.
                  Mainly working across the front-end to deliver exceptional
                  customer-facing products.
                </p>
                <br />
                <span>
                  “Perfection is not attainable, but if we chase perfection we
                  can catch excellence.”
                  <br />
                  Vince Lombardi
                </span>
              </div>
            </section>
          </Tilt>
          <Tilt className={styles.tilt}>
            <section className={styles.aboutMeItem}>
              <StaticImage
                src="../images/suit-min.jpg"
                alt="suit"
                placeholder="blurred"
                className={styles.img}
              />
              <div className={styles.aboutMeItemContent}>
                <h2>Tomorrow Me</h2>
                <p>
                  It is important on a professional level to be an ambitious
                  person. Having ambition not only makes people work harder but
                  makes them a lot more likely to excel at what they do in their
                  job. And like most people, I would like to obtain a role that
                  has more responsibility in the future.
                </p>
                <br />
                <span>
                  "The best way to predict the future is to create it."
                  <br />
                  Abraham Lincoln
                </span>
              </div>
            </section>
          </Tilt>
        </div>
      </div>
    </Layout>
  )
}
