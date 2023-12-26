import React from "react";
import "./Note.css";
import Delete from "../../Asset/Delete.png";

function Note(props) {
  
  let timer=90,
  timeout;

  //Time and Date
  const formateDate = (value) => {
    if (!value) return "";

    const date = new Date(value);
    const monthName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let hrs = date.getHours();
    hrs = hrs < 10 ? `0${hrs}` : `${hrs}`;

    let amPm = hrs > 12 ? "PM" : "AM";

    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? `0${min}` : `${min}`;

    let day = date.getDate();

    let month = monthName[date.getMonth()];

    return `${hrs}:${min} ${amPm}  ${day}  ${month}`;
  };

  // for debounce
  const debounce = (func)=>{
    clearTimeout(timeout)
    timeout = setTimeout(func, timer);
  }

  //for Upadte Text in local host
  const updateText = (text, id)=>{
    debounce(()=>props.updateText(text, id));
  }


  return (
    <div className="note" style={{ background: props.note.color }}>
      <textarea className="note_text" value={props.note.text}
      onChange={(event)=>
        updateText(event.target.value, props.note.id)}
        />

      <div className="note_footer">
        <p>{formateDate(props.note.time)}</p>
        <img
          src={Delete}
          alt="DELETE"
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
}

export default Note;
