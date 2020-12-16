import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container,Button } from "semantic-ui-react";
import "./style.css";

const Landing = () => {
  return (
    <>
      <div style={{ color: "white", fontFamily: "fantasy", fontSize: "4rem" }}>
        TODO-LIST
      </div>
      <div style={{color:"white",fontSize:"1.5rem"}}>
          <p>THIS APP IS BUILT USING MERN STACK ON UBUNTU BASED THEME</p>
          <span>This app uses jwt for login/signup and bcryptjs for password hashing</span> 
          <p>This app is todo list app in which you can perform add,delete,modify and it uses react hooks</p>
          <span>This app also have drag and drop feature</span>
          <p>All users store in mongodb Atlas and there is a seperate page for users on navbar where you can find all users info</p>
        </div>
      <div>
        <Container>
          <Button primary as={Link} to="/login" style={{ margin: "1%" }}>
            Sign-in
          </Button>
          <Button secondary as={Link} to="/register" style={{ margin: "1%" }}>
            Register
          </Button>
        </Container>
      </div>
    </>
  );
};

export default Landing;
