"use client";
import React, { useState } from "react";
import { useAuth } from "./contexts/AuthContext";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  const [products, setProducts] = useState([
    "/images/product1.jpg",
    "/images/product2.jpg",
    "/images/product3.jpg",
    "/images/product4.jpg",
    "/images/product5.jpg",
    "/images/product6.jpg",
  ]);
  const [showMore, setShowMore] = useState(false);
  const { auth } = useAuth();

  const loadMoreProducts = () => {
    setProducts((prevProducts) => [
      ...prevProducts,
      "/images/product7.jpg",
      "/images/product8.jpg",
      "/images/product9.jpg",
    ]);
    setShowMore(false);
  };

  return (
    <div className="container">
      <div className="welcome-section">
        {auth ? (
          <h1> Bienvenue sur Crafty, {auth.email} !</h1>
        ) : (
          <h1>Bienvenue sur Crafty !</h1>
        )}
        <p>
          🌿 Bienvenue sur Crafty 🌿
          <br />
          Votre boutique écoresponsable dédiée à des produits artisanaux et
          durables. 🌍✨
          <br />
          📦 Achetez en soutenant des créateurs locaux
          <br />
          ♻️ Choisissez la qualité, respectueuse de la planète
          <br />
          😊 Une expérience d'achat conviviale et engagée
          <br />
          Crafty, votre partenaire pour consommer autrement.
          <br />
        </p>
      </div>

      {/* Les produits en vogue */}
      <section>
        <h2>Les produits en vogue</h2>
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
          {products.slice(0, 5).map((product, index) => (
            <div key={index}>
              <Image
                src={product}
                alt={`Produit ${index + 1}`}
                width={800}
                height={600}
              />
            </div>
          ))}
        </Carousel>
      </section>

      {/* Les créateurs au top */}
      <section>
        <h2>Les créateurs au top</h2>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          centerMode
          centerSlidePercentage={33.33}
        >
          {products.map((creator, index) => (
            <div key={index}>
              <Image
                src={creator}
                alt={`Créateur ${index + 1}`}
                width={400}
                height={300}
              />
            </div>
          ))}
        </Carousel>
      </section>

      {/* Les produits */}
      <section>
        <h2>Les produits</h2>
        <div className="grid">
          {products.map((product, index) => (
            <div key={index} className="card">
              <Image
                src={product}
                alt={`Produit ${index + 1}`}
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
        {showMore ? (
          <button onClick={loadMoreProducts}>Afficher plus</button>
        ) : (
          <button onClick={() => setShowMore(true)}>Voir plus...</button>
        )}
      </section>

      <style jsx>{`
        .container {
          padding: 20px;
        }

        .welcome-section {
          text-align: center; /* Centre le texte */
          margin-bottom: 20px; /* Ajoute un espace sous la section */
        }

        .welcome-section h1 {
          margin-bottom: 10px; /* Espacement entre le titre et le paragraphe */
          color: #365443; /* Couleur du titre */
        }

        .welcome-section p {
          line-height: 1.8; /* Améliore l'espacement entre les lignes pour une meilleure lisibilité */
        }

        h2 {
          color: #365443; /* Applique la couleur aux sous-titres */
          margin-bottom: 15px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          padding: 10px;
          text-align: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        button {
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition:
            background-color 0.3s ease,
            transform 0.2s ease;
        }

        button:hover {
          background-color: #005bb5;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
