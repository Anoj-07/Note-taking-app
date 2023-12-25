import React, { useEffect, useState } from "react";

import "./App.css";

import Sidebar from "./Components/Sidebar/Sidebar";
import NoteContainer from "./Components/NoteContainer/NoteContainer";

function App() {
  //notes
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("NOTE-TAKING-APP")) || []
  );

  //addnotes (Create Notes)
  const addNote = (color) => {
    const tempNotes = [...notes];

    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  //deleteNote (Delete Notes)
  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  //upadateText (Update Note)
  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text=text;
    setNotes(tempNotes);
  };


  //Local Storage
  useEffect(() => {
    localStorage.setItem("NOTE-TAKING-APP", JSON.stringify(notes));
  });

  return (
    <>
      <div className="App">
        <Sidebar addNote={addNote} />
        <NoteContainer
          notes={notes}
          deleteNote={deleteNote}
          updateText={updateText}
        />
      </div>
    </>
  );
}

export default App;
