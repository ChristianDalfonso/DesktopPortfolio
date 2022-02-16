import React, { useState } from "react";

import "./Desktop.scss";
import Editor from "../Applications/Editor/Editor";
import Taskbar from "../Taskbar/Taskbar";
import Application from "../Applications/ApplicationShortcuts/ApplicationShortcuts";
// import ApplicationTaskbar from "../Editor/ApplicationTaskbar/ApplicationTaskbar";

export default function Desktop() {
  const [width, setWidth] = useState({ width: "400px" });
  const [height, setHeight] = useState({ height: "400px" });
  return (
    <div className="desktop">
      <Taskbar></Taskbar>
      <Application
        url="https://www.linkedin.com/in/christian-dalfonso/"
        location="./assets/LinkedIn_icon_circle.png"
        label="Linkedin"
        pos={{ x: 20, y: 20 }}
      ></Application>
      <Application
        url="https://github.com/ChristianDalfonso"
        location="./assets/GitHub-Mark-64px.png"
        label="Github"
        pos={{ x: 20, y: 80 }}
      ></Application>

      <Editor></Editor>
    </div>
  );
}
