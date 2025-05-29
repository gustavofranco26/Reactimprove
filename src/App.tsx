import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  const handleClick1 = () => {
    console.log("click 1");
  };

  return (
    <section>
      <h1>hola mundo</h1>
      <Counter handleClick={handleClick1}>
        <span>Hola</span>
      </Counter>
      { <Button handleClick={handleClick1}>
        <span>Submit</span>
        🥲
      </Button>}
    </section>
  );
}

export default App;