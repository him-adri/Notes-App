import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Note({ id, text, date, handleDelete }) {
  return (
    <div className="note">
      <span>{text}</span>

      <div className="note-footer">
        <small>{date}</small>
        <DeleteForeverIcon
          onClick={() => handleDelete(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
}

export default Note;
