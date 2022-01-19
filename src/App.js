import React, { useRef, useState } from "react";
/** @jsx jsx */ import { jsx } from "@emotion/core";
import logo from "./logo.svg";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "./App.css";
import * as styles from "./App.style";

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
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div css={styles.container}>
      <Form css={styles.form}>
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
      </Form.Row>
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
        </Form.Row>
        <Form.Row>
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
          <Col sm={5} css={styles.imageContainer} >
          {selectedImage && (
            <Image alt="" css={styles.image} src={URL.createObjectURL(selectedImage)} />
          )}
      <br />
      <br /> 
            {!selectedImage && <input
                 type="file"
                name="myImage"
                onChange={(event) => {
                setSelectedImage(event.target.files[0]);
            }}
            />}
          </Col>
          <Col sm={7}>
            <Card.Body css={styles.cardBody}>
              <div  css={styles.businessNameWrapper}>
              <Card.Text css={styles.businessName} ref={businessNameRef} />
              </div>
              <Card.Text css={styles.name}>
                <span ref={firstNameRef}></span>
                <span> </span>
                <span ref={lastNameRef}></span>
              </Card.Text>
              <Card.Text css={styles.profession} ref={professionRef} />
              <div css={styles.contactDetails}>
                <span ref={mobileRef}></span>
                <span ref={officeRef}></span>
                <span ref={emailRef}></span>
                <span ref={websiteRef}></span>
              </div>
              <Card.Text css={styles.address} ref={addressRef}></Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default App;
