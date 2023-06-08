import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

export function DeleteIconButton({onDelete, userId}) {
  return (
    <button
      className="trash-button btn-danger border-0 rounded-pill mr-1"
      onClick={() => onDelete(userId)}
    >
      <DeleteIcon />
    </button>
  );
}