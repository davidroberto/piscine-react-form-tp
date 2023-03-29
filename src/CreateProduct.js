const CreateProduct = () => {
  // fonction appelée par l'event listener submit
  // qui permet de créer un produit en BDD
  // en se basant sur les valeurs des champs du formulaire

  // vu que cette fonction est appelée par l'event listener
  // elle prend automatiquement un parametre "event"
  // qui contient des données et des fonctions utiles
  // pour gérer l'évènement
  const handleCreateProductSubmit = (event) => {
    // on empêche le comportement par défaut du navigateur
    // c'est à dire la page de se recharger (au submit d'un form, la page se recharge)
    event.preventDefault();

    // on récupère les valeurs des champs du formulaire
    // event.target contient tous les champs du formulaire

    const title = event.target.title.value;
    const description = event.target.description.value;
    const price = event.target.price.value;

    console.log(title, description, price);

    // on fait semblant d'envoyer les données à l'API
    // pour créer une produit en BDD
    // sendRequestToCreateProductInApi(title, description, price);
  };

  return (
    // créé une balise form
    // et je lui attache un event listener submit
    // pour attendre que le bouton submit soit cliqué
    // et je lui passe une fonction qui va être appelée
    // quand le bouton submit sera cliqué
    <form onSubmit={handleCreateProductSubmit}>
      <div>
        <label>Titre du produit : </label>
        <input type="text" name="title" />
      </div>

      <div>
        <label>Description du produit : </label>
        <input type="text" name="description" />
      </div>

      <div>
        <label>Prix du produit : </label>
        <input type="integer" name="price" />
      </div>

      <input type="submit" />
    </form>
  );
};

export default CreateProduct;
