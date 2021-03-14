import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        
        <a
        className="badge badge-info"
        rel="noopener"
        href="https://www.linkedin.com/in/Dhruval10/"
        aria-label="My LinkedIn"
      >
        Dhruval Shah
      </a>{" "}
      {/* using <i className="fab fa-react"></i> */}
      <p>
        <small className="text-muted">
          {" "}
          Let's get connected on LinkedIn ☝🏽
        </small>
      </p>
      </Container>
    </footer>
  );
};

export default Footer;
