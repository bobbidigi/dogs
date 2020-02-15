import React, { useEffect, useState } from "react";
import axios from "axios";
import './index.css'


function App(props) {
  const [data, setData] = useState([]);
  const [breed, setBreed] = useState("husky");

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
    <div>
      <header>
        <h1>DOGGIES</h1>
        <select value={breed} onChange={handleChange}>
          <option value="husky">Husky</option>
          <option value="beagle">Beagle</option>
          <option value="corgi">Corgi</option>
        </select>
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
