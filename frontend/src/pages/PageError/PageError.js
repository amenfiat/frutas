import React from 'react';
import { Link } from "react-router-dom";

function PageError() {
    return (
      <div className="container">
        <h2>Página no encontrada</h2>
        <Link to="/">Ir a la página Principal</Link>
      </div>
    );
}

export { PageError };
