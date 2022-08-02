import { useState } from "react";
import { nanoid } from "nanoid";
import NameTag from "./components/NameTag"

export default function App() {

  const [name, setName] = useState("");
  const [namesList, setNamesList] = useState([]);

  console.log(name);
  console.log(namesList);

  const handleSubmit = (e) => {
      e.preventDefault();
      if (name) {
        setNamesList(prevNamesList => [...prevNamesList, name]);
        setName("");
      }
  }

  const nameTagElements = namesList.map(name => <NameTag key={nanoid()} name={name} />)

  return (
    <main>
      <h1>NomNom</h1>
      <p>Name Tag Generator</p>
      <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Add a new name here..."
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <button 
            type="submit"
        >
            Create Name Tag
        </button>
      </form>
      {nameTagElements}
    </main>
  )
}