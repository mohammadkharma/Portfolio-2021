import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/about.module.css"
import resume from "../pdf/Lebenslauf_2021.pdf"
import coverletter from "../pdf/coverletter.pdf"
import sky from "../pdf/SkyAcademy.pdf"
import petra from "../pdf/Lebanese-Petra.pdf"
import icc from "../pdf/Integrated-Imunology-Clinic.pdf"
import certificate from "../pdf/Kharma_Mohammad_Zertifikat.pdf"
import b1 from "../pdf/B1.pdf"

export default function References() {
  return (
    <Layout>
      <div className={styles.references}>
        <section className={styles.referencesItem}>
          <h2>Resume & Coverletter</h2>
          <div className={styles.referencesItemContent}>
            <div>
              <p>Resume</p>
              <embed download src={resume} type="application/pdf"></embed>
              <a href={resume} target="_blank" rel="noreferrer">
                open external ↗
              </a>
            </div>
            <div>
              <p>General Coneverletter</p>
              <embed download src={coverletter} type="application/pdf"></embed>
              <a href={coverletter} target="_blank" rel="noreferrer">
                open external ↗
              </a>
            </div>
          </div>
        </section>
        <section className={styles.referencesItem}>
          <h2>Jobs references</h2>
          <div className={styles.referencesItemContent}>
            <div>
              <p>Internship - Web Development</p>
              <embed download src={sky} type="application/pdf"></embed>
              <a href={sky} target="_blank" rel="noreferrer">
                open external ↗
              </a>
            </div>
            <div>
              <p>Sales Manager</p>
              <embed download src={petra} type="application/pdf"></embed>
              <a href={petra} target="_blank" rel="noreferrer">
                open external ↗
              </a>
            </div>
            <div>
              <p>Assistant</p>
              <embed download src={icc} type="application/pdf"></embed>
              <a href={icc} target="_blank" rel="noreferrer">
                open external ↗
              </a>
            </div>
          </div>
        </section>
        <section className={styles.referencesItem}>
          <h2>Certificates</h2>
          <div className={styles.referencesItemContent}>
            <div>
              <p>Further Education - Web Development</p>
              <embed download src={certificate} type="application/pdf"></embed>
              <a href={certificate} target="_blank" rel="noreferrer">
                open external ↗
              </a>
            </div>
            <div>
              <p>B1 Level - German Language</p>
              <embed download src={b1} type="application/pdf"></embed>
              <a href={b1} target="_blank" rel="noreferrer">
                open external ↗
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}