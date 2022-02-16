import "./EditorSidenav.scss";

import React from "react";

export default function EditorSidenav() {
  return (
    <ul className="editor-side-nav">
      <li>
        <img src="file.png" alt="" srcSet="" className="button-lighten" />
      </li>
      <li>
        <img
          src="search-interface-symbol.png"
          alt=""
          srcSet=""
          className="button-lighten"
        />
      </li>
      <li>
        <img src="git.png" alt="" srcSet="" className="button-lighten" />
      </li>
      <li>
        <img src="bug.png" alt="" srcSet="" className="button-lighten" />
      </li>
      <li>
        <img src="extension.png" alt="" srcSet="" className="button-lighten" />
      </li>
    </ul>
  );
}
