import styles from "./contact.module.scss";
import { Form, Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

//It uses EmailJS for contact form email handling,
//https://www.emailjs.com/docs/

export default function Contact() {
  const [smShow, setSmShow] = useState(false);
  const submitForm = (e) => {
    console.log('Emailjs logic goes here');
    // emailjs
    //   .sendForm(
    //     process.env.EMAILJS_SERV_ID,
    //     process.env.EMAILJS_TEMP_ID,
    //     e.target,
    //     process.env.EMAILJS_USER
    //   )
    //   .then(
    //     (result) => {
    //       setSmShow(true);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <div id="contact" className={styles.formcont}>
      <div className={styles.row}>
        <div className={styles.title}>Contact</div>
      </div>
      <div className={styles.rowform}>
        <Form
          id="contactform"
          onSubmit={(e) => {
            e.preventDefault();
            submitForm(e);
          }}
        >
          <Form.Group controlId="formGroupName">
            <Form.Control
              placeholder="Name"
              size="sm"
              type="text"
              required
              name="name"
            />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Control
              placeholder="Email"
              size="sm"
              type="email"
              required
              name="email"
            />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Control
              placeholder="Whats on your mind?"
              size="sm"
              as="textarea"
              rows={5}
              required
              name="message"
            />
          </Form.Group>
          <Button type="submit" variant="secondary" size="sm" block>
            Send
          </Button>
        </Form>

        <div className={styles.infocont}>
          <div className={styles.textcont}>
            <div className={styles.title}>location</div>
            <p>City, Country</p>
          </div>
          <div className={styles.textcont}>
            <div className={styles.title}>phone</div>
            <a href="tel:+0000">
              <p>+54 123 4562 1203</p>
            </a>
          </div>
          <div className={styles.textcont}>
            <div className={styles.title}>email</div>
            <a href="mailto:yourmail@mail.com">
              <p>Email@email.com</p>
            </a>
          </div>
        </div>
      </div>
      <Modal
        centered
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="successmodal"
        styles={{ background: "#aeaeae" }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="successmodal">Message sended</Modal.Title>
        </Modal.Header>
        <Modal.Body>I'll be getting back to you shortly!</Modal.Body>
      </Modal>
    </div>
  );
}
