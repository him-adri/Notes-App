import React, { useState, useEffect } from "react";
import NotesList from "./Components/NotesList";
import { nanoid } from "nanoid";
import Search from "./Components/Search";
import Header from "./Components/Header";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Started DSA Class",
      date: "30/11/2021",
    },
    {
      id: nanoid(),
      text: "Started Frontend Class",
      date: "03/03/2022",
    },
    {
      id: nanoid(),
      text: "Started ReactJS Class",
      date: "01/06/2022",
    },
  ]);

  const [searchNote, setSearchNote] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
    console.log("Inital notes", savedNotes);
  }, []);
 
  useEffect(() => {
    console.log(notes);
    window.localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
   
  }, [notes]);
  
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    console.log(notes, "Notes");
  };
  
  const deletingNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />

        <Search handleSearch={setSearchNote} />

        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchNote)
          )}
          handleAddNote={addNote}
          handleDelete={deletingNote}
        />
      </div>
    </div>
  );
}

export default App;