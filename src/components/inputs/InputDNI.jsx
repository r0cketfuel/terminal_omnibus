import React, { useState } from "react";
import styled from "@emotion/styled";

const DniInput = styled.input({
  border: "solid lightGrey 1px",
  margin: "0 .5rem 0 0",
  textAlign: "center",
  "&:focus": {
    outline: "lightGreen .5px solid",
  },
});

const formatDni = (dni) => {
  const numericValue = dni.replace(/\D/g, ""); // Eliminar todos los caracteres que no sean dígitos

  // Insertar puntos para marcar miles y millones
  const parts = [];
  for (let i = numericValue.length; i > 0; i -= 3) {
    parts.unshift(numericValue.slice(Math.max(i - 3, 0), i));
  }

  return parts.join(".");
};

const InpDni = () => {
  const [dni, setDni] = useState("");

  const handleDniChange = (event) => {
    const formattedDni = formatDni(event.target.value);
    setDni(formattedDni);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: ".5rem",
        }}
        htmlFor="dni"
      >
        DNI:
      </label>
      <DniInput
        style={{ borderRadius: "4px" }}
        type="text"
        id="dni"
        maxLength="10"
        value={dni}
        onChange={handleDniChange}
        placeholder="12.345.678"
      />
    </div>
  );
};

export default InpDni;
