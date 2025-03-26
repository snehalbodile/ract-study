import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement("h1",
//     {id:"heading"},
//     "Hello world from React js");
// const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(heading);

//Class Element 
const title = (
       <h1 id="heading" className="heading">Namaste react By using JSX</h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(title);

//React functional component

const HeadingComponent1 = () => {
    return  <h1 id="heading" className="heading">Namaste react By using JSX</h1>
};

const HeadingComponent2 = () => {
  
  return (<div id="container">
        <HeadingComponent1/>
        <h1 id="heading" className="heading">Namaste react By using component composition</h1>
    </div>); 
    
};
root.render(<HeadingComponent2/>);
