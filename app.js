import { animals } from "./animals.js";

import React from "react";
import ReactDOM from "react-dom";

const title = "";
const showBackground = true;
const background = <img className="background" alt="ocean" src="./images/ocean.jpg"/>;

const imagesAnimals = [];
for(const animal in animals){
  imagesAnimals.push(
    <img
      key = {animal}  
      className = "animal"
      alt = 'test'
      src = {animals[animal].image}
      ariaLabel = {animal}
      role = "button"
      onClick = {displayFact}
      />
  );
};

const animalFacts = (
  <div>
    {showBackground && background}
    <div className="animals">
      {imagesAnimals}
    </div>
    <h1 id="animalFact">{title == "" ? "Click an animal for a fun fact!" : title}</h1>
    <p id="animalFact"></p>
  </div>
  );

function displayFact(e){
  const selectedAnimal = e.target.alt;
  const randomFactIndex = Math.floor(Math.random()*animals[selectedAnimal].facts.length);
  const randomFact = animals[selectedAnimal].facts[randomFactIndex];
  document.getElementById('animalFact').innerHTML = randomFact;
};

ReactDOM.render(animalFacts, document.getElementById("root"));
