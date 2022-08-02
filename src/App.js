import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NameTag from "./components/NameTag";
import logoIcon from "./images/logo-icon.png";

export default function App() {

  const [name, setName] = useState("");
  const [namesList, setNamesList] = useState(() => JSON.parse(localStorage.getItem("names")) || []);

  useEffect(() => {
    localStorage.setItem("names", JSON.stringify(namesList))
  }, [namesList])

  const handleSubmit = (e) => {
      e.preventDefault();
      if (name) {
        setNamesList(prevNamesList => 
          [
            ...prevNamesList,
            {
              id: nanoid(),
              name: name
            } 
          ]);
        setName("");
      }
  }

  const deleteTag = (id) => {
    setNamesList(prevNamesList => prevNamesList.filter(item => item.id !== id ))
  }

  const nameTagElements = namesList.map(item => 
    <NameTag 
      key={item.id} 
      id={item.id} 
      name={item.name} 
      deleteTag={deleteTag}
    />
  );

  return (
    <main>
      <div className="logo">
        <img src={logoIcon} alt="logo" />
        <h1>NomNom</h1>
      </div>
      <p className="app-title">Name Tag Generator</p>
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
      <div className="name-tag-container">
        {nameTagElements}
      </div>
    </main>
  )
}