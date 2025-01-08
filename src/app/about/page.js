'use client';

export default function AboutPage() {
  const toggleFaq = (e) => {
    const content = e.currentTarget.nextElementSibling;
    const arrow = e.currentTarget.querySelector('.arrow');

    if (content.style.display === 'block') {
      content.style.display = 'none';
      arrow.innerHTML = '\u25BC'; // Down arrow
    } else {
      content.style.display = 'block';
      arrow.innerHTML = '\u25B2'; // Up arrow
    }
  };

  return (
    <div>
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 20px auto;
          padding: 20px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .faq-section {
          margin-bottom: 20px;
        }
        .faq-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #45A049;
          padding: 15px;
          border-radius: 8px;
          cursor: pointer;
        }
        .faq-header:hover {
          background: #badbcc;
        }
        .faq-header h2 {
          margin: 0;
          font-size: 18px;
        }
        .faq-header .arrow {
          font-size: 18px;
        }
        .faq-content {
          display: none;
          padding: 15px;
          border-top: 1px solid #ddd;
          background: #f8f9fa;
        }

        @media (max-width: 600px) {
          .container {
            padding: 10px;
          }
          .faq-header {
            flex-direction: column;
            align-items: flex-start;
            padding: 10px;
          }
          .faq-header h2 {
            font-size: 18px;
            line-height: 1.2;
          }
          .faq-header .arrow {
            font-size: 18px;
            align-self: flex-end;
          }
          .faq-content {
            padding: 10px;
          }
        }
      `}</style>
      <div className="container">
        <div className="faq-section">
          <div className="faq-header" onClick={toggleFaq}>
            <h2>Qui sommes-nous&nbsp;?</h2>
            <span className="arrow">&#x25BC;</span>
          </div>
          <div className="faq-content">
            <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression...</p>
          </div>
        </div>

        <div className="faq-section">
          <div className="faq-header" onClick={toggleFaq}>
            <h2>Comment se connecter&nbsp;?</h2>
            <span className="arrow">&#x25BC;</span>
          </div>
          <div className="faq-content">
            <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression...</p>
          </div>
        </div>

        <div className="faq-section">
          <div className="faq-header" onClick={toggleFaq}>
            <h2>Qui contacter&nbsp;?</h2>
            <span className="arrow">&#x25BC;</span>
          </div>
          <div className="faq-content">
            <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
