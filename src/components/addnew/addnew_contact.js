import {React, useState} from "react";
import { useNavigate } from "react-router-dom";



const AddNew = ({addContact}) =>{
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('male');
  const [type, setType] = useState('bussiness');
  const submit=(e)=>{
    e.preventDefault();
    addContact({name:name,email:email,gender:gender,type:type})
    navigate("/")
  }
  

    return (
        <>
          <form className="p-3">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" onChange={(e)=>{setName(e.target.value)}} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" onChange={(e)=>{setEmail(e.target.value)}} required/>
            </div>
            <div>
              <label className="form-label">Gender</label>
              <select className="form-select form-select mb-3" aria-label=".form-select-lg example" onChange={(e)=>{setGender(e.target.value)}} required>
                <option value="male" defaultValue>Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label className="form-label">Type</label>
              <select className="form-select form-select mb-3" aria-label=".form-select-lg example" onChange={(e)=>{setType(e.target.value)}} required>
                <option value="bussiness" defaultValue>Bussiness</option>
                <option value="personal">Personal</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
          </form>
          
        </>
    );
}

export default AddNew;