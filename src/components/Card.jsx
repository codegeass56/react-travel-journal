import JapanImg from "../assets/japanImg.jpeg";
import locationIcon from "../assets/Fill219.png"
function Card() {
  return (
    <div className="card">
      <img src={JapanImg} className="location-img" />
      <div className="card--data">
        <div className="card--location-data">
          <img src={locationIcon} />
          <span className="card--country-name">JAPAN</span>
          <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">
            View on Google Maps
          </a>
        </div>
        <h1>Mount Fuji</h1>
        <p className="card--dates">12 Jan, 2021 - 24 Jan, 2021</p>
        <p className="card--text">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}

export default Card;