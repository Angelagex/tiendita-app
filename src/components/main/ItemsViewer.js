import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../../styles/globalStyles";
import styled from "styled-components";
import AddItemModal from "./AddItemModal";

const Producto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 194px;
  height: 426px;
  left: 0px;
  top: 0px;
  color: #333333;
  margin-left: 8px;
  margin-right: 8px;

  & > img {
    position: static;
width: 154px;
height: 154px;
left: 0px;
top: 40px;

/* White */

background: #FEFEFE;

margin: 20px 5px;

  }

  &.cardBody {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    position: static;
    width: 194px;
    height: 160px;
    left: 0px;
    top: 210px;
  }

`;

const Precio = styled.h5`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    width: 194px;
    height: 24px;
    left: 0px;
    top: 0px;
    padding: 0px 5ox;
`

const Name = styled.p`
    width: 194px;
    height: 56px;
    left: 0px;
    top: 32px;

    /* Body 2/Regular */

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
`

const Medida = styled.p`
    width: 194px;
    height: 16px;
    left: 0px;
    top: 136px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    align-self: baseline;

    color: #b8b4b4;
` 

export const ItemsViewer = () => {
  const { product } = useSelector((state) => state.product);
  console.log(product);

  return (
    <Container>
      <h4>Los mejores productos</h4>
      <Container className="products">
        {product.map((item, index) => (
          <Producto>
            <img src={item.imagen} width= "154px" height= "154px" alt=""/>
            <div className="cardBody">
              <Precio>${item.precio}</Precio>
              <Name>{item.nombre}</Name>
              <Medida>{item.medida=== "Unidades" ? "1 unidad" : "500g"}</Medida>
            </div>
            <AddItemModal item={item} />
          </Producto>
        ))}
      </Container>
    </Container>
  );
};
