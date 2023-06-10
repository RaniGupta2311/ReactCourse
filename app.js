import React from "react";
import ReactDOM from "react-dom/client";

/*
* HMR-Hot Module Replacement
* File Watcher Algorithm (written in C++)
* BUNDLIING
* MINIFY
* DEV AND Production build
* Super fast build algorithm
* Image Optimaztion
* Caching while development
* Compression
* Compatible with older version of browser
* HTTPS on dev
* manages port number
* consistent hashing algorithm
* zero config 
*/

// const heading=React.createElement("h1",{},"Namaste everyone in react");
//         const root=ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);

const heading1 = React.createElement("h1", { id: "title" }, "Heading1");
const heading2 = React.createElement("h2", { id: "title2" }, "Heading2");
const container = React.createElement("div", { id: "container",hello:"world" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);