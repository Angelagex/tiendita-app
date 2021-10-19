import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { setError, removeError } from "../../actions/uiErrors";
import { startRegisterWithEmailPasswordName } from "../../actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Login from "./Login";


const Registro = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const { msjError } = useSelector((state) => state.ui);

  const [values, handleInputChange, reset] = useForm({
    nombre: "",
    email: "",
    password: "",
    password2: "",
  });

  const { nombre, email, password, password2 } = values;

  const formValid = () => {
    if (nombre.trim().length === 0) {
      dispatch(setError("nombre requerido"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Emial requerido"));
      return false;
    } else if (password !== password2 || password < 5) {
      dispatch(setError("La contraseña es incorecta"));
      return false;
    }

    dispatch(removeError(""));
    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (formValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, nombre));
    }
    reset();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Registro con correo
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registrate para continuar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <div className="Registro py-5 container text-center">
        <form className="form-signin" onSubmit={handleRegister}>
          {msjError && <div className="alert alert-danger">{msjError}</div>}
          <label htmlFor="inputemailaddress" className="sr-only">
            Correo electrónico
          </label>

          <input
            type="text"
            placeholder="Name"
            name="nombre"
            className="form-control"
            autoComplete="off"
            value={nombre}
            onChange={handleInputChange}
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            className="form-control"
            autoComplete="off"
            required=""
            value={email}
            onChange={handleInputChange}
          />

          <input
            type="Password"
            name="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required=""
            value={password}
            onChange={handleInputChange}
          />

          <input
            type="Password"
            name="password2"
            id="inputPassword2"
            className="form-control"
            placeholder="Confirm password"
            required=""
            value={password2}
            onChange={handleInputChange}
          />

          <button type="submit" className="btn btn-primary btn-block mb-1">
            Register
          </button>
          <br /><br />
          <p>Ya tienes una cuenta?</p>
          <Login />
        </form>
      </div>
      </Modal.Body>
      </Modal>
    </>
  );
};

export default Registro;
