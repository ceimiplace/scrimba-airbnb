import "./Card.css";
export default function Card({ item }) {
  return (
    <div className="card-container">
      <img src={`./images/${item.coverImg}`} className="card-image" />
      <section className="card-text">
        <div>
          <img src="./images/Star.png" />
          <span>{item.stats.rating}</span>
          <span>({item.stats.reviewCount})</span>
        </div>
        <p>{item.title}</p>
        <p className="price--container">
          <span className="price--container--starting">From ${item.price}</span>
          /person
        </p>
      </section>
    </div>
  );
}
