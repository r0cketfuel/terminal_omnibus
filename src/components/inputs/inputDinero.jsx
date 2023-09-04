import React, { useState } from "react";
import styled from "@emotion/styled";

const MoneyInput = styled.input({
  border: "solid lightGrey 1px",
  margin: "0 .5rem 0 0",
  textAlign: "end",
  "&:focus": {
    outline: "lightGreen .5px solid",
  },
});

const formatMoney = (amount) => {
  if (!amount) return "";

  const numericValue = amount.replace(/[^0-9]/g, ""); // Mantener solo dígitos

  let integerPart = numericValue.slice(0, -2) || ""; // Parte entera, por defecto "0"
  let decimalPart = numericValue.slice(-2); // Parte decimal

  // Insertar puntos para marcar miles y millones en la parte entera
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return `${integerPart},${decimalPart}`;
};

const InpMoney = () => {
  const [money, setMoney] = useState("");

  const handleMoneyChange = (event) => {
    const formattedMoney = formatMoney(event.target.value);
    setMoney(formattedMoney);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: ".5rem",
        }}
        htmlFor="money"
      >
        Monto:
      </label>
      <MoneyInput
        style={{ borderRadius: "4px" }}
        type="text"
        id="money"
        value={money}
        onChange={handleMoneyChange}
        placeholder="$ 1.000.000,00"
      />
    </div>
  );
};

export default InpMoney;
