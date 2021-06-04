// import react from react
import React from "react";

// creates Header component to export, takes in any existing props
const Header = (props) => {
  // returns the following
  return (
    // an html div element
    <div>
      // an h1 element with styles from headerStyle object properties. Contains the title prop passed in
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};

// -- Note: headerStyle uses camelCase because of JSX -- 
// create headerStyle object to be used on the h1
const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};

// exports header component
export default Header;
