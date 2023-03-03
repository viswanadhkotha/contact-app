import { useEffect, useState } from 'react';
import './App.css';
import AddNew from './components/addnew/addnew_contact';
import Home from './components/home/home';
import Header from './components/header/header';
import { v4 as uuidv4 } from 'uuid';
import { Route, Routes } from 'react-router-dom';
import EditContact from './components/edit/editContact';

function App() {
  const [maleCount,setMaleCount]=useState(0);
  const [femaleCount,setFemaleCount]=useState(0);
  const [presonalCount,setPresonalCount]=useState(0);
  const [bussinessCount,setBussinessCount]=useState(0);
  const [contacts,setContacts]= useState([
    // const contacts=[
    {
      id:1,
      name:"Ram",
      email:"Ram@gmail.com",
      gender:"male",
      type:"bussiness"
    },
    {
      id:2,
      name:"Sam",
      email:"Sam@gmail.com",
      gender:"male",
      type:"personal"
    },
  ]);
  useEffect(()=>{
    let maleCount=0;
    let femaleCount=0;
    let presonalCount=0;
    let bussinessCount=0;
    contacts.map((contact)=>{
      if(contact.gender==="male")
        maleCount++;
      else
        femaleCount++

      contact.type==="personal"?presonalCount++:bussinessCount++;
      return contact;
    })
    setMaleCount(maleCount);
    setFemaleCount(femaleCount);
    setPresonalCount(presonalCount);
    setBussinessCount(bussinessCount);

      // return null;



  }, [contacts])

  const addContact=(newContact)=>{
    setContacts([...contacts,{id:uuidv4(),...newContact}]);

  }

  const editContact=(newContact)=>{
    const newcontactList=contacts.filter((contact)=>{
      return contact.id !== newContact.id;
    });
    setContacts([...newcontactList,newContact]);

  }

  const deleteContactHandler = (id) =>{
    const newcontactList=contacts.filter((contact)=>{
      return contact.id !==id;
    });
    setContacts(newcontactList);
  }


  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' index element={<Home deleteContactHandler={deleteContactHandler} maleCount={maleCount} femaleCount={femaleCount} presonalCount={presonalCount} bussinessCount={bussinessCount} contacts={contacts} />} />
          <Route path='/addnew' element={<AddNew addContact={addContact}/>} />
          <Route path='/edit/:id' element={<EditContact editContact={editContact} contacts={contacts} />} />
        </Routes>
      </div>
      

    </>
    
    
  );
}

export default App;
