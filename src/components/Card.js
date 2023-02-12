export default function Card(props) {
  return (
    <div className="card-container">
      <img src={`./images/${props.coverImg}`} className="card-image" />
      <div>
        <img src="./images/Star.png" />
        <span>{props.rating}</span>
        <span>({props.reviewCount})</span>
      </div>
      <p>{props.title}</p>
      <p>From ${props.price}/person</p>
    </div>
  );
}
