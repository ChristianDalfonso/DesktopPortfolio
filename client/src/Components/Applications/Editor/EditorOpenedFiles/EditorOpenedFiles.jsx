import { useState, useRef, useEffect, useCallback } from "react";
import "./EditorOpenedFiles.scss";

export default function EditorOpenedFiles() {
  document.querySelectorAll(".opened-file-button").forEach((item) => {
    item.addEventListener("click", (event) => {
      let currentActive = document.querySelector(".active");
      console.log(currentActive);
      currentActive.classList.toggle("active");
      item.classList.toggle("active");
    });
  });
  return (
    <ul className="opened-files">
      <li className="opened-file-button active button-lighten">index.html</li>
      <li className="opened-file-button button-lighten">index.html</li>
      <li className="opened-file-button button-lighten">index.html</li>
      <li className="opened-file-button button-lighten">index.html</li>
      <li className="opened-file-button button-lighten">index.html</li>
      <li className="opened-file-button button-lighten">index.html</li>
      <li className="opened-file-button button-lighten">index.html</li>
      <li className="opened-file-button button-lighten">index.html</li>
    </ul>
  );
}
