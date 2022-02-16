import ApplicationTaskbar from "../ApplicationTaskbar/ApplicationTaskbar";
import EditorSidenav from "./EditorSidenav/EditorSidenav";
import EditorOpenedFiles from "./EditorOpenedFiles/EditorOpenedFiles";
import EditorCode from "./EditorCode/EditorCode";
import "./Editor.scss";
import { useState } from "react";
import { Rnd } from "react-rnd";

export default function Editor() {
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(300);
  const [x, setX] = useState(100);
  const [y, setY] = useState(50);
  return (
    <Rnd
      size={{ width, height }}
      position={{ x, y }}
      onDragStop={(e, d) => {
        setX(d.x);
        setY(d.y);
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setWidth(ref.style.width);
        setHeight(ref.style.height);
      }}
      minWidth={"250px"}
      minHeight={"100px"}
      dragHandleClassName="application-taskbar"
    >
      <div className="container">
        <ApplicationTaskbar></ApplicationTaskbar>
        <div className="editor-body">
          <EditorSidenav></EditorSidenav>
          <div className="editor-right">
            <EditorOpenedFiles></EditorOpenedFiles>
            <EditorCode></EditorCode>
          </div>
        </div>
      </div>
    </Rnd>
  );
}
