const ListProducts = () => {
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

  const handleDelete = (product) => {
    // sendDeleteProductToApi(product.id);
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
            <button onClick={() => handleDelete(product)}>Supprimer le produit</button>
          </div>
        );
      })}
    </div>
  );
};

export default ListProducts;
