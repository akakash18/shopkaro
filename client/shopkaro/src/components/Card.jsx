export default function Card({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt="" srcset="" />
      <p>{product.title}</p>
      <p>{product.category}</p>
      <p>{product.price}</p>
      {/* <p>{product.rating.rate}</p> */}
    </div>
  );
}
