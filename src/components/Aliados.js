import React from "react";
const myArray = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2FOMER_LOGO%402x.png?alt=media&token=8b20c418-05cd-421f-b398-6626ec6b63bf",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2FSEER_LOGO_AZUL%402x.png?alt=media&token=5bea16bf-9e9b-4bde-9f07-2260debc0579",
  },
];
function Aliados() {
  return (
    <div className="patrocinadores">
      <h4>Nuestros</h4>
      <h3>Aliados</h3>

      <div className="patrocinadores-Contenedor">
        {myArray.map((item, index) => (
          <div key={index} className="Aliados-img">
            <img src={item.image} className="AliadosImg" alt="aliados" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aliados;
