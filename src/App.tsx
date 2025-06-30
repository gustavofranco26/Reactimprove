import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from "react";
import { auth, googleProvider } from "./firebase/config.ts";
import { signInWithPopup, signOut, User } from "firebase/auth";

function App() {
  const [user, setUser] = useState<User | null>(null);

  const handleClick1 = () => {
    console.log("click 1");
  };

  const loginGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      console.log("Usuario logueado:", result.user);
    } catch (err) {
      console.error("Error al iniciar sesión:", err);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <section>
      {user ? (
        <>
          <h2>Hola, {user.displayName}</h2>
          <img src={user.photoURL || ""} alt="avatar" width="50" />
          <button onClick={logout}>Cerrar sesión</button>
          <h1>hola mundo</h1>
          <Counter />
          <Button handleClick={handleClick1}>
            <span>Submit</span> 🥲
          </Button>
        </>
      ) : (
        <button onClick={loginGoogle}>Iniciar sesión con Google</button>
      )}
    </section>
  );
}

export default App;
