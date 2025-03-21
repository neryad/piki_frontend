import ProductCard from "./card";

const HomeCards = () => {
  // Datos de productos
  const products = [
    {
      id: 1,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      title: "Libreta personalizada",
      price: 250.0,
    },
    {
      id: 2,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      title: "Tazas",
      price: 180.0,
    },
    {
      id: 3,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      title: "Termos",
      price: 320.0,
    },
    {
      id: 4,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      title: "Camiseta Grafiti",
      price: 280.0,
    },
  ];

  // Funciones para manejar eventos
  const handleAddToCart = (product) => {
    console.log(`Producto agregado al carrito: ${product.title}`);
    // Aquí puedes agregar la lógica para agregar el producto al carrito
  };

  const handleToggleFavorite = (product) => {
    console.log(`Producto marcado como favorito: ${product.title}`);
    // Aquí puedes agregar la lógica para marcar/desmarcar el producto como favorito
  };

  return (
    <section className="products-section">
      <div className="container">
        <h2 className="section-title">Productos Destacados</h2>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              onAddToCart={() => handleAddToCart(product)}
              onToggleFavorite={() => handleToggleFavorite(product)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
