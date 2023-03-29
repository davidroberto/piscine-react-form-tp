const ListProducts = () => {
  // Je veux créer un bouton pour chaque produit
  // au clic sur le bouton
  // je veux demander à mon api de supprimer le Produit avec une fausse fonction
  // en attendant on va juste afficher un message dans la console avec le produit à supprimer

  const productsFromApi = [
    {
      id: 1,
      title: "Produit 1",
      description: "Description du produit 1",
      price: 10,
    },
    {
      id: 2,
      title: "Produit 2",
      description: "Description du produit 2",
      price: 20,
    },
    {
      id: 3,
      title: "Produit 3",
      description: "Description du produit 3",
      price: 30,
    },
  ];

  const deleteProduct = () => {
    // fausse requête vers l'api pour supprimer le produit
    // l'api a besoin de l'id du produit à supprimer
    // deleteProductInApi();
    console.log("supprimer le produit");
  };

  return (
    <div>
      <h1>Liste des produits</h1>

      {productsFromApi.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            {/* 
              on créé un bouton pour chaque produit
              et on lui attache un event listener click

             */}
            <button onClick={deleteProduct}>Supprimer le produit</button>
          </div>
        );
      })}
    </div>
  );
};

export default ListProducts;
