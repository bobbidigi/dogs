import React, { useEffect, useState } from "react";
import axios from "axios";

function App(props) {
  const [data, setData] = useState([]);
  const [breed, setBreed] = useState("husky");

  const handleChange = event => {
    setBreed(event.target.value);
  };

  const fetchDogImages = () => {
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random/1`)
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
      <h1>DOGGYS</h1>

      <select value={breed} onChange={handleChange}>
        <option value="husky">Husky</option>
        <option value="beagle">Beagle</option>
        <option value="corgi">Corgi</option>
      </select>

      <div>
        {data.map((image, index) => {
          return <img key={index} src={image} alt="dog" />;
        })}
      </div>
    </div>
  );
}
export default App;
