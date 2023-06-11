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
 * Tree Shaking - remove unwanted code
 */

// const heading=React.createElement("h1",{},"Namaste everyone in react");
//         const root=ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);

// React.createElement=>Object=>HTML(DOM)
// const heading1 = React.createElement("h1", { id: "title" ,key:"h1"}, "Heading1");
// const heading2 = React.createElement("h2", { id: "title2" ,key:"h2"}, "Heading2");
// const container = React.createElement("div", { id: "container",hello:"world" }, [
//   heading1,
//   heading2,
// ]);

// JSX=>React.createElement=>Object=>HTML(DOM)
const heading = (
  <h1 id="title" key="h1">
    Namaste React
  </h1>
);

// React Component
// Functional Component-new
// Class Component - old

const HeaderComponent = () => {
  return <h1>Namaste React Functional Component</h1>;
};
// for single line
const HeaderComponent2 = () => {
  return (
    <div>
      <h1>Namaste React Functional Component</h1>
      <h2>Namaste React Functional Component</h2>
    </div>
  );
};
// for multiline
const HeaderComponent3 = () => {
  return (
    <div>
      {heading}
      <h1>Namaste React Functional Component</h1>
      <h2>This is h2 tag</h2>
    </div>
  );
};
// using component inside component
const Title = ()=>{
return (
  <h1 id="title" key="h1">
    Namaste React Title
  </h1>);
}
const HeaderComponent4 = () => {
  return (
    <div>
      <Title/>
      <h1>Namaste React Functional Component</h1>
      <h2>This is h2 tag</h2>
    </div>
  );
};
// we can write coponent inside component in {} also
const Title2 = ()=>{
  return (
    <h1 id="title" key="h1">
      Namaste React Title2
    </h1>);
  }
  const HeaderComponent5 = () => {
    return (
      <div>
        {Title2()}
        <h1>Namaste React Functional Component</h1>
        <h2>This is h2 tag</h2>
      </div>
    );
  };
// Component composition- component inside comonent is called component composition
// We can write JS inside {}
const xyz=10;
const a=20;
const HeaderComponent6 = () => {
  return (
    <div>
      {xyz}
      {console.log(a)}
      <h1>Namaste React Functional Component</h1>
      <h2>This is h2 tag</h2>
      {1+4}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeaderComponent6/>);
