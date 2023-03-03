import JapanImg from "../assets/japanImg.jpeg";
import locationIcon from "../assets/Fill219.png"

function Card(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} className="location-img" />
      <div className="card--data">
        <div className="card--location-data">
          <img src={locationIcon} />
          <span className="card--country-name">{props.location}</span>
          <a href={props.googleMapsUrl} target="_blank">
            View on Google Maps
          </a>
        </div>
        <h1>{props.title}</h1>
        <p className="card--dates">{`${props.startDate} - ${props.endDate}`}</p>
        <p className="card--text">
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default Card;