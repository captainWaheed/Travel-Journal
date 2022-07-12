import React from "react";

export default function Card(props) {
  return (
    <div className="card--div">
      <img src={props.imageUrl} className="card--img" />
      <div className="card--info">
        <div className="card--loc">
          <img src="./images/location.png" />
          <p className="location">{props.location}</p>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2>{props.title}</h2>
        <h5>
          {props.startDate} - {props.endDate}
        </h5>
        <p className="card--disc">{props.description}</p>
        <hr></hr>
      </div>
    </div>
  );
}
