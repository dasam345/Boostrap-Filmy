import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [tytul, setTytul] = useState("");
  const [rodzaj, setRodzaj] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Tytuł: ${tytul}, Rodzaj: ${rodzaj}`);
  };

  return (
    <>
      <form>
        <div classname="container" style={{padding: "20px"}}>
          <form onSubmit={handleSubmit}/>
          <label for="film" class="form-label">
            Tytuł Filmu
          </label>
          <input type="text" class="form-control" id="film" />
        </div>
      </form>
      <select class="form-select" aria-label="Default select example">
        <option selected></option>
        <option value="1">Komedia</option>
        <option value="2">Obyczajowy</option>
        <option value="3">Sensacyjny</option>
        <option value="4">Horror</option>
      </select>
      <button type="submit" class="btn btn-primary">
        Dodaj
      </button>
    </>
  );
}

export default App;
