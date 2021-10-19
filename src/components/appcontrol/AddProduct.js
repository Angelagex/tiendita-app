import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ProductNew,
  startUploading,
  clearProduct,
  Edit,
} from "../../actions/productAction";
import { useForm } from "../../hooks/useForm";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button'

const AddProduct = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const inputFile = useRef(null)  

  const dispatch = useDispatch();
  let file = "";
  const [formValue, handleInputChange, reset] = useForm({
    nombre: "",
    precio: "",
    medida: "",
    imagen: "",
  });

  const { nombre, precio, medida, imagen } = formValue;

  const handleFileChange = (e) => {
    file = e.target.files[0];
    console.log(file);
    if (file) {
      dispatch(startUploading(file));
    }
  };

  const handlNewProduct = (e) => {
    e.preventDefault();
    dispatch(ProductNew(formValue));
    reset();
    dispatch(clearProduct());
  };

  const handlePictureClick = () => {
    inputFile.current.click();
  };

  const handleViewChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <>
      <Button onClick={handleShow}>
        Agregar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar nuevo producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card container text-center">
            <form className="card-body " onSubmit={handlNewProduct}>
              <div className="form-group">
                <input
                  type="text"
                  name="nombre"
                  className="form-control mt-1"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="precio"
                  className="form-control mt-1"
                  placeholder="Precio"
                  value={precio}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <select
                  name="medida"
                  className="form-control mt-1"
                  value={medida}
                  onChange={handleInputChange}
                >
                  <option aria-label="Selecciona"></option>
                  <option>Unidades</option>
                  <option>Libras</option>
                </select>
              </div>

              <input
                id="fileSelector"
                type="file"
                name="file"
                ref={inputFile}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <div>
                <input
                  type="button"
                  className="btn border-bottom shadow-sm"
                  value="Picture"
                  onClick={handlePictureClick}
                />
              </div>

              <button type="submit" className="btn btn-primary mt-2">
                Save
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddProduct;
