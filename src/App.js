import { useEffect, useState } from 'react';
import './App.css';
import AddNew from './components/addnew/addnew_contact';
import ContactList from './components/contactList/contactList';
import Header from './components/header/header';
import { v4 as uuidv4 } from 'uuid';

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
    console.log("useeffect")
    let maleCount=0;
    let femaleCount=0;
    let presonalCount=0;
    let bussinessCount=0;
    contacts.map((contact)=>{
      console.log(contact.gender)
      if(contact.gender==="male")
        maleCount++;
      else
        femaleCount++

      contact.type==="personal"?presonalCount++:bussinessCount++;
    })
    setMaleCount(maleCount);
    setFemaleCount(femaleCount);
    setPresonalCount(presonalCount);
    setBussinessCount(bussinessCount);

      // return null;



  }, [contacts])

  const addContact=(newContact)=>{
    setContacts([...contacts,{id:uuidv4(),...newContact}]);
    console.log(contacts)

  }

  const deleteContactHandler = (id) =>{
    const newcontactList=contacts.filter((contact)=>{
      return contact.id !==id;
    });
    setContacts(newcontactList);
  }


  return (
    <div className="container">
      <Header />
      <div className='border rounded p-3'>
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

      <AddNew addContact={addContact}/>
      <ContactList contacts={contacts} deleteContactHandler={deleteContactHandler}/>
      

    </div>
  );
}

export default App;
