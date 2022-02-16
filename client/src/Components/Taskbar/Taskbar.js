import "./Taskbar.scss";

import { useState, useEffect } from "react";
// function setDate(newDate) {
//   date = newDate;
// }
export default function Taskbar() {
  let options = {
    hour: "numeric",
    minute: "numeric",
    weekday: "short",
    month: "long",
    day: "numeric",
  };
  // const [date, setDate] = useState(
  //   new Date().toLocaleDateString("en-US", options)
  // );
  const [dateTime, setDateTime] = useState(
    new Date().toLocaleTimeString("en-US", options).replace(",", "")
  );
  useEffect(() => {
    const id = setInterval(
      () =>
        setDateTime(
          new Date().toLocaleTimeString("en-US", options).replace(",", "")
        ),
      1000
    );
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div className="taskbar">
      <ul>
        <li>
          <img src="./assets/apple-logo.png" className="taskbar-icon"></img>
        </li>
        <li className="button-darken">Finder</li>
        <li className="button-darken">File</li>
        <li className="button-darken">Edit</li>
        <li className="button-darken">View</li>
        <li className="button-darken">Go</li>
        <li className="button-darken">Window</li>
        <li className="button-darken">Help</li>
      </ul>
      <ul>
        <li>
          <img src="./assets/full-battery.png" className="taskbar-icon"></img>
        </li>
        <li>
          <img src="./assets/wifi.png" className="taskbar-icon"></img>
        </li>
        <li>
          <img src="./assets/search.png" className="taskbar-icon"></img>
        </li>
        <li>
          <img src="./assets/toggle.png" className="taskbar-icon"></img>
        </li>
        <li>{dateTime}</li>
      </ul>
    </div>
  );
  // setInterval(() => {
  //   setDate(new Date());
  // }, 1000);
}
