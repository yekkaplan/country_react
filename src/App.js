import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountryCard from './components/card';

/**
 * 
 *  fetch data with mount
 */


function App() {

  let [data, setData] = useState();

  let [isLoading, setLoading] = useState(false);

  async function getDataAPI() {
    await axios.get("https://restcountries.eu/rest/v2/all").then(function (response) {
      setData(response.data);
      setLoading(true);
      console.info(response.data);

    })
  }


  useEffect(() => {
    getDataAPI();
  }, []);

  return (
    (isLoading) ?
      <div className="App">
        {


          data.map((element, index) => (

            <div className="centerDiv">

              <CountryCard  {...element} />

            </div>
          )


          )
        }

      </div >
      : <div className="LoadingDiv"> Loading..</div>);


}



export default App;
