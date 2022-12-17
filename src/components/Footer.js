import React, { useState } from "react";
import Modal from "./Modal";
const Footer = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <footer className="footer">
        <div className="attribution">
          Visita mi Sitio{" "}
          <a href="" target="_blank">
            Frontend
          </a>
          . Codigo hecho por<a href="#">Pablo Pizarro</a>.
        </div>
        <button className="rules" onClick={toggle}>
          Reglas
        </button>
      </footer>
      {modal ? <Modal toggle={toggle} /> : null}
    </>
  );
};

export default Footer;
