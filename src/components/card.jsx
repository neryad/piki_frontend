const ProductCard = ({
  image,
  title,
  price,
  onAddToCart,
  onToggleFavorite,
}) => {
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={image} alt={title} />
        <div className="favorite-btn" onClick={onToggleFavorite}>
          ❤️
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
        <a
          href="#"
          className="product-btn"
          onClick={(e) => {
            e.preventDefault();
            onAddToCart();
          }}
        >
          Agregar al carrito
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
