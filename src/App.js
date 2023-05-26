import { useState } from "react";
import React from "react";
import "./App.css";
const Array = [
  {
    name: "Homenaje a la Neurocirugía",
    artist: "Marta Colvin Andrade",
    description:
      "Aunque Colvin es predominantemente conocida por temas abstractos que aluden a símbolos prehispánicos, esta gigantesca escultura, un homenaje a la neurocirugía, es una de sus obras de arte público más reconocibles.",
    url: "https://i.imgur.com/Mx7dA2Y.jpg",
    alt: "Una estatua de bronce de dos manos cruzadas sosteniendo delicadamente un cerebro humano en la punta de sus dedos.",
  },
  {
    name: "Floralis Genérica",
    artist: "Eduardo Catalano",
    description:
      "Esta enorme flor plateada (75 pies o 23 m) se encuentra en Buenos Aires. Está diseñado para moverse, cerrando sus pétalos por la tarde o cuando soplan fuertes vientos y abriéndolos por la mañana.",
    url: "https://i.imgur.com/ZF6s192m.jpg",
    alt: "Una gigantesca escultura de flor metálica con pétalos reflectantes como espejos y fuertes estambres.",
  },
  {
    name: "Eternal Presence",
    artist: "John Woodrow Wilson",
    description:
      'Wilson era conocido por su preocupación por la igualdad, la justicia social, así como por las cualidades esenciales y espirituales de la humanidad. Este bronce masivo (7 pies o 2,13 m) representa lo que él describió como "una presencia negra simbólica infundida con un sentido de humanidad universal"."',
    url: "https://i.imgur.com/aTtVpES.jpg",
    alt: "La escultura que representa una cabeza humana parece omnipresente y solemne. Irradia calma y serenidad.",
  },
  {
    name: "Moai",
    artist: "Artista desconocido",
    description:
      "Ubicados en la Isla de Pascua, hay 1,000 moai, o estatuas monumentales existentes, creadas por los primeros rapa nui, que algunos creen que representan a ancestros deificados.",
    url: "https://i.imgur.com/RCwLEoQm.jpg",
    alt: "Tres bustos monumentales de piedra con las cabezas desproporcionadamente grandes con rostros sombríos.",
  },
  {
    name: "Blue Nana",
    artist: "Niki de Saint Phalle",
    description:
      "Las Nanas son criaturas triunfantes, símbolos de feminidad y maternidad. En un principio, Saint Phalle utilizaba telas y objetos encontrados para las Nanas, y más tarde introdujo el poliéster para conseguir un efecto más vibrante.",
    url: "https://i.imgur.com/Sd1AgUOm.jpg",
    alt: "A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.",
  },
  
];
//pueden agregar un nuevo objeto al array y se mostrara en la galeria juntos con sus demas atributos
const App = () => {
  const [index, setIndex] = useState(0);
  const [Cambio, setCambio] = useState(false);
  const Total = Array.length;
  const Ver = Array[index];
  function IndexCambio() {
    if (index < Array.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function Detalles() {
    if (Cambio === true) {
      setCambio(false);
    } else {
      setCambio(true);
    }
  }
  const Nombre = Cambio ? " Ocultar Detalles" : " Mostrar Detalles";

  return (
    <div className="App">
      <div className="info">
        <h2>
          <i>{Ver.name} </i>
          de {Ver.artist}
        </h2>

        <div className="img">
          <img src={Ver.url} width={"200"}></img>
        </div>

        <div className="botones">
          <button onClick={IndexCambio}>Siguiente</button>
          <button onClick={Detalles}>{Nombre}</button>
        </div>
        <div className="descrip">{Cambio && Ver.description}</div>

        <div>
          {" "}
          <b>
            imagen {index} de {Total}
          </b>
        </div>
      </div>
    </div>
  );
};

export default App;
