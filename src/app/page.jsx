"use client";
import React, { useState } from "react"; // Ajout de l'import de useState
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
    <>
      <div className="container">
        <h1>Bienvenue sur Crafty !</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus mi,
          id tincidunt neque blandit finibus.
        </p>

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
      </div>

      <style jsx>{`
        .container {
          padding: 20px;
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
        }

        button {
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </>
  );
}