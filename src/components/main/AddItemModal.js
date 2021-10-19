import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Container } from "../../styles/globalStyles";
import styled from "styled-components";
import  { BsDash, BsPlus }  from "react-icons/bs";

const Imagen = styled.img`
  position: static;
  width: 422px;
  height: 422px;
  margin-left: 40px;
  top: 0px;
  margin-right: 70px;

  background: #fefefe;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;

  position: static;
  width: 442px;
  height: 458px;
  left: 546px;
  top: 0px;

  &.info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 442px;
    height: 182px;
    left: 0px;
    top: 90px;
    margin-bottom: 50px;
  }

  &.buttons {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 8px 0px 0px;

    position: static;
    width: 442px;
    height: 48px;
    left: 0px;
    top: 88px;
  }
  &.ind {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;

    position: static;
    width: 167px;
    height: 40px;
    left: 0px;
    top: 8px;
  }
`;

const Name = styled.h3`
  position: static;
  width: 442px;
  height: 42px;
  left: 0px;
  top: 0px;

  /* Headline 1 */

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 42px;
  letter-spacing: 2px;
  /* identical to box height */

  /* Cocoa Brown */

  color: #332927;
`;

const Price = styled.h5`
  position: static;
  width: 442px;
  height: 36px;
  left: 0px;
  top: 58px;

  /* Headline 2 */

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 36px;
  /* identical to box height */

  /* Cocoa Brown */

  color: #332927;
`;
const Iva = styled.p`
  position: static;
  width: 442px;
  height: 16px;
  left: 0px;
  top: 0px;

  /* Caption/Regular */

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;

  margin-bottom: 40px;
`;
const PriceDescript = styled.p`
  position: static;
  width: 442px;
  height: 48px;
  left: 0px;
  top: 24px;

  /* Body 1/Regular */

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
`;
const Medida = styled.p`
  position: static;
  width: 39px;
  height: 24px;
  left: 64px;
  top: 8px;

  /* Body 2/Bold */

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 171% */
`;

const AddItemModal = ({item}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [cantidad, setCantidad] = useState(1)
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  console.log(item)

  const handleIncrement = () => {
    setCantidad(cantidad + 1)
  }
  const handleDecrement = () => {
   return cantidad!==1
    ? setCantidad(cantidad - 1)
    : ""
  }
  const handleAñadir = () => {
    
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Agregar al carrito
      </Button>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Container className="items">
            <Imagen src={item.imagen} />
            <Product>
              <Product className="info">
                <Name>{item.nombre}</Name>
                <Price>${item.precio}</Price>
                <Iva>Precios con IVA incluido</Iva>
                <PriceDescript>
                  {item.medida === "Unidades"
                    ? "Precio por unidad"
                    : "Peso aproximado por unidades, puede variar de acuerdo al peso real."}
                </PriceDescript>
              </Product>
              <Product className="buttons">
                <Product className="ind">
                  <BsDash onClick={handleDecrement}/>
                  <Medida>{
                            item.medida==="Unidades"
                            ? cantidad + "U"
                            : 500*cantidad + "g"
                          }
                  </Medida>
                  <BsPlus onClick={handleIncrement}/>
                </Product>
                <Button onClick={handleAñadir}>Agregar</Button>
              </Product>
            </Product>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddItemModal;
