import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setcolorOne] = useState([]);
  const [colorRandom, setColorRandom] = useState("");


  function randomColors() {
    //SE GENERA EL 1R RGB(NUM1,NUM2,NUM3) CON CADA PARAMETRO ALEATORIO
    const num1 = Math.round(Math.random() * (255 - 1) + 1);
    const num2 = Math.round(Math.random() * (255 - 1) + 1);
    const num3 = Math.round(Math.random() * (255 - 1) + 1);
    //SEGUNDO RGB...
    const num4 = Math.round(Math.random() * (1 + 255 - 1) + 1);
    const num5 = Math.round(Math.random() * (1 + 255 - 1) + 1);
    const num6 = Math.round(Math.random() * (1 + 255 - 1) + 1);
    const colors1 = `RGB(${num1},${num2},${num3})`
    const colors2 = `RGB(${num4},${num5},${num6})`
    const array = [colors1, colors2]// Guradamos los dos RGB en un Array [rgb1, rgb2]

    setcolorOne([colors1, colors2]); //Actualizamos el estado color con sus dos rgb

    const ColorRandom = Math.floor(Math.random() * array.length); //escogemos un numero aleatorio del tamaño del array [0,1](0 corresponde a rgb1 y 1 rbg2)
    const newColorRandom = array[ColorRandom];//escojo el array nuevamente y le doy su nueva posición aleatoria, y lo guardo en una variable nueva
    setColorRandom(newColorRandom);//Actualizo el verdadero color para mostrarlo al usuario y que pueda elegir
    console.log(newColorRandom);
    console.log(ColorRandom);

  }



  function Label() {
    return (
      <h1 className='text'>{colorRandom}</h1>
    )
  }

  function divClick(e) {

    /*console.log(e.currentTarget);
    console.log(e.currentTarget.style.backgroundColor);
    console.log(color[0]);*/
    if (color[0] == colorRandom) {
      console.log("correcto");
    } else { console.log("acertaste") }
  }

  return (
    <div className='containerAll'>

      <Label></Label>
      <div className='container'>
        <div className='colorOne' style={{ backgroundColor: color[0] }} onClick={divClick}></div>
        <div className='colorTwo' style={{ backgroundColor: color[1] }} onClick={divClick}></div>


      </div>
      <button onClick={randomColors}>color</button>

    </div>

  );
}

export default App;
