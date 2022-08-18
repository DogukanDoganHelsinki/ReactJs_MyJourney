import React from "react";

function Card(props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p>{props.item.title}</p>
          <img src={props.item.img} alt="Avatar" width="220px" height="200px" />
        </div>
        <div className="flip-card-back">
          <br />
          <h1>{props.item.title}</h1>
          <p>{props.item.location}</p>
          <p>Start Date : {props.item.startDate}</p>
          <p>End Date : {props.item.endDate}</p>
          <p>Description : {props.item.description}</p>
          <br />
          <p>
            <a
              href={props.item.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Location
            </a>
          </p>
          <br />
          <p>
            <a
              href={props.item.imageUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Image of the Place
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
