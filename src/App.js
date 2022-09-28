import React, { useEffect, useState } from 'react';
import './App.css';

const ColorSquare = ({ color, ...props }) => {
  return <div className='color-square' style={{ backgroundColor: color }} {...props} />
}
const getRandomNumber = () => Math.round(Math.random() * (255 - 1) + 1);
const getColor = () => `RGB(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`

function App() {
  const [colors, setColors] = useState([]);
  const [colorRandom, setColorRandom] = useState("");
  const [win, setWin] = useState(false);

  useEffect(() => {
    generateColors();
  }, [])

  function generateColors() {

    setWin(false);
    const colors = new Array(4).fill(0).map(getColor);


    setColors(colors); //Actualizamos el estado color con sus dos rgb

    const ColorRandom = Math.floor(Math.random() * colors.length); //escogemos un numero aleatorio del tamaño del array [0,1](0 corresponde a rgb1 y 1 rbg2)
    const newColorRandom = colors[ColorRandom];//escojo el array nuevamente y le doy su nueva posición aleatoria, y lo guardo en una variable nueva
    setColorRandom(newColorRandom);//Actualizo el verdadero color para mostrarlo al usuario y que pueda elegir


  }



  function Label() {
    return (
      <h1 className='text'>{colorRandom}</h1>
    )
  }

  function selectColor(color) {
    if (color == colorRandom) {
      setWin(true);
    }

  }

  return (
    <div className='containerAll'>

      <Label></Label>
      <div className='container'>
        {
          colors.map((color) => (
            < ColorSquare key={color} color={color} onClick={() => selectColor(color)}></ColorSquare>
          ))
        }


      </div>
      {win && <button onClick={generateColors}>Reset</button>}

    </div >

  );
}

export default App;
