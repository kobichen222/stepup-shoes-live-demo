import React from 'react';
import './index.css';

const pages = [
  "דף בית",
  "קטגוריות",
  "מוצרים מובילים",
  "מבצעים",
  "יצירת קשר"
];
const features = [
  "Hero שיווקי",
  "קטגוריות נעליים",
  "כרטיסי מוצרים",
  "אזור מבצעים",
  "CTA",
  "Responsive Design"
];

export default function App() {
  return (
    <main className="app-shell" dir="rtl">
      <section className="hero">
        <div className="badge">Base44-ready · Media Deal</div>
        <h1>StepUp Shoes Production Demo</h1>
        <p>חנות נעליים דיגיטלית מודרנית עם חוויית קנייה חדה, מהירה ומעוצבת.</p>
        <a className="cta" href="mailto:kobi@media-deal.co.il">התחילו לקנות</a>
      </section>

      <section className="grid-section">
        <div className="panel">
          <h2>עמודי הפרויקט</h2>
          <ul>{pages.map((page) => <li key={page}>{page}</li>)}</ul>
        </div>
        <div className="panel">
          <h2>יכולות מרכזיות</h2>
          <ul>{features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        </div>
      </section>
    </main>
  );
}
