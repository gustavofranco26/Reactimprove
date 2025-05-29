import { useState, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState<number>(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log("el contador ha cargado");
  }, []);

  useEffect(() => {
    console.log("el contador ha cambiado");

    return () => {
      console.log("el contador ha sido destruido");
    };
  }, [counter]);

  return (
    <div>
      <p>El contador es: {counter}</p>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
}

export default Counter;