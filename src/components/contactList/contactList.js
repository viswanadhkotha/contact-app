import React from "react";
import ContactCard from "../contact card/contactCard";

const ContactList = ({contacts, deleteContactHandler}) =>{
    console.log(contacts)
    
    const deletecontact= (id) =>{
        deleteContactHandler(id);

    }

    const renderContacts=contacts?.map((contact)=>{
        return (<ContactCard contact={contact} deletecontact={deletecontact} key={contact.id} />);

    })

    

    return (
        <div>
            <div className="h3">Contact List</div>
            <div>{renderContacts}</div>
        </div>

    );
}

export default ContactList;