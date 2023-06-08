import React from "react";
import SaveIcon from "@material-ui/icons/Save";

export function SaveIconButton({onSave, userId}) {
  return (
    <button
      className="save-button btn-success border-0 rounded-pill"
      onClick={() => onSave(userId)}
    >
      <SaveIcon />
    </button>
  );
}