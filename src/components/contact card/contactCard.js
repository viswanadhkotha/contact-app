import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) =>{
    const {id,name,email} = props.contact;
    return (
        <div className="row border rounded m-2 p-3">
            <div  className="col-12 col-md-10 col-lg-10">
                <div>{name}</div>
                <div>{email}</div>
            </div>
            <div  className="col-12 col-md-2 col-lg-2">
                <Link to={`/edit/${id}`} state={{id:id}} className="btn btn-outline-warning m-2">
                    <i className="bi bi-pencil-square"></i>
                </Link>
                <button className="btn btn-outline-danger" onClick={()=>{props.deletecontact(id)}}>
                    <i className="bi bi-trash3"></i>
                </button>
            </div>
        </div>
    );
}

export default ContactCard;