import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";

function Footer() {
    return (
      <>
        <footer className="sticky-footer fixed-bottom py-3 text-white">
          <Container className="text-center">
            <small>Copyright &copy; Built by Alejojimenez 2020</small>
          </Container>
        </footer>
      </>
    );
}

export default Footer;
