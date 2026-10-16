import logo from './logo.svg';
import react from 'react'
import './App.css';

import React from 'react';
//import UserList from "./UserList";
import { useEffect, useState } from "react";
//import axios from "axios";
//import Dashboard from "./Dashboard";
import axios from "axios";
import StudentList from './StudentList'
import {Paper, Container, TextField, Button, Typography, Box, CircularProgress, Stack } from "@mui/material";



//import Parent from "./Parent";
//import EmployeePage from "./EmployeePage";
//import Home_Task from './Task/Home_Task';
//import Count from './Count';
//import GetData from './GetData';
//import EliteTask3 from './EliteTask3';
//import axios from 'axios'
//import {useEffect} from 'react'
/*import FormControl from '@mui/material/FormControl'
import TextField from  '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'*/
//import Typography from '@mui/material/Typography'
//import Box from '@mui/material/Box'

// import Header from './Header';
// import ArrowFunction from './ArrowFunction';
// import ObjectEx from './ObjectEx';
// import Project from './Project';
// import Task from './Task';
// import Accordion from './Accordion';
// import ModalBox from './ModalBox';
// import Spread from './Spread';

/*import Acc2 from './Acc2';
import React from 'react';
*/
//import './App.css';

/*import ErrorHandling from './ErrorHandling';
import Product from './Product';
import Home from './Home';
import About_Task from './Task/About_Task';
import Accordion_Task from './Task/Accordion_Task';
import Contact_Task from './Task/Contact_Task';
import Login_Task from './Task/Login_Task';
import Projects_Task from './Task/Projects_Task';
import Skills_Task from './Task/Skills_Task';

import adidasImg from './adidas shoe.jpg';
import pumaImg from './puma shoe.jpg';
import nikeImg from './nike shoe.avif';
import socks1Img from './socks1.jpg';
import socks2Img from './socks2.jpg';
import socks3Img from './socks3.jpg'

import { 
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home_Task from './Task/Home_Task';*/



//function App() {
 /* const obj = {
    name: "Dhivya",
    email: "dhivya@example.com",
    mobile: "9876543210",
  };

  const productObj = [
    {
      name: "Adidas",
      price: "3000",
      strikePrice: "5000",
      image: adidasImg,
    },
    {
      name: "Puma",
      price: "2500",
      strikePrice: "3500",
      image: pumaImg,
    },
    {
      name: "Nike",
      price: "4000",
      strikePrice: "6000",
      image: nikeImg,
    },
  ];

  const productSOCK = [
    {
      name: "FRIDO Socks",
      price: "300",
      strikePrice: "500",
      image:socks1Img,
    },
    {
      name: "HRX Socks",
      price: "250",
      strikePrice: "350",
      image: socks2Img,
    },
    {
      name:"HEELIUM Socks",
      price: "400",
      strikePrice: "500",
      image: socks3Img,
    },
  ];*/

  //return (
    {/*<BrowserRouter >
      <nav >

        <Link to="/">Home | </Link>{" "}
        <Link to="/product">Product | </Link>{" "}
        <Link to="/socks">Socks | </Link>{" "}
        <Link to="/admission">Admission Enquiry |</Link>{" "}
        <Link to="/About_Task">About |</Link>{" "}
        <Link to="/Accordion_Task">Accordion |</Link>{" "}
        <Link to="/Contact_Task">Contact |</Link>{" "}
        <Link to="/Home_Task">Home |</Link>{" "}
        <Link to="/Login_Task">Login |</Link>{" "}
        <Link to="Projects_Task">Projects |</Link>{" "}
        <Link to="/Skills_Task">Skills </Link>{" "}
      </nav>

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
         <Route
          path="/About"
          element={<About_Task />}
        />
         <Route
          path="/Accordion"
          element={<Accordion_Task />}
        />
         <Route
          path="/Contact"
          element={<Contact_Task />}
        />
         <Route
          path="/Home"
          element={<Home_Task />}
        />
         <Route
          path="/Login"
          element={<Login_Task />}
        />
         <Route
          path="/Projects"
          element={<Projects_Task />}
        />
         <Route
          path="/Skills"
          element={<Skills_Task />}
        />

        <Route
          path="/product"
          element={<Product productObj={productObj} />}
        />

        <Route
          path="/socks"
          element={<Product productObj={productSOCK} />}
        />

        <Route
          path="/admission"
          element={<ErrorHandling data={obj} />}
        />
      </Routes>
    </BrowserRouter>*/}
  
    
 /* );
}*/


