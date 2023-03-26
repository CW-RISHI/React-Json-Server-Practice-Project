import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.onDeleteContacts(id);
  };

//   const contacts = [
//     { id: "g1", name: "Rishi", email: "hiiamrishiraj@gmail.com" },
//     { id: "g2", name: "Shashi", email: "hiiamrishj@gmail.com" },
//     { id: "g3", name: "Sagar", email: "hiiaaj@gmail.com" },
//     { id: "g4", name: "Dhiru", email: "Dhiruhiraj@gmail.com" },
//   ];

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        onDeleteContacts={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className="main" style={{ marginTop: "63px" }}>
      <h2>
        Contact List
        <Link to="/add">
          <button
            className="ui button blue right"
            style={{ marginLeft: "217px" }}
          >
            To Add Contact
          </button>
        </Link>
      </h2>
      <div className="ui called list">{renderContactList}</div>;
    </div>
  );
};

export default ContactList;
