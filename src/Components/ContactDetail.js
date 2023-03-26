import React from "react";
import { Link, useLocation } from "react-router-dom";
import img from "../images/img.jpg";

const ConatactDetail = (props) => {
    const { state } = useLocation();
    const {name, email} = state.contact;
    console.log(name, email)
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={img} alt="img" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
            <button className="ui button blue center">Back to ContactList</button>
        </Link>
      </div>
    </div>
  );
};

export default ConatactDetail;
