import React from 'react';

export default function Page() {
  return (
    <div style={styles.container}>
      {/* Contenu principal */}
      <div style={styles.mainContent}>
        <div style={styles.leftContent}>
          {/* Section des images */}
          <div style={styles.imageSection}>
            <img
              src="/example-image.jpg"
              alt="Product"
              style={styles.image}
            />
            <img
              src="/example-image.jpg"
              alt="Product"
              style={styles.image}
            />
            <img
              src="/example-image.jpg"
              alt="Product"
              style={styles.image}
            />
          </div>

          {/* Section Bouillote */}
          <div style={styles.textSectionBelowImages}>
            <h3 style={styles.sectionTitle}>Bouillote aux graines</h3>
            <p style={styles.sectionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              viverra velit ac dui ullamcorper malesuada. Mauris interdum urna
              nec pharetra hendrerit. Nulla a felis non arcu ornare imperdiet vel
              sit amet ante. Etiam malesuada fringilla ex, sit amet finibus ipsum
              ornare id. Vivamus tempor, diam in cursus egestas, est
            </p>
          </div>
        </div>

        {/* Section de réservation */}
        <div style={styles.reservationSectionRight}>
          <h3 style={styles.sectionTitle}>Michel jsp</h3>
          <p style={styles.sectionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            viverra velit ac dui ullamcorper malesuada. Mauris interdum urna
            nec pharetra hendrerit. Nulla a
          </p>
          <button style={styles.button}>RESERVER</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#F6F6E9',
    padding: '20px',
    maxWidth: '900px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
  },
  leftContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  imageSection: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    justifyContent: 'center',
  },
  image: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  textSectionBelowImages: {
    backgroundColor: '#E8E2CD',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  reservationSectionRight: {
    width: '300px',
    backgroundColor: '#D9C4A8',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    marginBottom: '10px',
    fontSize: '1.5rem',
    color: '#333',
    fontWeight: 'bold',
  },
  sectionText: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.6',
  },
  button: {
    marginTop: '15px',
    padding: '12px 25px',
    backgroundColor: '#A4C4A5',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#8BAC8E',
  },
};
