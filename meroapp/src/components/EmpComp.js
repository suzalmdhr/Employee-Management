import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function EmpComp(props) {

    const [firstName,setFirst]=useState('');
    const [lastName,setLast]=useState('');
    const [email,setEmail]=useState('');
    const navigate =useNavigate();
    const [error,setError]=useState('');


    useEffect(() => {
        setFirst(props.firstName || '');
        setLast(props.lastName || '');
        setEmail(props.email || '');
    },[props.firstName,props.lastName,props.email])


    

    const [mist,setMistake]=useState({
        firstName:'',
        lastName:'',
        email:''
    })

    let validateForm =() =>{
        let valid =true;
        const errorsCopy={...mist}

       if(firstName.length < 3){
       
        errorsCopy.firstName="Value should be greater than 3";
        valid=false;
       }

       if(lastName.length < 3){
        errorsCopy.lastName="Value should be greater than 3";
        valid=false;
       }

       if (!validateEmail(email)) {
       errorsCopy.email="Enter valid email";
       
        valid=false;
        // Prevent form submission
      } else {
        setMistake('');
      }

       setMistake(errorsCopy);
       return valid;


    }


    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
      };

    const handleFirst =(e) => {
setFirst(e.target.value);
    }

    

    const handleLast =(e) => {
setLast(e.target.value);
    }


    const handleEmail =(e) => {
setEmail(e.target.value);
    }



    const saveEmp =async(e) => {
e.preventDefault();
let check =validateForm();


if(check){
console.log("yo chaleko hora");
    const emp ={firstName,lastName,email};
    
    
            try {
                const response =await fetch(`http://localhost:8080/up/${props.id}`,{
                    method:'PUT',
                    headers:{
                        'Content-type':'application/json',
                    },
                    body:JSON.stringify(emp)
                })
                
                if(response.ok){
                    alert("Employee updated successfully");
                    navigate('/');
                }
                else{
                    alert('Failed to navigate');
                }
            } catch (error) {
                console.log(error);
                alert("An error occered during adding");
            }

}










    }

  return (
   <>
        <div className="container mt-5">
            <div className='row'>

                <div className='card'>
                <h1 className='text-center'>Add Employee</h1>
                    <div className='card-body'>
                    
  <div className="mb-3">
    <input type="number" name='id' value={props.id} />
    <label htmlFor="exampleInputEmail1" className="form-label">Email first name</label>
    <input name='firstName' value={firstName} onChange={handleFirst} type="text" className={`form-control ${mist.firstName ? 'is-invalid' : ''}`}id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {mist.firstName && <div className='invalid-feedback'>{mist.firstName}</div>}
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email last name</label>
    <input name='lastName' value={lastName} onChange={handleLast} type="text" className={`form-control ${mist.lastName ? 'is-invalid' : ''}`} id="exampleInputEmail1" aria-describedby="emailHelp"/>
   {mist.lastName && <div className='invalid-feedback'>{mist.lastName}</div>}
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Enter email</label>
   
    <input onChange={handleEmail} name='email' value={email} type="email" className={`form-control ${mist.email ? 'is-invalid' : ''}`} id="exampleInputPassword1"/>
    {mist.email && <div className='invalid-feedback'>{mist.email}</div>}
  
  </div>


  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={saveEmp}>Submit</button>




                    </div>

                </div>

            </div>


       </div>
   
   </>
  )
}
