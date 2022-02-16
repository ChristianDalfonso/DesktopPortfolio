import "./EditorCode.scss";
import { useState, useEffect } from "react";
export default function EditorCode() {
  // let body = "dasjidjuasiduasiduasidas";
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 5000);
  }, []);
  // let keyhandler = (e) => {
  //   if (e.keyCode > 47 && e.keyCode < 91) {
  //     console.log(e);
  //   } else {
  //     if (e.keyCode === 9) {
  //       e.preventDefault();
  //       let input = document.querySelector("textarea");
  //       input.value += "\t";
  //     }
  //   }
  // };
  return (
    // <textarea
    // // cols="30"
    // // rows="10"
    // // className="text-editor"
    // // data-gramm="false"
    // // // onKeyDown={keyhandler}
    // // readOnly="true"
    // >
    //   {bodyIndex}
    // </textarea>
    <p>{count}</p>
  );
}
