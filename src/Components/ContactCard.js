import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  const delIconClickHandler = () => {
    props.onDeleteContacts(id);
  };

  return (
    <div className="item">
      <div className="content">
        <Link to={`/contact/${id}`} state = {{contact: props.contact}} >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={delIconClickHandler}
      ></i>
    </div>
  );
};

export default ContactCard;
