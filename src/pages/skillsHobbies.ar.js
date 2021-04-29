import React from "react"
import Layout from "../components/Layout.ar"
import * as styles from "../styles/about.module.css"

export default function SkillsHobbies() {
  return (
    <Layout>
      <div className={styles.skillsHobbies}>
        <h2>المهارات والهوايات</h2>
        <div className={styles.skillsHobbiesContent}>
          <section className={styles.skills}>
            <p>
              Iفي عالم التكنولوجيا الجديد ، من الجيد امتلاك بعض المهارات
              الرقمية. لقد حسنت مهاراتي في <b>MS Office</b>, <b>Photoshop</b>,{" "}
              <b>Video Edit</b> و <b>لغات وتقنيات البرمجة التالية</b>:
            </p>
            <ul>
              <li>Javascript</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>React</li>
              <li>Gastyb</li>
            </ul>
          </section>
          <section className={styles.hobbies}>
            <p>
              بالنسبة للهوايات ، <b>كرة سلة</b> يأتي أولاً ، يليه:
            </p>
            <ul>
              <li>قراءة</li>
              <li>تعلم لغات أخرى</li>
              <li>تنس طاولة</li>
              <li>لعب الألعاب الرقمية</li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  )
}
