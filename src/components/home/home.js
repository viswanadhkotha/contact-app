import React from "react";
import ContactList from "../contactList/contactList";

const Home = ({deleteContactHandler, maleCount, femaleCount, presonalCount, bussinessCount, contacts}) =>{
    return(
        <>
            <div className="h3">Contact List</div>
            <div className='border rounded p-3 m-3'>
                <div className='row'>
                <div className='col-6'>
                    <p className='text-center'><span className='fw-bold'>Male:</span>{maleCount}</p>
                    <p className='text-center'><span className='fw-bold'>Female:</span>{femaleCount}</p>
                </div>
                <div className='col-6'>
                    <p className='text-center'><span className='fw-bold'>Personal:</span>{presonalCount}</p>
                    <p className='text-center'><span className='fw-bold'>Business:</span>{bussinessCount}</p>
                </div>
                </div>
            </div>
            <ContactList contacts={contacts} deleteContactHandler={deleteContactHandler}/>
      </>
      )}

export default Home;