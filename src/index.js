import React from "react"
import reactdom from "react-dom/client"
import App from "./App"

let el=document.getElementById("root");

let root=reactdom.createRoot(el);

root.render(<App/>)

