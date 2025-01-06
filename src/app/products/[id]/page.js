export default function ProductPage({ params }) {
    return (
      <div>
        <h1>Détails du produit</h1>
        <p>Produit ID : {params.id}</p>
      </div>
    );
  }