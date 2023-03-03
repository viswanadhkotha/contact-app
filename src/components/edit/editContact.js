import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react';

const EditContact = ({contacts, editContact}) =>{
    const navigate = useNavigate();
    const location= useLocation();
    const [contact, setContact]=useState({});
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [gender, setGender] = useState(contact.gender);
    const [type, setType] = useState(contact.type);
    const submit=(e)=>{
        e.preventDefault();
        editContact({id:id,name:name,email:email,gender:gender,type:type})
        navigate("/")
    }

    useEffect(()=>{
        let data=contacts.filter((con)=>{
            return con.id===location.state.id;
        })
        setId(data[0].id)
        setName(data[0].name)
        setEmail(data[0].email)
        setGender(data[0].gender)
        setType(data[0].type)
        setContact(data);

    },[location, contacts])

    return (
        <>
            <Link to="/" className="btn btn-primary">Back</Link>
          <form className="p-3">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" value={name} onChange={(e)=>{setName(e.target.value)}} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" value={email} id="email" onChange={(e)=>{setEmail(e.target.value)}} required/>
            </div>
            <div>
              <label className="form-label">Gender</label>
              <select className="form-select form-select mb-3" value={gender} aria-label=".form-select-lg example" onChange={(e)=>{setGender(e.target.value)}} required>
                <option value="male" defaultValue>Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label className="form-label">Type</label>
              <select className="form-select form-select mb-3" value={type} aria-label=".form-select-lg example" onChange={(e)=>{setType(e.target.value)}} required>
                <option value="bussiness" defaultValue>Bussiness</option>
                <option value="personal">Personal</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
          </form>
          
        </>

)}

export default EditContact;