import styles from './videos.module.css';
  
export default function Videos() {
  const videos = [
    {
      id: "1eUm8EbP08hZZH8MNUTCD94Cn0HlZDz68",
      title: "احتفالية عيد الأم بمدرسة سان مارك",
      category: "فعاليات",
      views: "1.2K",
      date: "أمس",
      thumbnail: "/videos/thumb1.jpg", 
      duration: "04:15"
    },
    {
      id: "1e9a8eklklfVhi3ACBrhsOwPhVK8EselD",
      title: "ملخص دوري الكورة الخماسية - نهائي الإعدادي",
      category: "رياضة",
      views: "2.5K",
      date: "منذ يومين",
      thumbnail: "/videos/thumb2.jpg",
      duration: "08:30"
    },
    {
      id: "1e4G9waD1ObVcXwoC6SatmO6FBJ1xVXmP",
      title: "كواليس عرض مسرحية المدرسة السنوية",
      category: "فنون",
      views: "850",
      date: "منذ أسبوع",
      thumbnail: "/videos/thumb3.jpg",
      duration: "12:00"
    }
  ];

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>ساحة الفيديو 🎥</h1>
        <div className={styles.filterBar}>
          <button className={styles.activeFilter}>الكل</button>
          <button className={styles.filterBtn}>فعاليات</button>
          <button className={styles.filterBtn}>رياضة</button>
          <button className={styles.filterBtn}>فنون</button>
        </div>
      </header>

      <section className={styles.videoGrid}>
        {videos.map((vid) => (
          <div key={vid.id} className={styles.videoCard}>
            <div className={styles.thumbnailBox}>
              <video className={styles.previewVideo}>
                <source src={`https://docs.google.com/uc?export=download&id=${vid.id}`} type="video/mp4" />
              </video>
              <span className={styles.durationBadge}>{vid.duration}</span>
              <div className={styles.playIconBox}>▶</div>
            </div>
            
            <div className={styles.videoInfo}>
              <h2 className={styles.videoTitle}>{vid.title}</h2>
              <div className={styles.videoMeta}>
                <span>{vid.category}</span>
                <span className={styles.dot}>•</span>
                <span>{vid.views} مشاهدة</span>
                <span className={styles.dot}>•</span>
                <span>{vid.date}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}