import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startLoginEmailPassword,
  startGoogleLogin,
} from "../../actions/authAction";
import { useForm } from "../../hooks/useForm";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Registro from "./Register";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.ui);

  const [values, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const hadleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    console.log("Google");
    dispatch(startGoogleLogin());
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inicia Sesión para continuar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="Registro py-5 container text-center">
            <form className="form-signin">
              <input
                type="email"
                name="email"
                id="inputEmail"
                className="form-control mt-1"
                placeholder="Email"
                required=""
                value={email}
                onChange={handleInputChange}
              />

              <input
                type="Password"
                id="inputPassword"
                name="password"
                className="form-control mt-1"
                placeholder="Contreña"
                required=""
                value={password}
                onChange={handleInputChange}
              />

              <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={hadleLogin}
                disabled={loading}
              >
                Login
              </button>

              <div className="">
                <p>Login with social networks</p>

                <div
                  className="google-btn btn-primary"
                  onClick={handleGoogleLogin}
                >
                  <div className="google-icon-wrapper">
                    <img
                      className="google-icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      alt="google button"
                    />
                  </div>
                  <p className="btn-text">
                    <b>Sign in with google</b>
                  </p>
                </div>
              </div>
              <div className="google-btn btn-primary">
                <div className="google-icon-wrapper">
                  <img
                    className="google-icon"
                    src="https://image.flaticon.com/icons/png/512/20/20673.png"
                    alt="google button"
                    width="30px"
                  />
                </div>
                <p className="btn-text">
                  <b>Sign in with Facebook</b>
                </p>
              </div>

              <Registro/>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
