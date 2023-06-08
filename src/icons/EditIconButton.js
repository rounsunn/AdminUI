import React from "react";
import EditIcon from "@material-ui/icons/Edit";

export function EditIconButton({onEdit, user}) {
  return (
    <button
      className="edit-button btn-warning border-0 rounded-pill"
      onClick={() => onEdit(user)}
    >
      <EditIcon />
    </button>
  );
}