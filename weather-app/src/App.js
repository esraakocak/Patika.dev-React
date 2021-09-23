import React,{useState} from "react";
import "./App.css";
import sun from './assets/sun.svg';
import defaultBackImage from './assets/weather.png';
const API_KEY='612c96dc4a205515a88624925a51fcdc';



function App() {
 const[backImage,setBackImage] =useState(defaultBackImage);
 const [searchText, setSearchText] = useState();
 const[findedCity,setFindedCity] = useState({name:'',temp:0});
 const fetchWeatherByCityName=()=>{

   if(searchText.length >3) {
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+searchText+'&units=metric&appid='+API_KEY)
    .then((response)=>response.json())
    .then((json)=>{
      setFindedCity({name:json.name,temp:json.main.temp})
      console.log("hava durumu",json);
    })
   }
  
 }

  return (
    <div className="App" style={{backgroundImage: `url(${backImage})`}}>
      <div className="searchInput">
      <input 
      value={searchText}
      onChange={( e ) => {

        setSearchText(e.target.value)

      }}
         placeholder="Enter the city "  />

         <div>
           <div className="searchBtn"> 
           <button onClick={fetchWeatherByCityName}>arama yap</button>
           </div>
           </div>
         </div>
          {findedCity.name!=='' && 
        <div className="weatherWrapper">
          {findedCity.name}   {findedCity.temp} °C
         
        </div>
}
    </div>
  );
}

export default App;
