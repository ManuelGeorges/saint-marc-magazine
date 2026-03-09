'use client';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contact.module.css';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_m0cgjnr', 
      'template_mtcgbxi', 
      form.current, 
      'eA5909_tlT4b4teHX'
    )
    .then((result) => {
        alert("تم إرسال طلبك بنجاح يا سيدي! سنتواصل معك قريباً.");
        form.current.reset();
    }, (error) => {
        alert("حدث خطأ في الإرسال، تأكد من اتصال الإنترنت.");
    });
  };

  return (
    <main className={styles.container}>
      <header className={styles.hero}>
        <h1 className={styles.title}>تواصل مع الريادة ✉️</h1>
        <p className={styles.subtitle}>احجز نسختك أو اطلب دعم فني في ثواني</p>
      </header>

      <section className={styles.content}>
        <div className={styles.contactGrid}>
          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <h3>حجز المجلة 📖</h3>
              <p>سجل بياناتك وهنتواصل معاك بخصوص استلام النسخة المطبوعة.</p>
            </div>
            <div className={styles.infoCard}>
              <h3>رقم الموبايل 📱</h3>
              <p>تأكد من كتابة رقمك بشكل صحيح لسهولة التواصل عبر الواتساب أو الاتصال.</p>
            </div>
          </div>

          <div className={styles.formSection}>
            <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
              <div className={styles.inputGroup}>
                <label>الاسم بالكامل</label>
                <input type="text" name="user_name" required placeholder="اكتب اسمك هنا..." />
              </div>
              
              <div className={styles.inputGroup}>
                <label>رقم الموبايل</label>
                <input type="tel" name="user_phone" required placeholder="01xxxxxxxxx" />
              </div>

              <div className={styles.inputGroup}>
                <label>الفصل الدراسي</label>
                <input type="text" name="user_class" required placeholder="مثال: 3 إعدادي / 1" />
              </div>

              <div className={styles.inputGroup}>
                <label>نوع الطلب</label>
                <select name="request_type">
                  <option value="حجز نسخة">حجز نسخة مطبوعة</option>
                  <option value="دعم فني">دعم فني للموقع</option>
                  <option value="اقتراح">اقتراح لمحتوى جديد</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label>رسالتك</label>
                <textarea name="message" rows="4" required placeholder="اكتب تفاصيل طلبك هنا..."></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>إرسال الطلب</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}