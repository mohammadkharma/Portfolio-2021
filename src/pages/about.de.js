import React from "react"
import Tilt from "react-vanilla-tilt"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout.de"
import * as styles from "../styles/about.module.css"

export default function About() {
  return (
    <Layout>
      <div className={styles.about}>
        <h1>Lernen wir uns kennen!</h1>
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
                <h2>Ich - Allgemeinh</h2>
                <p>
                  Im ersten Karriereweg ging es in meinem Leben speziell um
                  Sport, Basketball. Als Spieler, Trainer und Lehrer habe ich
                  meine verantwortungsbewusste, flexible und reife
                  Persönlichkeit aufgebaut. In einem solchen Bereich konnte ich
                  mit verschiedenen Menschen unterschiedlichen Alters arbeiten
                  und Erfahrungen in der Arbeit unter Zeitdruck und unter
                  schwierigeren Umständen sammeln. Danach und wegen einer
                  Verletzung überquerte ich die Brücke vom Sport in die
                  Geschäftswelt und arbeitete als Verkaufsleiter und
                  Managementassistent, bis das Schicksal wollte, dass ich mein
                  Heimatland verlasse und meine Karriere ändere. Und hier bin
                  ich heute und lebe einen neuen Traum als Webentwickler in
                  Berlin.
                </p>
                <br />
                <br />
                <span>
                  „Du verfehlst 100 % der Torschüsse, die du nicht machst“
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
                <h2>Das aktuelle Ich</h2>
                <p>
                  Ein schnell lernender Webentwickler, der sich für sauberen
                  Code und herausfordernde Problemlösungen begeistert. Immer auf
                  dem neuesten Stand mit neuen Technologien und auf der Suche
                  nach modernen und klaren Designs. Hauptsächlich arrbeitet im
                  Front-End-Bereich, um außergewöhnliche Produkte für Kunden zu
                  liefern.
                </p>
                <br />
                <br />
                <span>
                  „Perfektion ist nicht erreichbar, aber wenn wir Perfektion
                  verfolgen, können wir Spitzenleistungen erzielen“
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
                <h2>Das Zukunft- Ich</h2>
                <p>
                  Auf professioneller Ebene ist es wichtig, eine ehrgeizige
                  Person zu sein. Ehrgeiz führt nicht nur dazu, dass die
                  Menschen härter arbeiten, sondern es ist auch viel
                  wahrscheinlicher, dass sie sich in dem auszeichnen, was sie in
                  ihrer Arbeit tun. Und wie die meisten Menschen möchte ich eine
                  Rolle erhalten, die in Zukunft mehr Verantwortung trägt.
                </p>
                <br />
                <br />
                <span>
                  „Der beste Weg, die Zukunft vorherzusagen, besteht darin, sie
                  zu schaffen“
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
