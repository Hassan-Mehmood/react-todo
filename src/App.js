import "./App.css";
import Header from "./components/header/Header";
import Field from "./components/field/Field";
import Cards from "./components/cards/Cards";

function App() {
  return (
    <div className="App">
      <Header />
      <Field></Field>
      <Cards></Cards>
    </div>
  );
}

export default App;
