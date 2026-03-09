import styles from './articles.module.css';
import Link from 'next/link';

export default function Articles() {
  const articles = [
    {
      id: "art-1",
      title: "ما لا تعرفه عن الفرانكوفونية",
      lanuage: "لغة فرنسية",
      excerpt: "La Francophonie désigne l’ensemble des pays et des peuples qui partagent la langue française...",
      author: "Mohammed Moustafa",
      category:"معلومات عامة",
      img: "/articles/franc.jpg"
    },
    {
      id: "art-2",
      title: "قصة لا تحكم على الكتاب من غلافه",
      excerpt: "في يوم من الأيام كان هنالك طفل ضعيف في الدراسة فقال له واحد من الطلاب:أنت أغبى طالب في المدرسة ولن تنجح في حياتك أبداً...",
      author: "Jerome Georges",
      category: "قصة قصيرة",
      img: "/articles/story.jpg"
    }
  ];

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>مقالات الريادة ✍️</h1>
        <p className={styles.subtitle}>بأقلام طلاب سان مارك.. أفكارنا، تجاربنا، ورؤيتنا للعالم</p>
      </header>

      <section className={styles.articlesGrid}>
        {articles.map((art) => (
          <article key={art.id} className={styles.articleCard}>
            <div className={styles.imageBox}>
              <img src={art.img} alt={art.title} />
              <span className={styles.categoryBadge}>{art.category}</span>
            </div>
            
            <div className={styles.content}>
              <div className={styles.meta}>
                <span>{art.author}</span>
                <span className={styles.dot}>•</span>
                <span>{art.date}</span>
              </div>
              <h2 className={styles.articleTitle}>{art.title}</h2>
              <p className={styles.excerpt}>{art.excerpt}</p>
              <Link href={`/articles/${art.id}`} className={styles.readMore}>
                اقرأ المقال كاملاً ←
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}