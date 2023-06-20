import React from "react";

const Result = ({weatherData, historyData, historySearch}) => {

  const historyList = historyData.map((item, index)=>{
       return <li onClick={() => historySearch(item)} className="cursor-pointer text-xl capitalize" key={index}>{item}</li>
  })

  return (
    <div className="grid grid-cols-4 shadow-xl mt-5 p-2">
        <div className="col-span-1 border-r-2">
           <span className="text-center block font-bold">History</span>
           <ul>
            {/* <li>Belgaum</li>
            <li>Kolhapur</li>
            <li>Bangalore</li> */}
            { historyList }
           </ul>
        </div>
        <div className="col-span-3">
        {weatherData.length !== 0 ? (
        <>
          <h2 className="text-4xl text-center">City Name: {weatherData.name}</h2>
          <div className="text-2xl flex justify-around my-2">
            <div>Max Temp: {weatherData.main.temp_max}</div>
            <div>Min Temp: {weatherData.main.temp_min}</div>
          </div>
          <div className="text-2xl flex justify-around my-2 items-center">
            <div>
                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
            </div>
            <div>Weather Type: {`${weatherData.weather[0].main}`}</div>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-center p-3 text-5xl">Please enter the city name.</h3>
        </>
      )}
        </div>

    </div>
  );
};

export default Result;
