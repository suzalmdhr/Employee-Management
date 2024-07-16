import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function ListEmp() {
    const [employees,setEmps] =useState([]);

    let getEmps =async() => {
      let res= await fetch('http://localhost:8080/getAll');
      let data =await res.json();
      setEmps(data);
  }

    useEffect(() => {
       
        getEmps();
       

        const intId= setInterval(getEmps,3000)
        
    },[])

    const deleteEmp= async(id) => {
      await fetch(`http://localhost:8080/del/${id}`,{
        method: 'DELETE',
      });
      
      getEmps();
    }

    


  return (
   <>

<Link className="btn btn-primary" to="/add" role="button">Add emp</Link>
   <table className="table">
  <thead>
    <tr >
      <th scope='col'>empID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope='col'>Action</th>
     

    </tr>
  </thead>
  <tbody>
   {employees.map((emp) => (
     <tr key={emp.id}>
    <td>{emp.id}</td>
     <td>{emp.firstName}</td>
     <td>{emp.lastName}</td>
     <td>{emp.email}</td>
     <td><a className="btn btn-primary" href={`updatePage/${emp.id}`} role="button">Update</a>
      <a className='btn btn-danger' onClick={() => deleteEmp(emp.id)}> Delete</a>
     </td>
   </tr>
   ))}
  </tbody>
</table>
   </>
  )
}
