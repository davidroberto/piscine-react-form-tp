const CreateProduct = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const description = event.target.description.value;
    const price = event.target.price.value;

    console.log(title, description, price);

    //sendProductToApi(title, description, price);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre du produit :</label>
          <input name="title" type="text" />
        </div>

        <div>
          <label>Description du produit : </label>
          <input name="description" type="text" />
        </div>

        <div>
          <label>Prix du produit : </label>
          <input name="price" type="integer" />
        </div>

        <input type="submit" />
      </form>
    </section>
  );
};

export default CreateProduct;
