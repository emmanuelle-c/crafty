import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div style={styles.container}>
      {/* Contenu principal */}
      <div style={styles.mainContent}>
        <div style={styles.leftContent}>
          {/* Section des images */}
          <div style={styles.imageSection}>
            <Image
              style={styles.image}
              src="/images/a-demain-bouillotte-cimes-2.jpg"
              alt="photo d'une bouillote aux graines"
              width={150}
              height={150}
            />
            <Image
              style={styles.image}
              src="/images/image-bouillote.jpeg"
              alt="photo d'une bouillote aux graines"
              width={150}
              height={150}
            />
            <Image
              style={styles.image}
              src="/images/Bouillotte-seche-graines-de-lin07-600x600.jpg"
              alt="photo d'une bouillote aux graines"
              width={150}
              height={150}
            />
          </div>

          {/* Section Bouillote */}
          <div style={styles.textSectionBelowImages}>
            <h3 style={styles.sectionTitle}>Bouillote aux graines</h3>
            <p style={styles.sectionText}>
              Découvrez le confort naturel de notre bouillotte aux graines,
              idéale pour soulager les tensions et apporter une chaleur douce et
              apaisante. Remplie de graines naturelles, elle diffuse une chaleur
              homogène et durable. Facile à utiliser, il suffit de la chauffer
              au micro-ondes ou de la placer au congélateur pour une utilisation
              à chaud ou à froid. Parfaite pour détendre les muscles, calmer les
              douleurs ou simplement se réchauffer lors des soirées fraîches.
              Fabriquée avec des matériaux de qualité et respectueux de
              l’environnement, c’est l’alliée bien-être incontournable pour
              toute la famille.
            </p>
          </div>
        </div>

        {/* Section de réservation */}
        <div style={styles.reservationSectionRight}>
          <h3 style={styles.sectionTitle}>Michel, un artisant passionné</h3>
          <p style={styles.sectionText}>
          Jean-Michel est un fabricant indépendant et passionné qui conçoit et fabrique lui-même ses bouillottes aux graines dans son atelier. Attaché à l’artisanat et aux matériaux naturels, il sélectionne avec soin chaque ingrédient pour garantir des produits de qualité, respectueux de l’environnement. Avec un savoir-faire unique et une attention aux détails, Jean-Michel crée des bouillottes à la fois esthétiques et fonctionnelles, pensées pour le confort et le bien-être de chacun. Une véritable invitation à consommer local et responsable !
          </p>
          <button style={styles.button}>RESERVER</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#F6F6E9",
    padding: "20px",
    maxWidth: "900px",
    margin: "0 auto",
    marginTop: "2em",
    marginBottom: "2em",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
  },
  mainContent: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
  },
  leftContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  imageSection: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    justifyContent: "center",
  },
  image: {
    width: "150px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  textSectionBelowImages: {
    backgroundColor: "#E8E2CD",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  reservationSectionRight: {
    width: "300px",
    backgroundColor: "#D9C4A8",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  sectionTitle: {
    marginBottom: "10px",
    fontSize: "1.5rem",
    color: "#333",
    fontWeight: "bold",
  },
  sectionText: {
    fontSize: "1rem",
    color: "#555",
    lineHeight: "1.6",
  },
  button: {
    marginTop: "15px",
    padding: "12px 25px",
    backgroundColor: "#A4C4A5",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#8BAC8E",
  },
};
