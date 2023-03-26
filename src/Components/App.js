import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import api from "../api/contacts";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import "./App.css";
import ConatactDetail from "./ContactDetail";

function App() {
  // const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  // const retriveContactsData = JSON.parse(
  //   localStorage.getItem(LOCAL_STORAGE_KEY)
  // );
  const retriveContactsData = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  useEffect(() => {
    // if (retriveContactsData) setContacts(retriveContactsData);
    const getAllContacts = async () => {
      const allContacts = await retriveContactsData();
      if(allContacts) {
        setContacts(allContacts);
      }
    };
    getAllContacts();
  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContactsHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: Math.random().toString(),
      ...contact
    }
    const response = await api.post("/contacts", request);
    console.log(response);
    setContacts([...contacts, response.data]);

    // setContacts([...contacts, { id: Math.random(), ...contact }]);
    // setContacts((prevContact) => {
    //   return [...prevContact, contact];
    // })
  };

  const deleteContactsHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            Component={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                onDeleteContacts={deleteContactsHandler}
              />
            )}
          />
          <Route
            path="/add"
            Component={(props) => (
              <AddContact {...props} onAddContact={addContactsHandler} />
            )}
          />
          <Route
            path="/contact/:id"
            Component={ConatactDetail}
          />
        </Routes>
        {/* <AddContact onAddContact={addContactsHandler} />
        <ContactList
          contacts={contacts}
          onDeleteContacts={deleteContactsHandler}
        /> */}
      </Router>
    </div>
  );
}

export default App;
