import React from "react"
import Layout from "../components/Layout"
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
          <h2>Resume & Coverletter</h2>
          <div className={styles.referencesItemContent}>
            <div>
              <embed download src={resume} type="application/pdf"></embed>
              <a href={resume} target="_blank" rel="noreferrer">
                Resume: <span>open external ↗</span>
              </a>
            </div>
            <div>
              <embed download src={coverletter} type="application/pdf"></embed>
              <a href={coverletter} target="_blank" rel="noreferrer">
                Coneverletter: <span>open external ↗</span>
              </a>
            </div>
          </div>
        </section>
        <section className={styles.referencesItem}>
          <h2>Jobs references</h2>
          <div className={styles.referencesItemContent}>
            <div>
              <embed download src={sky} type="application/pdf"></embed>
              <a href={sky} target="_blank" rel="noreferrer">
                Internship - Web Development: <span>open external ↗</span>
              </a>
            </div>
            <div>
              <embed download src={petra} type="application/pdf"></embed>
              <a href={petra} target="_blank" rel="noreferrer">
                Sales Manager: <span>open external ↗</span>
              </a>
            </div>
            <div>
              <embed download src={icc} type="application/pdf"></embed>
              <a href={icc} target="_blank" rel="noreferrer">
                Assistant: <span>open external ↗</span>
              </a>
            </div>
          </div>
        </section>
        <section className={styles.referencesItem}>
          <h2>Certificates</h2>
          <div className={styles.referencesItemContent}>
            <div>
              <embed download src={certificate} type="application/pdf"></embed>
              <a href={certificate} target="_blank" rel="noreferrer">
                Further Education - Web Development:{" "}
                <span>open external ↗</span>
              </a>
            </div>
            <div>
              <embed download src={b1} type="application/pdf"></embed>
              <p>B1 Level - German Language</p>
              <a href={b1} target="_blank" rel="noreferrer">
                B1 Level - German Language: <span>open external ↗</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
