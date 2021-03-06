import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/7_DraJuana_Navarrete.png?alt=media&token=6dddeba7-bb87-4db7-b615-c3130b17ae82";
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
              <p className="nombre">Dra. Juana Navarrete </p>
              <p className="titulo-ponente">Genética Médica </p>
              <p className="trayectoria">
                Médico Genetista egresada de la UNAM. Actualmente Jefa del
                Servicio de Genética del Hospital Central Sur de Alta
                Especialidad PEMEX Profesor titular de Genética Médica de la
                carrera de Médico Cirujano, Facultad de Medicina UNAM Miembro de
                la Asociación Mexicana de Genética Humana y del Consejo Mexicano
                de Especialistas en Genética Humana. Miembro Fundador del Grupo
                de Estudios al Nacimiento.
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
          src="https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/7_DraJuana_Navarrete.png?alt=media&token=6dddeba7-bb87-4db7-b615-c3130b17ae82"
          alt="comite"
        />
        <div className="info">
          <h2 className="nombre-ponente">Dra. Juana Navarrete </h2>
          <p className="titulo-ponente">Genética Médica </p>
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
