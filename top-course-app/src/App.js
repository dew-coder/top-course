import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData, apiUrl } from "./data";
import { useState } from "react";
import Spinner from "./components/Spinner";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {FcLike} from 'react-icons/fc'

const App = () => {
  const [courses, setCourses] = useState([]);
  const [load, setLoad] = useState(true);
  const [category, setCategory] = useState("All");

  useEffect(()=>{
    const apidata = async()=>{
      setLoad(true)
      try{
        let response =  await fetch(apiUrl);
        let output = await response.json();
        setCourses(output.data);
        console.log(response)
      }
      catch(error){
        toast.error("Something went wrong")
        
      }
      setLoad(false)
    }
    apidata();
  },[])

  console.log(courses);
  return (
    <div className="all">
      <div className="navbar"><Navbar/></div>
      <div className="filterbar"><Filter key={filterData.id} filterData = {filterData} category = {category} setCategory = {setCategory}/></div>
      <div className="main">
        {
          load ? (<Spinner/>) : (<Cards courses = {courses} category={category}/>)
        }
      </div>
      
    </div>
  );
};

export default App;
