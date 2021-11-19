import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { Mision } from "../pages/Mision/Mision";
import { Tienda } from "../store/Tienda/Tienda";
import { Conocenos } from "../pages/Conocenos/Conocenos";
import { Contacto } from "../pages/Contacto/Contacto";
import { PageError } from "../pages/PageError/PageError";
import { NavStore } from "../components/NavStore/NavStore";
import { Checkout } from '../store/Checkout/Checkout';

function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavStore />}>
          <Route index element={<Home />} />
          <Route path="mision" element={<Mision />} />
          <Route path="tienda" element={<Tienda />} />
          <Route path="conocenos" element={<Conocenos />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<PageError />} />
        </Route>
      </Routes>
    </div>
  );
}

export { AppRouter };
