export default function ProductPage({ params }) {
    return (
      <div>
        <p>Détails du produit</p>
        <p>Produit ID : {params.id}</p>
      </div>
    );
  }