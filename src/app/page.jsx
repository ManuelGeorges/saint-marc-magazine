import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.meshGradient}></div>
        <div className={styles.heroContent}>
          <div className={styles.topBadge}>الإصدار الرقمي الأول 2026</div>
          <h1 className={styles.title}>
            منصة <span className={styles.goldText}>الريادة</span> <br />
            بصمة طالب.. فكر جيل
          </h1>
          <p className={styles.description}>
            أهلاً بكم في المساحة الحرة لطلاب مدرسة سان مارك العريقة. هنا نوثق الماضي، ونعيش الحاضر، ونرسم معالم المستقبل بأقلامنا وعدساتنا.
          </p>
          <div className={styles.btnGroup}>
            <Link href="/academic" className={styles.mainBtn}>ابدأ القراءة</Link>
            <Link href="/contact" className={styles.outlineBtn}>احجز نسختك المطبوعة</Link>
          </div>
        </div>
      </header>

      <section className={styles.storySection}>
        <div className={styles.storyContent}>
          <div className={styles.textContent}>
            <span className={styles.sectionLabel}>عن المنصة</span>
            <h2>لماذا أطلقنا "الريادة"؟</h2>
            <p>
              لم تكن "الريادة" مجرد فكرة لمجلة مدرسية تقليدية، بل ولدت كضرورة ليكون لطلاب "سان مارك" منبرٌ يليق بإبداعاتهم. نحن نؤمن أن داخل كل طالب منا كاتبٌ بارع، أو مصورٌ فنان، أو مبرمجٌ طموح يبحث عن فرصة للظهور.
            </p>
            <p>
              هدفنا هو خلق أرشيف حي لكل الفعاليات، من الملاعب الرياضية إلى المختبرات العلمية، ومن المسرح المدرسي إلى قاعات المحاضرات، لتبقى هذه الذكريات محفورة في ذاكرة الأجيال.
            </p>
            <div className={styles.stats}>
              <div className={styles.statItem}><b>+30</b> <span>مقال</span></div>
              <div className={styles.statItem}><b>+10</b> <span>فيديوهات</span></div>
            </div>
          </div>
          <div className={styles.imagePlaceholder}>
            <div className={styles.imageCard}>
              <span className={styles.floatingIcon}>✍️</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featureDetailed}>
        <div className={styles.storyContent} style={{flexDirection: 'row-reverse'}}>
          <div className={styles.textContent}>
            <span className={styles.sectionLabel}>رؤيتنا المستقبلية</span>
            <h2>صوت الطالب هو المحرك الأساسي</h2>
            <p>
              في "الريادة"، لا نكتفي بنقل الأخبار، بل نصنعها. نفتح الباب لكل طالب لمشاركة مقالاته الرأية، قصصه القصيرة، وحتى برامجه الإذاعية عبر "بودكاست الريادة". نحن نعدكم بمحتوى يتجدد يومياً، يواكب شغفكم ويحترم عقولكم.
            </p>
            <ul className={styles.checkList}>
              <li><span>✨</span> تغطية حصرية لبطولات المدرسة الرياضية.</li>
              <li><span>✨</span> لقاءات مع قدامى الخريجين لنقل الخبرات.</li>
              <li><span>✨</span> مساحة خاصة لعرض المشاريع التقنية والبرمجية.</li>
            </ul>
          </div>
          <div className={styles.imagePlaceholder}>
            <div className={styles.imageCardGold}>
              <span className={styles.floatingIcon}>🎙️</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}