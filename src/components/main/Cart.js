import React, { useState } from "react";
import { Button } from "../../styles/globalStyles";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsCart2 } from "react-icons/bs";
import { useSelector } from "react-redux";
import Login from "../auth/Login";

const Cart = () => {
  const { name } = useSelector((state) => state.auth);
  const { item } = useSelector(state => state.item)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button small onClick={handleShow}>
        <BsCart2 />
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        key={1}
        placement={"end"}
        name={"end"}
      >
        <Offcanvas.Body>
          {name !== undefined ? (
                   <> {
          item.length===0
          ? <>
          <div className="nothing__main-content">
          <img src="https://i.ibb.co/yFT91WY/Family-Values-Shopping.png" alt="Family Shopping"/> 
          <p>
            Aún no hay nada en el carrito 
          </p>  
          <Button onClick={handleClose}>Agrega un producto</Button>
        </div>
            </>
            : "items"

        }
        </>
          ) : (
            <>
              <h2>Por favor inicia sesion para continuar con tu compra! </h2>
              <Login />
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
