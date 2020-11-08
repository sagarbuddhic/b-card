import React, { useRef } from "react";
/** @jsx jsx */ import { jsx } from "@emotion/core";
import Button from "react-bootstrap/Button";
import Label from "react-bootstrap/FormLabel";
import logo from "./logo.svg";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import "./App.css";
import * as styles from "./App.style";
import { HelpBlock } from "react-bootstrap";

//     <Form noValidate>
//   <Container>
//      <Row>
//        <Col>
//           <Image thumbnail />
//        </Col>
//        <Col>
//           <span ref={firstNameLabel}>
//           </span>
//           <span ref={lastNameLabel}>
//           </span>
//        </Col>
//      </Row>
//   </Container>
// </Form>
//  <Form noValidate>
//     <Form.Row>
//       <Form.Group controlId="validationFormik05">
//         <Form.Label ref={firstNameLabel}></Form.Label>
//       </Form.Group>
//     </Form.Row>container
//     <Form.Row>
//       <Form.Group controlId="validationFormik05">
//         <Form.Label ref={lastNameLabel}></Form.Label>
//       </Form.Group>
//     </Form.Row>
//     <Button type="submit">Submit form</Button>
// </Form>

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const professionRef = useRef(null);
  const mobileRef = useRef(null);
  const officeRef = useRef(null);
  const emailRef = useRef(null);
  const businessNameRef = useRef(null);
  const websiteRef = useRef(null);
  const addressRef = useRef(null);

  return (
    <div css={styles.container}>
      <Form css={styles.form}>
        <Form.Row>
          <Form.Group as={Col} controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              required
              name="firstName"
              onChange={event => {
                firstNameRef.current.textContent = event.target.value;
              }}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              required
              onChange={event => {
                lastNameRef.current.textContent = event.target.value;
              }}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="mobile">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="text"
              name="mobile"
              required
              placeholder=""
              onChange={event => {
                mobileRef.current.textContent = event.target.value;
              }}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="office">
            <Form.Label>Office</Form.Label>
            <Form.Control
              type="text"
              name="office"
              onChange={event => {
                officeRef.current.textContent = event.target.value;
              }}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              required
              onChange={event => {
                emailRef.current.textContent = event.target.value;
              }}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="profession">
            <Form.Label>Profession</Form.Label>
            <Form.Control
              type="text"
              name="profession"
              placeholder="eg Realtor"
              onChange={event => {
                professionRef.current.textContent = event.target.value;
              }}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="Business Name">
            <Form.Label>Business Name</Form.Label>
            <Form.Control
              type="text"
              name="businessName"
              required
              placeholder=""
              onChange={event => {
                businessNameRef.current.textContent = event.target.value;
              }}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="Website">
            <Form.Label>Website</Form.Label>
            <Form.Control
              type="text"
              name="website"
              placeholder=""
              onChange={event => {
                websiteRef.current.textContent = event.target.value;
              }}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              placeholder=""
              onChange={event => {
                addressRef.current.textContent = event.target.value;
              }}
            />
          </Form.Group>
        </Form.Row>
      </Form>
      <Card css={styles.card}>
        <Row>
          <Col sm={4}>
            <Image css={styles.image} />
          </Col>
          <Col sm={8}>
            <Card.Body>
              <h2>
                <Badge variant="secondary">
                  <Card.Text ref={businessNameRef}></Card.Text>
                </Badge>
              </h2>
              <div css={styles.contactDetails}>
                <span ref={mobileRef}></span>
                <span ref={officeRef}></span>
                <span ref={emailRef}></span>
                <span ref={websiteRef}></span>
              </div>
              <Card.Text ref={addressRef}></Card.Text>
              <Card.Text>
                <span ref={firstNameRef}></span>
                <span> </span>
                <span ref={lastNameRef}></span>
              </Card.Text>
              <Card.Text ref={professionRef}></Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default App;
