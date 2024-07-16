import React, { useState } from 'react'
import Header from './Header'

import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import EmpComp from './EmpComp';

export default function UpdatePage() {
    const {id} =useParams();
    const [emp,setEmp]=useState({});
    


useEffect(() => {

    const fetchData =async() => {
        let res= await fetch(`http://localhost:8080/get/${id}`);
        let data=await res.json();
      
        setEmp(data);
        
    };
    fetchData();
},[]);
   
  return (
  <>
  <p>employee id : {id}</p>
  <p> employee firstName : {emp.firstName}</p>
  <p > employee lastName: {emp.lastName}</p>
 <EmpComp id={id} firstName={emp.firstName} lastName={emp.lastName} email={emp.email}/>
  </>
  )
}
