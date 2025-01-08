"use client";

export default function AboutPage() {
  const toggleFaq = (e) => {
    const content = e.currentTarget.nextElementSibling;
    const arrow = e.currentTarget.querySelector(".arrow");

    if (content.style.display === "block") {
      content.style.display = "none";
      arrow.innerHTML = "\u25BC"; // Down arrow
    } else {
      content.style.display = "block";
      arrow.innerHTML = "\u25B2"; // Up arrow
    }
  };

  return (
    <div>
      <style jsx>{`
        .container {
          font-family: Arial, sans-serif;
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
          background: #98b687;
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
            <p>
              Nous sommes une plateforme dédiée à la promotion des petits
              fabricants éco-responsables. Notre mission est de mettre en avant
              des artisans passionnés et engagés, en facilitant la rencontre
              entre ces créateurs et des acheteurs en quête de produits durables
              et respectueux de l'environnement.
            </p>
          </div>
        </div>

        <div className="faq-section">
          <div className="faq-header" onClick={toggleFaq}>
            <h2>Comment se connecter&nbsp;?</h2>
            <span className="arrow">&#x25BC;</span>
          </div>
          <div className="faq-content">
            <p>
              Pour vous connecter, cliquez sur le bouton "Connexion" situé en
              haut à droite de la page. Vous pourrez vous connecter en utilisant
              votre adresse e-mail et votre mot de passe. Si vous êtes nouveau,
              inscrivez-vous pour découvrir notre communauté de fabricants et
              leurs produits uniques.
            </p>
          </div>
        </div>

        <div className="faq-section">
          <div className="faq-header" onClick={toggleFaq}>
            <h2>Qui contacter&nbsp;?</h2>
            <span className="arrow">&#x25BC;</span>
          </div>
          <div className="faq-content">
            <p>
              Vous pouvez nous contacter via notre page "Contact" pour toute
              question ou assistance. Si vous êtes un fabricant souhaitant
              rejoindre notre plateforme, écrivez-nous directement à
              support@votresite.com. Nous serons ravis de vous accompagner dans
              cette aventure éco-responsable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
