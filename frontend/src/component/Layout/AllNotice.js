import axios from "axios";
import React, { useState } from "react";
import { Modal, Button, FormControl, Form } from "react-bootstrap";
import Cookies from "universal-cookie";
function MyVerticallyCenteredModal(props) {
  const [handleInput, setHandleInput] = useState({ title: "a", body: "b" });
  const handleChange = (e) => {
    const values = { ...handleInput };
    values[e.target.name] = e.target.value;
    setHandleInput(values);
  };
  const handleClose = () => {
    setHandleInput({ title: "a", body: "b" });
  };
  const handleSave = () => {
    axios
      .post("/api/create-notice")
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    props.onHide();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onExit={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Notice <i className="fas fa-pencil-alt"></i>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ display: "flex", flexDirection: "column" }}>
        <Form.Label>Title</Form.Label>
        <FormControl
          type="text"
          placeholder="Title"
          name="title"
          onChange={(e) => handleChange(e)}
          className="mr-sm-2"
          maxLength="200"
        />
        <Form.Label>Body</Form.Label>
        <Form.Control
          name="body"
          as="textarea"
          placeholder="Body"
          value={handleInput.body}
          rows={3}
          onChange={(e) => handleChange(e)}
          maxLength="2000"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSave}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Modals() {
  const cookies = new Cookies();
  const role = cookies.get("rid");
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      {role === "admin" && (
        <Button
          variant="primary"
          onClick={() => setModalShow(true)}
          style={{ marginTop: "50px", marginLeft: "50px" }}
        >
          Create Notice <i className="fas fa-pencil-alt"></i>
        </Button>
      )}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
