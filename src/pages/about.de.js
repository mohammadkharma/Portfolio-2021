import React from "react"
import Layout from "../components/Layout.de"
import * as styles from "../styles/about.module.css"
import resume from "../pdf/Lebenslauf_2021.pdf"
import coverletter from "../pdf/coverletter.pdf"
import sky from "../pdf/SkyAcademy.pdf"
import petra from "../pdf/Lebanese-Petra.pdf"
import icc from "../pdf/Integrated-Imunology-Clinic.pdf"
import certificate from "../pdf/Kharma_Mohammad_Zertifikat.pdf"
import b1 from "../pdf/B1.pdf"

export default function About() {
  return (
    <Layout>
      <div className={styles.about}>
        <section className={styles.aboutMe} id="aboutMe">
          <h2>Lernen wir uns kennen!</h2>
          <div className={styles.aboutMeItem}>
            <h3>Ich - Allgemeinh</h3>
            <div className={styles.aboutContent}>
              <div className={styles.arrows}></div>
              <p>
                Im ersten Karriereweg ging es in meinem Leben speziell um Sport,
                Basketball. Als Spieler, Trainer und Lehrer habe ich meine
                verantwortungsbewusste, flexible und reife Persönlichkeit
                aufgebaut. In einem solchen Bereich konnte ich mit verschiedenen
                Menschen unterschiedlichen Alters arbeiten und Erfahrungen in
                der Arbeit unter Zeitdruck und unter schwierigeren Umständen
                sammeln. Danach und wegen einer Verletzung überquerte ich die
                Brücke vom Sport in die Geschäftswelt und arbeitete als
                Verkaufsleiter und Managementassistent, bis das Schicksal
                wollte, dass ich mein Heimatland verlasse und meine Karriere
                ändere. Und hier bin ich heute und lebe einen neuen Traum als
                Webentwickler in Berlin.
                <span>
                  „Du verfehlst 100 % der Torschüsse, die du nicht machst“
                  <br />
                  Wayne Gretzky
                </span>
              </p>
            </div>
          </div>
          <div className={styles.aboutMeItem}>
            <h3>Das aktuelle Ich</h3>
            <div className={styles.aboutContent}>
              <div className={styles.arrows}></div>
              <p>
                Ein schnell lernender Webentwickler, der sich für sauberen Code
                und herausfordernde Problemlösungen begeistert. Immer auf dem
                neuesten Stand mit neuen Technologien und auf der Suche nach
                modernen und klaren Designs. Hauptsächlich arrbeitet im
                Front-End-Bereich, um außergewöhnliche Produkte für Kunden zu
                liefern.
                <span>
                  „Perfektion ist nicht erreichbar, aber wenn wir Perfektion
                  verfolgen, können wir Spitzenleistungen erzielen“
                  <br />
                  Vince Lombardi
                </span>
              </p>
            </div>
          </div>
          <div className={styles.aboutMeItem}>
            <h3>Das Zukunft- Ich</h3>
            <div className={styles.aboutContent}>
              <div className={styles.arrows}></div>
              <p>
                Auf professioneller Ebene ist es wichtig, eine ehrgeizige Person
                zu sein. Ehrgeiz führt nicht nur dazu, dass die Menschen härter
                arbeiten, sondern es ist auch viel wahrscheinlicher, dass sie
                sich in dem auszeichnen, was sie in ihrer Arbeit tun. Und wie
                die meisten Menschen möchte ich eine Rolle erhalten, die in
                Zukunft mehr Verantwortung trägt.
                <span>
                  „Der beste Weg, die Zukunft vorherzusagen, besteht darin, sie
                  zu schaffen“
                  <br />
                  Abraham Lincoln
                </span>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.references} id="references">
          <h2>Verweise</h2>
          <div>
            <h3>Lebenslauf & Anschreiben</h3>
            <div className={styles.referencesContent}>
              <div>
                <p>Lebenslauf</p>
                <embed download src={resume} type="application/pdf"></embed>
                <a href={resume} target="_blank" rel="noreferrer">
                  extern öffnen ↗
                </a>
              </div>
              <div>
                <p>General Anschreiben</p>
                <embed
                  download
                  src={coverletter}
                  type="application/pdf"
                ></embed>
                <a href={coverletter} target="_blank" rel="noreferrer">
                  extern öffnen ↗
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3>Jobreferenzen</h3>
            <div className={styles.referencesContent}>
              <div>
                <p>Praktikum - Webentwicklung</p>
                <embed download src={sky} type="application/pdf"></embed>
                <a href={sky} target="_blank" rel="noreferrer">
                  extern öffnen ↗
                </a>
              </div>
              <div>
                <p>Verkaufsleiter</p>
                <embed download src={petra} type="application/pdf"></embed>
                <a href={petra} target="_blank" rel="noreferrer">
                  extern öffnen ↗
                </a>
              </div>
              <div>
                <p>Assistent</p>
                <embed download src={icc} type="application/pdf"></embed>
                <a href={icc} target="_blank" rel="noreferrer">
                  extern öffnen ↗
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3>Zertifikate</h3>
            <div className={styles.referencesContent}>
              <div>
                <p>Weiterbildung - Webentwicklung</p>
                <embed
                  download
                  src={certificate}
                  type="application/pdf"
                ></embed>
                <a href={certificate} target="_blank" rel="noreferrer">
                  extern öffnen ↗
                </a>
              </div>
              <div>
                <p>B1 Level - Deutsche Sprache</p>
                <embed download src={b1} type="application/pdf"></embed>
                <a href={b1} target="_blank" rel="noreferrer">
                  extern öffnen ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.skillsHobbies} id="skillsHobbies">
          <h2>Fähigkeiten & Hobbys</h2>
          <p>
            In der neuen Tech-Welt ist es gut, über digitale Fähigkeiten zu
            verfügen. Ich habe meine in MS Office, Photoshop und Video Edit
            verbessert. Bei den Hobbys steht Basketball an erster Stelle,
            gefolgt von Tischtennis, Lesen und Spielen digitaler Spiele.
          </p>
        </section>
      </div>
    </Layout>
  )
}
