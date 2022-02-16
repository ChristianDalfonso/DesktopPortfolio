import "./ApplicationTaskbar.scss";
// import { useState } from "React";
import { useState } from "react";
export default function ApplicationTaskbar(props) {
  const { windowPosition, setWindowPosition } = useState("");
  return (
    <ul className="application-taskbar">
      <li id="close"></li>
      <li id="resize"></li>
      <li id="minimize"></li>
    </ul>
  );
}
