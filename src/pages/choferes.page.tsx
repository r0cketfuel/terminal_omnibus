import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '@/components/header';
import TableDef from '../components/Tabla/tablaDefinitiva';
import config from '../config';

/* Titulo de la página */
const title = "CHOFERES";

export default function CallToActionWithAnnotation() {
  const [data, setData] = useState({
    datos: [],
    totalRegistros: 0,
  });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(config.URL_CHOFERES);
      const responseData = response.data;

      setData({
        datos: responseData,
        totalRegistros: responseData.length,
      });
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }

  /* Nombres de las columnas de la tabla personalizados (opcionales) */
  const columnas = ['id', 'apellido', 'nombre', 'documento_nro', 'email', 'telefono'];

  return (
    <Header>
      <TableDef title={title} captions={columnas} data={data.datos} totalRegistros={data.totalRegistros} />
    </Header>
  );
}