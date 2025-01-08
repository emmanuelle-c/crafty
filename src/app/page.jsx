"use client";
import React, { useState } from "react";
import { useAuth } from "./contexts/AuthContext";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  const [products, setProducts] = useState([
    "/images/product2.jpg",  // Première image remplacée
    "/images/product2.jpg",  // Remplacer toutes les images par product2.jpg
    "/images/product2.jpg",
    "/images/product2.jpg",
    "/images/product2.jpg",
    "/images/product2.jpg",
  ]);

  const [creators] = useState([
    "/images/user1.jpg",
    "/images/user1.jpg",
    "/images/user1.jpg",
    "/images/user1.jpg",
    "/images/user1.jpg",
  ]);

  const [showMore, setShowMore] = useState(false);
  const { auth } = useAuth();

  const loadMoreProducts = () => {
    setProducts((prevProducts) => [
      ...prevProducts,
      "/images/product1.jpg",  // Ajout de product2.jpg ici aussi
      "/images/product1.jpg",
      "/images/product1.jpg",
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
            <div key={index} className="carousel-item">
              <Image
                src={product}
                alt={`Produit ${index + 1}`}
                width={800}
                height={600}
                layout="intrinsic"
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
          {creators.map((creator, index) => (
            <div key={index} className="creator-item">
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
          <button onClick={loadMoreProducts} className="load-more-button">
            Afficher plus
          </button>
        ) : (
          <button onClick={() => setShowMore(true)} className="see-more-button">
            Voir plus...
          </button>
        )}
      </section>

      <style jsx>{`
        * {
          font-family: "Arial", sans-serif;
        }

        .container {
          padding: 20px;
          background-color: #f8f8e8;
        }

        .welcome-section {
          text-align: center;
          margin-bottom: 20px;
        }

        .welcome-section h1 {
          margin-bottom: 10px;
          color: #365443;
        }

        .welcome-section p {
          line-height: 1.8;
        }

        h2 {
          color: #365443;
          margin-bottom: 15px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .card {
          background-color: #decdac; /* Fond des produits */
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          text-align: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        .creator-item {
          background-color: #decdac; /* Fond des créateurs */
          border: 2px solid #ddd;
          padding: 10px;
          margin: 0 10px;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        .carousel-item {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .carousel-item img {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Coupe l'image sans zoom */
        }

        button {
          margin-top: 20px;
          padding: 10px 20px;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .load-more-button,
        .see-more-button {
          background-color: #365443; /* Couleur de fond personnalisée */
        }

        .load-more-button:hover,
        .see-more-button:hover {
          background-color: #2e4533; /* Couleur de survol */
        }

        button:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