function App(){
 const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => { setStudents(res.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const handleAddStudent = (e) => {
    e.preventDefault();
    

    setStudents([...students, {
      id: Date.now(),
      name,
      username,
      email,
      address: address.trim() ? { suite: address } : null
    }]);
    setName(""); setUsername(""); setEmail(""); setAddress("");
  };

 
  /*const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

   /*const employee = {
    name: "Priya",
    role: "Frontend Developer",
    salary: 30000,
    skills: ["React", "JavaScript", "CSS"]
  };*/
    /*const student = {
    name: "Arun",
    department: "MERN Stack"
  };*/
  /*useEffect(()=>{
    axios.get("http://localhost:5000/weather")
    .then((res)=>console.log(res.data))
  },[])*/
  return(
    <div>
      <Container maxWidth="sm" sx={{ py: 4 }}>
  <Typography variant="h4" gutterBottom align="center" fontWeight="bold" color="primary">Student Card</Typography>
  
  <Paper elevation={3} sx={{ mb: 4, p: 3, borderRadius: 2 }} component="form" onSubmit={handleAddStudent}>
    <Stack spacing={2}>
      <Paper variant="outlined" sx={{ p: 1, display: "flex", alignItems: "center" }}>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} style={{ width: "100%", border: "none", outline: "none", padding: "8px" }} />
      </Paper>
      <Paper variant="outlined" sx={{ p: 1, display: "flex", alignItems: "center" }}>
        <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} style={{ width: "100%", border: "none", outline: "none", padding: "8px" }} />
      </Paper>
      <Paper variant="outlined" sx={{ p: 1, display: "flex", alignItems: "center" }}>
        <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: "100%", border: "none", outline: "none", padding: "8px" }} />
      </Paper>
      <Paper variant="outlined" sx={{ p: 1, display: "flex", alignItems: "center" }}>
        <input placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} style={{ width: "100%", border: "none", outline: "none", padding: "8px" }} />
      </Paper>
      <Button type="submit" variant="contained" size="large" fullWidth>Add Student</Button>
    </Stack>
  </Paper>

  {loading ? (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mt: 4 }}>
      <CircularProgress size={28} /> <Typography color="text.secondary">Loading data from API...</Typography>
    </Box>
  ) : <StudentList students={students} />}
</Container>

  
    
      {/*<Dashboard products={products} loading={loading} />*/}
      {/*} <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", py: 4 }}>
      <Typography style={{fontWeight:"bold" ,color:"Blue"}} variant="h3" component="h1" align="center" fontWeight="bold" gutterBottom>
        User Directory
      </Typography>
      <UserList />
    </Box>*/}
       {/*<EmployeePage employee={employee} />;*/}
      {/*<Parent student={student} />;*/}
    {/*<br/>
     <Paper elevation={7} style={{width:'30%',textAlign:"center",padding:'7%',height:'40%',marginLeft:"35%"}}>
      <Box sx={{
        width:100,
        height:100,
        borderRadius:1,
        boxShadow:'4',
        borderRadius:'50%',
        margin:'auto',
        display:'flex',
        alginItems:'center',
        justifyContent:'center',
        marginBottom:'20px'
      }}>
       
      </Box>
      <Typography varient="h5" color='primary' fontWeight='bold'style={{marginBottom:"100px"}}>Welcome User!</Typography>
     <div style={{display:'flex',gap:'10px',flexDirection:"column",width:"80%", marginLeft:"10%"}}>
     <TextField helperText='Username is required' variant='outlined' label='username' onChange={(e)=>console.log(e.target.value)}/><br />
     
     <TextField  type='password' helperText='Password is required' variant='outlined' label='password'/>
     <Button variant="contained">Sign Up</Button>*/}
     {/* <Count/>*/}
     {/*<GetData/>*/}
     {/*<Home_Task />*/}
     {/*This is to test pull os working */}
     {/*<EliteTask3/>*/}
     {/*</div>
     </Paper>*/}
    </div>
   
  );
}
export default App;
