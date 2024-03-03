import { useState } from "react";
import { destin } from "../DB/DestinationDB.JSX";
import "../Css/Destination.css";
const Destination = () => {
  const [items] = useState(destin);
  const [value, setValue] = useState(0);
  const { name, images, description, distance, travel } = items[value];

  // function uppercase(){
  //     const name = name.toUppercase()
  // }
  return (
    <div className="destination-bg">
      <div className="destination">
        <div className="left-side-dest">
          <div className="text">
            <h1>
              <span>01</span> Pick your destination
            </h1>
          </div>
          <div className="image">
            <img src={images} title={name} className="dest-img" />
          </div>
        </div>
        <div className="right-side-dest">
          <div className="btn-dest">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setValue(index); 
                }}
                className={`${index === value && 'active'}`}
              >
                {item.name.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="title-dest">
            <h2>{name.toUpperCase()}</h2>
            <p>{description}</p>
          </div>
          <div className="border"></div>
          <ul className="ul-dest">
            <li className="li-dest">
              AVG. DISTANCE
              <span className="span-dest">{distance.toUpperCase()}</span>
            </li>
            <li className="li-dest">
              EST. TRAVEL TIME
              <span className="span-dest">{travel.toUpperCase()}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Destination;
