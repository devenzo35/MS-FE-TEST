import "./styles.css";
import { HelloWorld } from "./HelloWorld";

/*
Debes desarrollar un componente que acepte una prop
llamada text como string y reproduzca el ejemplo
del gif utilizando los estilos proporcionados.
*/

export default function App() {
  return (
    <div className="hello">
      {" "}
      <HelloWorld text="Hello World" />
    </div>
  );
}
