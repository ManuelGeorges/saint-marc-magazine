import styles from './about.module.css';

export default function About() {
  const team = {
    mainSupervisor: { name: "Mohamed Shalaby", role: "Main Supervisor", img: "/team/shalaby.jpg" },
    publisher: { name: "Eric Karim", role: "Publisher", img: "/team/eric.jpg" },
    supervisor: { name: "Rehab ElMoslemany", role: "Supervisor", img: "/team/rehab.jpg" },
    dev: { name: "Manuel Georges", role: "Main Developer", img: "/team/manuel.jpg" },
    authors: [
      { name: "Jerome Georges", img: "/team/jerome.jpg" },
      { name: "Mina Emad", img: "/team/morgan.jpg" },
      { name: "Mohammed Moustafa", img: "/team/momo.jpg" },
      { name: "Yehia Hesham", img: "/team/yehia.jpg" }
    ]
  };

  return (
    <main className={styles.container}>
      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>عن سان مارك الريادة</h1>
        <p className={styles.heroSubtitle}>وراء كل خبر قصة، ووراء كل قصة فريق مبدع</p>
      </header>

      <section className={styles.content}>
        <div className={styles.sectionBlock}>
          <h2 className={styles.categoryTitle}>قيادة المجلة</h2>
          <div className={styles.topManagement}>
            <div className={`${styles.profileCard} ${styles.featuredCard}`}>
              <div className={styles.imageWrapperLarge}>
                <img src={team.mainSupervisor.img} alt={team.mainSupervisor.name} />
              </div>
              <span className={styles.badgeGold}>{team.mainSupervisor.role}</span>
              <h3 className={styles.personNameLarge}>{team.mainSupervisor.name}</h3>
            </div>
          </div>
          
          <div className={styles.subManagement}>
            <div className={styles.profileCard}>
              <div className={styles.imageWrapper}>
                <img src={team.supervisor.img} alt={team.supervisor.name} />
              </div>
              <span className={styles.badge}>{team.supervisor.role}</span>
              <h3 className={styles.personName}>{team.supervisor.name}</h3>
            </div>
          </div>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.categoryTitle}>نشر الجريدة</h2>
          <div className={styles.specialSection}>
            <div className={`${styles.profileCard} ${styles.highlightCard}`}>
              <div className={styles.imageWrapper}>
                <img src={team.publisher.img} alt={team.publisher.name} />
              </div>
              <span className={styles.badge}>{team.publisher.role}</span>
              <h3 className={styles.personName}>{team.publisher.name}</h3>
            </div>
          </div>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.categoryTitle}>هندسة المنصة</h2>
          <div className={styles.specialSection}>
            <div className={`${styles.profileCard} ${styles.devCard}`}>
              <div className={styles.imageWrapper}>
                <img src={team.dev.img} alt={team.dev.name} />
              </div>
              <span className={styles.badge}>{team.dev.role}</span>
              <h3 className={styles.personName}>{team.dev.name}</h3>
            </div>
          </div>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.categoryTitle}>أسرة الكتابة</h2>
          <div className={styles.authorsGrid}>
            {team.authors.map((author) => (
              <div key={author.name} className={styles.profileCard}>
                <div className={styles.imageWrapper}>
                  <img src={author.img} alt={author.name} />
                </div>
                <span className={styles.badge}>Author</span>
                <h3 className={styles.personName}>{author.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}