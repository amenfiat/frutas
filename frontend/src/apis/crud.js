import { useEffect, useState } from "react";

//const baseUrl = "http://localhost:5000";
const baseUrl = "https://frutasexp-backend.herokuapp.com";

export const useDatos = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}/fruits`)
      .then((response) => response.json())
      .then((datos) => {
        setProductos(datos);
      });
  }, []);
  return productos;
};

// import axios from 'axios';
// const baseUrl = 'http://localhost:5000';
// export function datos(callback) {
//     axios.get(`${baseUrl}/fruits`).then((res) => {
//         callback(res);
//     });
// }
