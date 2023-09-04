import React from "react";
import styled from "@emotion/styled";

const Cuit = styled.input({
  border: "solid lightGrey 1px",
  margin: "0 .5rem 0 0",
  textAlign: "center",
  "&:focus": {
    outline: "solid lightGreen 1px",
  },
});

const inpCuit = () => {
  const formatoNumero = (event) => {
    const { value } = event.target;
    const numericValue = value.replace(/\D/g, ""); // Eliminar todos los caracteres que no sean dígitos

    let formattedValue = "";

    for (let i = 0; i < numericValue.length; i++) {
      if (i === 2 || i === 10) {
        formattedValue += "-";
      }
      formattedValue += numericValue.charAt(i);
    }

    event.target.value = formattedValue.slice(0, 15); // Limitar la longitud del valor a 15 caracteres
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: ".5rem",
        }}
        htmlFor="numero"
      >
        CUIT:
      </label>
      <Cuit
        style={{ borderRadius: "4px" }}
        type="text"
        id="numero"
        maxLength="13"
        onInput={formatoNumero}
        placeholder="00-000000000-0"
      />
    </div>
  );
};

export default inpCuit;
