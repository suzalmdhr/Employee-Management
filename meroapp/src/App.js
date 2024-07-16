import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import ListEmp from './components/ListEmp';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import EmployeeComponent from './components/EmployeeComponent';
import UpdatePage from './components/UpdatePage';

function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>

   <Hello/>
    <Routes>
      <Route exact path='/' element={<ListEmp/>}/>
      <Route exact path='/add' element ={<EmployeeComponent/>}/>
      <Route exact path='/updatePage/:id' element={<UpdatePage/>}/>
    

    </Routes>
   
    <Footer/>
    </BrowserRouter>
   </>
  );
}

export default App;
