import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../screens/Home/Home";
import { Mision } from "../screens/Mision/Mision";
import { Tienda } from "../store/Tienda/Tienda";
import { Conocenos } from "../screens/Conocenos/Conocenos";
import { Contacto } from "../screens/Contacto/Contacto";
import { NotFound } from "../screens/NotFound/NotFound";
import { NavStore } from "../components/NavStore/NavStore";
import { Checkout } from "../store/Checkout/Checkout";

import { Searchresult } from "../store/Searchresult/Searchresult";
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
          <Route path="*" element={<NotFound />} />
          <Route path="searchresult" element={<Searchresult />} />
        </Route>
      </Routes>
    </div>
  );
}

export { AppRouter };
