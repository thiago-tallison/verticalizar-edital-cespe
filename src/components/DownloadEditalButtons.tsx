import React from "react";

import "./DownloadEditalButtons.css";

export const DownloadEditalButtons = (props) => {
  return (
    <button onClick={props.handleOnClick} className="download-button">
      Download {props.label}
    </button>
  );
};
