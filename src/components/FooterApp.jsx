import React from "react";
import { Link } from "react-router-dom";

const FooterApp = () => {
  return (
    <footer className="flex justify-between items-center bg-dbg px-20 py-10">
      <p className="m-0 text-sm text-wh">
        &copy; 2023 Juan Series X.
      </p>
      <div className="flex">
        <a href="#" className="mr-4 font-bold text-brand no-underline">
          <Link to="/About">Acerca de VSGames</Link>
        </a>
        <a href="#" className="mr-4 font-bold text-brand no-underline">
        <Link to="/FAQ">Preguntas Frecuentes</Link>
        </a>
        <a href="#" className="font-bold text-brand no-underline">
        <Link to="/Terminos">Terminos y Condiciones</Link>
        </a>
      </div>
    </footer>
  );
};

export default FooterApp;
