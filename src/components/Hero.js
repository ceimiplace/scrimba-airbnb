import hero from "../images/hero.svg";
import "./Hero.css";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero--logo-container">
        <img
          src={hero}
          alt="collection of pictures"
          className="hero--logo-container--logo"
        />
      </div>
      <h2 className="hero--heading">Online Experiences</h2>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
