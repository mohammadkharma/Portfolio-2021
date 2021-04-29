import React from "react"
import Layout from "../components/Layout.de"
import resume from "../pdf/Lebenslauf_2021-min.pdf"
import coverletter from "../pdf/coverletter-min.pdf"
import sky from "../pdf/SkyAcademy-min.pdf"
import petra from "../pdf/Lebanese-Petra-min.pdf"
import icc from "../pdf/Integrated-Imunology-Clinic-min.pdf"
import certificate from "../pdf/Kharma_Mohammad_Zertifikat-min.pdf"
import b1 from "../pdf/B1-min.pdf"
import * as styles from "../styles/about.module.css"

export default function References() {
  return (
    <Layout>
      <div className={styles.references}>
        <section className={styles.referencesItem}>
          <h2>Lebenslauf & Anschreiben</h2>
          <div className={styles.referencesItemContent}>
            <div>
              <embed download src={resume} type="application/pdf"></embed>
              <a href={resume} target="_blank" rel="noreferrer">
                Lebenslauf
                <span>extern öffnen ↗</span>
              </a>
            </div>
            <div>
              <embed download src={coverletter} type="application/pdf"></embed>
              <a href={coverletter} target="_blank" rel="noreferrer">
                General Anschreiben
                <span>extern öffnen ↗</span>
              </a>
            </div>
          </div>
        </section>
        <section className={styles.referencesItem}>
          <h2>Jobreferenzen</h2>
          <div className={styles.referencesItemContent}>
            <div>
              <embed download src={sky} type="application/pdf"></embed>
              <a href={sky} target="_blank" rel="noreferrer">
                Praktikum - Webentwicklung
                <span>extern öffnen ↗</span>
              </a>
            </div>
            <div>
              <embed download src={petra} type="application/pdf"></embed>
              <a href={petra} target="_blank" rel="noreferrer">
                Verkaufsleiter
                <span>extern öffnen ↗</span>
              </a>
            </div>
            <div>
              <embed download src={icc} type="application/pdf"></embed>
              <a href={icc} target="_blank" rel="noreferrer">
                Assistent
                <span>extern öffnen ↗</span>
              </a>
            </div>
          </div>
        </section>
        <section className={styles.referencesItem}>
          <h2>Zertifikate</h2>
          <div className={styles.referencesItemContent}>
            <div>
              <embed download src={certificate} type="application/pdf"></embed>
              <a href={certificate} target="_blank" rel="noreferrer">
                Weiterbildung - Webentwicklung
                <span>extern öffnen ↗</span>
              </a>
            </div>
            <div>
              <embed download src={b1} type="application/pdf"></embed>
              <a href={b1} target="_blank" rel="noreferrer">
                B1 Level - Deutsche Sprache
                <span>extern öffnen ↗</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
