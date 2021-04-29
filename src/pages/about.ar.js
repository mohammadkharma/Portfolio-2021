import React from "react"
import Tilt from "react-vanilla-tilt"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout.ar"
import * as styles from "../styles/about.module.css"

export default function About() {
  return (
    <Layout>
      <div className={styles.about}>
        <h1>!دعنا نتعرف علي بعض</h1>
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
                <h2>عني بشكل عام</h2>
                <p>
                  كان المسار المهني الأول في حياتي يتعلق بالرياضة وكرة السلة على
                  وجه التحديد. كلاعب ومدرب ومدرس ، قمت ببناء شخصيتي المرنة
                  والمسؤولة والناضجة. في مثل هذا المجال ، يمكنك العمل مع أشخاص
                  مختلفين من مختلف الأعمار واكتساب الخبرة في العمل تحت ضغط الوقت
                  وفي ظل ظروف أكثر صعوبة. بعد ذلك وبسبب الإصابة ، عبرت الجسر من
                  الرياضة إلى العمل وعملت كمدير مبيعات / مساعد مدير حتى أرادني
                  القدر أن أترك بلدي الأم وأن أغير مسيرتي المهنية. وها أنا اليوم
                  ، أعيش حلمًا جديدًا كمطور ويب في برلين.
                </p>
                <br />
                <br />
                <span>
                  "أنت تفقد مئة بالمائة من اللقطات التي لم تلتقطها أبدًا"
                  <br />
                  واين جريتسكي
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
                <h2>عني اليوم</h2>
                <p>
                  مطور ويب سريع التعلم ومتحمس للتعليمات البرمجية النظيفة وحل
                  المشكلات الصعبة. مواكبة دائمًا للتقنيات الجديدة وتبحث عن
                  تصاميم حديثة وواضحة. ادمج هذا مع راحة العمل عبر الواجهة
                  الأمامية لتقديم منتجات استثنائية للعملاء.
                </p>
                <br />
                <br />
                <span>
                  "الكمال لا يمكن تحقيقه ، ولكن إذا سعينا إلى الكمال ، يمكننا
                  تحقيق التميز"
                  <br />
                  فينس لومباردي
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
                <h2>عني غدا</h2>
                <p>
                  على المستوى المهني ، من المهم أن تكون شخصًا طموحًا. لا يقتصر
                  دور الطموح على جعل الناس يعملون بجد أكثر ، ولكن من المرجح
                  أيضًا أن يتفوقوا في ما يقومون به في وظائفهم. ومثل معظم الناس ،
                  أريد أن أحصل على دور يتحمل مسؤولية أكبر في المستقبل.
                </p>
                <br />
                <br />
                <span>
                  "أفضل طريقة للتنبؤ بالمستقبل هي إنشائه"
                  <br />
                  ابراهام لنكون
                </span>
              </div>
            </section>
          </Tilt>
        </div>
      </div>
    </Layout>
  )
}
