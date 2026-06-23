import React from "react";
import ReactDOM from "react-dom/client";

const headingElement = React.createElement(
"h1",
null,
"Hello React from parcel"
);

// JSX --> [ html inside js ] (1%) --> HMTL OR XML LIKE SYNTAX
// Babel
// JSX --> React.createElement() --> JS OBJECT --> HTML DOM
const paraElement = <p>Paragraph</p>;
const btnElement = <button>Click Me</button>;

function Add() {
return <p>Hello</p>;
}

const Add2 = () => {
return <button>Hoahwoq</button>;
};

const Header = () => {
return (
    <>
    <p>Header Component</p> <p>Header Component</p>
    </>
);
};

const Footer = () => {
return (
    <>
    {5+5}
    <p>Hello Footer</p>
    </>
);
};

const Body = () => {
return (
    <>
    <Header/>
    <Footer/>
    </>
)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />);