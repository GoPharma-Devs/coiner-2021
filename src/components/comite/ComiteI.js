import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/9_DrRafael_Navarro.png?alt=media&token=bf0823bf-2d07-4e23-91c5-1e29437d1b38";
function Comite() {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        className="text-light"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="contenedor-modal d-flex">
            <Button className="boton-cerrar" onClick={props.onHide}>
              x
            </Button>
            <img
              src={ImgPonente}
              className="imagen-modal"
              alt="imagen-comite a"
            />
            <div className="texto">
              <p className="nombre">Dr. Rafael Navarro </p>
              <p className="titulo-ponente">Biología Molecular </p>
              <p className="trayectoria">
                Médico Cirujano por la Universidad Anahuac de México, con
                estudios en Biología Molecular, Sistemas de Salud y Política
                Pública. Actualmente es director médico en Go Pharma. Cuenta con
                más de 12 años de experiencia en áreas de alta especialidad
                dentro la industria farmacéutica, en laboratorios
                transnacionales y nacionales; teniendo a su cargo México,
                Centroamérica, Perú, Ecuador y El Caribe.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  return (
    <React.Fragment>
      {" "}
      <div className="comite-el" onClick={() => setModalShow(true)}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/9_DrRafael_Navarro.png?alt=media&token=bf0823bf-2d07-4e23-91c5-1e29437d1b38"
          alt="comite"
        />
        <div className="info">
          <h2 className="nombre-ponente">Dr. Rafael Navarro </h2>
          <p className="titulo-ponente">Biología Molecular </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dr. Rafael Navarro </h2>
          <p className="titulo-ponente">Nefrología Pediátrica </p>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}

export default Comite;
