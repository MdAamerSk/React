import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const App = () => {

const [searchData, setSearchData] = React.useState("");
const [productsData, setProductsData] = React.useState([]);
const [filteredData, setFilteredData] = React.useState([]);
const [scrollY, setScrollY] = React.useState(null);

let throttle = false;

let getProducts =async () =>{
 try{
   let res = await axios.get("https://fakestoreapi.com/products");
   setProductsData(res.data);
 }
 catch(error){
  console.log(error);
 }
}

let filteredata = ()=>{
  console.log("searching data....");
  let result = productsData.filter((val)=>{
    return val.title.toLowerCase().includes(searchData.toLowerCase());
  })
  setFilteredData(result);
}

//debouncing
useEffect(()=>{
  if(!searchData) return; // if searchData is empty, we don't want to filter the data, so we return early
 
 let timeout = setTimeout(()=>{
  filteredata();
 },700)
 return () => clearTimeout(timeout); // cleanup function to clear the timeout if the component unmounts or if searchData changes before the timeout completes

}
,[searchData])

//throttling
useEffect(() => {
    let handleScroll = () => {
      if (throttle) return;
      throttle = true;
      console.log("scroll triggered...");
      setScrollY(window.scrollY);

      setTimeout(() => {
        throttle = false;
      }, 10000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

useEffect(()=>{
  getProducts();
},[])

  return (
    <div>
      <h1>Debouncing </h1>

      <input style={{ padding: '10px', margin: '10px' }} type="text" placeholder='search products' onChange={(e)=>setSearchData(e.target.value)}/>

      <br />
   
      {
        filteredData.map((val)=>{
          return(
            <div key={val.id}>
              <h2>{val.title}</h2>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
