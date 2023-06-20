import React, { useEffect, useState } from 'react'
import Search from './Components/Search'
import Result from './Components/Result'
import axios from 'axios'

const App = () => {
   const [search, setSearch] = useState("");
   const [weather, setWeather] = useState([]);
   const [history, setHistory] = useState([]);

   const fetchDataa = (e) => {
    setSearch(e)
   }

   const historySearchHandler = (data) => {
    // setSearch(data);
    if(data != ""){
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`
        ).then((res) => {
           console.log(res)
           setWeather(res.data)
        }).catch((err) => {
           console.log(err)
           alert('Please enter valid city');
        })
    }
   }

  const searchWeatherHandler = () => {
    
    if(search != ""){
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`
        ).then((res) => {
           console.log(res)
           if(history.indexOf(search) === -1){
            setHistory([
              ...history, search
            ])
          }
           setWeather(res.data)
        }).catch((err) => {
           console.log(err)
           alert('Please enter valid city');
        })
        setSearch('')
    } else {
      alert("Search Cannot be blank")
      return false
    }
    
  }

  return (
    <div className='max-w-[1240px] mx-auto mt-2 p-3'>
      <Search searchData={search} fetchData={fetchDataa} searchWeather={searchWeatherHandler}/>
      <Result weatherData={weather} historyData={history} historySearch={historySearchHandler}/>
    </div>
  )
}

export default App
