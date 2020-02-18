import React, { useEffect, useState } from "react";
import axios from "axios";
import './index.css'
import {useLocalStorage} from './utils/useInput'


function App(props) {
  const [data, setData] = useLocalStorage("data", []);
  const [breed, setBreed] = useLocalStorage("breed", "husky");

  const handleChange = event => {
    setBreed(event.target.value);
  };

  const fetchDogImages = () => {
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random/5`)
      .then(res => {
        console.log(res.data.message);
        setData(res.data.message);
      });
  };

  useEffect(() => {
    fetchDogImages();
  }, [breed]);

  return (
    <div className="app">
      <header>
        <h1>DOGGIES</h1>
        <div className="select">
          <select value={breed} onChange={handleChange}>
            <option selected disabled>Choose a breed</option>
            <option value="husky">Husky</option>
            <option value="beagle">Beagle</option>
            <option value="corgi">Corgi</option>
          </select>
        </div>
        
      </header>
      

      <ul className="dogs">
        {data.map((image, index) => {
          return <li><img key={index} src={image} alt="dog" /></li>;
        })}
      </ul>
    </div>
  );
}
export default App;
