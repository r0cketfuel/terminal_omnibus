import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '@/components/header';
import TableDef from '../components/Tabla/tablaDefinitiva';
import config from '../config';
import { Text } from '@chakra-ui/react';
import { AxiosLogged } from '@/configs/Axios';

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
      const response = await AxiosLogged.get('choferes');
      const responseData = response.data;
      console.log(responseData);

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
      <TableDef title={title} captions={columnas} list={data.datos} totalRegistros={data.totalRegistros} />
    </Header>
  );
}