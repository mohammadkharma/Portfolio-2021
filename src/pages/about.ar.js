import React from "react"
import Layout from "../components/Layout.ar"
import * as styles from "../styles/about.module.css"
// import resume from "../pdf/Lebenslauf_2021.pdf"
// import coverletter from "../pdf/coverletter.pdf"
// import sky from "../pdf/SkyAcademy.pdf"
// import petra from "../pdf/Lebanese-Petra.pdf"
// import icc from "../pdf/Integrated-Imunology-Clinic.pdf"
// import certificate from "../pdf/Kharma_Mohammad_Zertifikat.pdf"
// import b1 from "../pdf/B1.pdf"

export default function About() {
  return (
    <Layout>
      <div className={styles.about}>
        <h1>!دعنا نتعرف علي بعض</h1>
        <div className={styles.aboutMe}>
          <section className={styles.aboutMeItem}>
            <h2>عني بشكل عام</h2>
            <p>
              كان المسار المهني الأول في حياتي يتعلق بالرياضة وكرة السلة على وجه
              التحديد. كلاعب ومدرب ومدرس ، قمت ببناء شخصيتي المرنة والمسؤولة
              والناضجة. في مثل هذا المجال ، يمكنك العمل مع أشخاص مختلفين من
              مختلف الأعمار واكتساب الخبرة في العمل تحت ضغط الوقت وفي ظل ظروف
              أكثر صعوبة. بعد ذلك وبسبب الإصابة ، عبرت الجسر من الرياضة إلى
              العمل وعملت كمدير مبيعات / مساعد مدير حتى أرادني القدر أن أترك
              بلدي الأم وأن أغير مسيرتي المهنية. وها أنا اليوم ، أعيش حلمًا
              جديدًا كمطور ويب في برلين.
            </p>
            <span>
              "أنت تفقد مئة بالمائة من اللقطات التي لم تلتقطها أبدًا"
              <br />
              <br />
              واين جريتسكي
            </span>
          </section>
          <section className={styles.aboutMeItem}>
            <h2>عني اليوم</h2>
            <p>
              مطور ويب سريع التعلم ومتحمس للتعليمات البرمجية النظيفة وحل
              المشكلات الصعبة. مواكبة دائمًا للتقنيات الجديدة وتبحث عن تصاميم
              حديثة وواضحة. ادمج هذا مع راحة العمل عبر الواجهة الأمامية لتقديم
              منتجات استثنائية للعملاء.
            </p>
            <span>
              "الكمال لا يمكن تحقيقه ، ولكن إذا سعينا إلى الكمال ، يمكننا تحقيق
              التميز"
              <br />
              <br />
              فينس لومباردي
            </span>
          </section>
          <section className={styles.aboutMeItem}>
            <h2>عني غدا</h2>
            <p>
              على المستوى المهني ، من المهم أن تكون شخصًا طموحًا. لا يقتصر دور
              الطموح على جعل الناس يعملون بجد أكثر ، ولكن من المرجح أيضًا أن
              يتفوقوا في ما يقومون به في وظائفهم. ومثل معظم الناس ، أريد أن أحصل
              على دور يتحمل مسؤولية أكبر في المستقبل.
            </p>
            <span>
              "أفضل طريقة للتنبؤ بالمستقبل هي إنشائه"
              <br />
              <br />
              ابراهام لنكون
            </span>
          </section>
        </div>

        {/* <section className={styles.referencesItem}>
          <h2>السيرة الذاتية وخطاب التغطية</h2>
          <div className={styles.referencesItemContent}>
            <div>
              <p>السيرة الذاتية</p>
              <embed download src={resume} type="application/pdf"></embed>
              <a href={resume} target="_blank" rel="noreferrer">
                افتح خارجيا ↗
              </a>
            </div>
            <div>
              <p>خطاب تغطية عام</p>
              <embed download src={coverletter} type="application/pdf"></embed>
              <a href={coverletter} target="_blank" rel="noreferrer">
                افتح خارجيا ↗
              </a>
            </div>
          </div>
        </section>
        <section className={styles.referencesItem}>
          <h2>مراجع الوظائف</h2>
          <div className={styles.referencesItemContent}>
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
        </section>
        <section className={styles.referencesItem}>
          <h2>الشهادات</h2>
          <div className={styles.referencesItemContent}>
            <div>
              <p>التعليم المستمر - تطوير الويب</p>
              <embed download src={certificate} type="application/pdf"></embed>
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
        </section>

         <section className={styles.referencesItem}>
        <section className={styles.skillsHobbies} id="skillsHobbies">
          <h1>المهارات والهوايات</h1>
          <p>
            في عالم التكنولوجيا الجديد ، من الجيد أن تكون لديك مهارات رقمية. لقد
            قمت بتحسين خاصتي في ال ام اس اوفس و الفوتوشوب وتحرير الفيديو. عندما
            يتعلق الأمر بالهوايات ، تأتي كرة السلة أولاً ، تليها تنس الطاولة
            والقراءة وممارسة الألعاب الرقمية
          </p>
        </section> */}
      </div>
    </Layout>
  )
}
