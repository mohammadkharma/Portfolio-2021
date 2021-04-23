import React from "react"
import Layout from "../components/Layout.ar"
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
          <h2>!دعنا نتعرف علي بعض</h2>
          <div className={styles.aboutMeItem}>
            <h3>عني بشكل عام</h3>
            <div className={styles.aboutContent}>
              <div className={styles.arrows}></div>
              <p>
                كان المسار المهني الأول في حياتي يتعلق بالرياضة وكرة السلة على
                وجه التحديد. كلاعب ومدرب ومدرس ، قمت ببناء شخصيتي المرنة
                والمسؤولة والناضجة. في مثل هذا المجال ، يمكنك العمل مع أشخاص
                مختلفين من مختلف الأعمار واكتساب الخبرة في العمل تحت ضغط الوقت
                وفي ظل ظروف أكثر صعوبة. بعد ذلك وبسبب الإصابة ، عبرت الجسر من
                الرياضة إلى العمل وعملت كمدير مبيعات / مساعد مدير حتى أرادني
                القدر أن أترك بلدي الأم وأن أغير مسيرتي المهنية. وها أنا اليوم ،
                أعيش حلمًا جديدًا كمطور ويب في برلين.
                <span>
                  "أنت تفقد مئة بالمائة من اللقطات التي لم تلتقطها أبدًا"
                  <br />
                  واين جريتسكي
                </span>
              </p>
            </div>
          </div>
          <div className={styles.aboutMeItem}>
            <h3>عني اليوم</h3>
            <div className={styles.aboutContent}>
              <div className={styles.arrows}></div>
              <p>
                مطور ويب سريع التعلم ومتحمس للتعليمات البرمجية النظيفة وحل
                المشكلات الصعبة. مواكبة دائمًا للتقنيات الجديدة وتبحث عن تصاميم
                حديثة وواضحة. ادمج هذا مع راحة العمل عبر الواجهة الأمامية لتقديم
                منتجات استثنائية للعملاء.
                <span>
                  "الكمال لا يمكن تحقيقه ، ولكن إذا سعينا إلى الكمال ، يمكننا
                  تحقيق التميز"
                  <br />
                  فينس لومباردي
                </span>
              </p>
            </div>
          </div>
          <div className={styles.aboutMeItem}>
            <h3>عني غدا</h3>
            <div className={styles.aboutContent}>
              <div className={styles.arrows}></div>
              <p>
                على المستوى المهني ، من المهم أن تكون شخصًا طموحًا. لا يقتصر دور
                الطموح على جعل الناس يعملون بجد أكثر ، ولكن من المرجح أيضًا أن
                يتفوقوا في ما يقومون به في وظائفهم. ومثل معظم الناس ، أريد أن
                أحصل على دور يتحمل مسؤولية أكبر في المستقبل.
                <span>
                  "أفضل طريقة للتنبؤ بالمستقبل هي إنشائه"
                  <br />
                  ابراهام لنكون
                </span>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.references} id="references">
          <h2>مراجع</h2>
          <div>
            <h3>السيرة الذاتية وخطاب التغطية</h3>
            <div className={styles.referencesContent}>
              <div>
                <p>السيرة الذاتية</p>
                <embed download src={resume} type="application/pdf"></embed>
                <a href={resume} target="_blank" rel="noreferrer">
                  افتح خارجيا ↗
                </a>
              </div>
              <div>
                <p>خطاب تغطية عام</p>
                <embed
                  download
                  src={coverletter}
                  type="application/pdf"
                ></embed>
                <a href={coverletter} target="_blank" rel="noreferrer">
                  افتح خارجيا ↗
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3>مراجع الوظائف</h3>
            <div className={styles.referencesContent}>
              <div>
                <p>تدريب - تطوير الويب</p>
                <embed download src={sky} type="application/pdf"></embed>
                <a href={sky} target="_blank" rel="noreferrer">
                  افتح خارجيا ↗
                </a>
              </div>
              <div>
                <p>مدير المبيعات</p>
                <embed download src={petra} type="application/pdf"></embed>
                <a href={petra} target="_blank" rel="noreferrer">
                  افتح خارجيا ↗
                </a>
              </div>
              <div>
                <p>مساعد</p>
                <embed download src={icc} type="application/pdf"></embed>
                <a href={icc} target="_blank" rel="noreferrer">
                  افتح خارجيا ↗
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3>الشهادات</h3>
            <div className={styles.referencesContent}>
              <div>
                <p>التعليم المستمر - تطوير الويب</p>
                <embed
                  download
                  src={certificate}
                  type="application/pdf"
                ></embed>
                <a href={certificate} target="_blank" rel="noreferrer">
                  افتح خارجيا ↗
                </a>
              </div>
              <div>
                <p>مستوى ب١ - لغة ألمانية</p>
                <embed download src={b1} type="application/pdf"></embed>
                <a href={b1} target="_blank" rel="noreferrer">
                  افتح خارجيا ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.skillsHobbies} id="skillsHobbies">
          <h2>المهارات والهوايات</h2>
          <p>
            في عالم التكنولوجيا الجديد ، من الجيد أن تكون لديك مهارات رقمية. لقد
            قمت بتحسين خاصتي في ال ام اس اوفس و الفوتوشوب وتحرير الفيديو. عندما
            يتعلق الأمر بالهوايات ، تأتي كرة السلة أولاً ، تليها تنس الطاولة
            والقراءة وممارسة الألعاب الرقمية
          </p>
        </section>
      </div>
    </Layout>
  )
}
