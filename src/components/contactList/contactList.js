import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "../contact card/contactCard";

const ContactList = ({contacts, deleteContactHandler}) =>{
    
    const deletecontact= (id) =>{
        deleteContactHandler(id);

    }

    const renderContacts=contacts?.map((contact)=>{
        return (<ContactCard contact={contact} deletecontact={deletecontact} key={contact.id} />);

    })

    

    return (
        <div>
            <Link className="btn btn-success" to="/addnew">Add New Contact</Link>
            <div>{renderContacts}</div>
        </div>

    );
}

export default ContactList;