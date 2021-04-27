import React from "react"
import Layout from "../components/Layout.ar"
import * as styles from "../styles/about.module.css"

export default function SkillsHobbies() {
  return (
    <Layout>
      <section className={styles.skillsHobbies} id="skillsHobbies">
        <h2>المهارات والهوايات</h2>
        <p>
          في عالم التكنولوجيا الجديد ، من الجيد أن تكون لديك مهارات رقمية. لقد
          قمت بتحسين خاصتي في ال ام اس اوفس و الفوتوشوب وتحرير الفيديو. عندما
          يتعلق الأمر بالهوايات ، تأتي كرة السلة أولاً ، تليها تنس الطاولة
          والقراءة وممارسة الألعاب الرقمية
        </p>
      </section>
    </Layout>
  )
}
