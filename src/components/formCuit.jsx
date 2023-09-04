import styled from "@emotion/styled";
import React from "react";
import InpuCuit from "./inputs/inputCuit";
import InpDni from "./inputs/InputDNI";
import InpMoney from "./inputs/inputDinero";
import ComponentMulti from "./inputs/multiSelect";
import ComponentMultiShort from "./inputs/multiSelectShort";


const CuitForm = () => {
  const currentDate = new Date().toISOString().split("T")[0];
  const ButtonFind = styled.button({
    color: "white",
    backgroundColor: "#2E2D79",
    "&:hover": {
      backgroundColor: "#2E2D99",
      color: "white",
    },
  });

  return (
    <form
      style={{
        backgroundColor: "#EDF2F7",
        display: "flex",
        padding: "1rem",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        borderBottom: "solid white",
        flexDirection:"column",
        gap:"1rem"
      }}
      className="findCuit"
    >
      <div>
      <ComponentMulti/>
      </div>
      <div>
      <ComponentMultiShort/>
      </div>
      <div style={{display:"flex"}}>

      <InpDni />
      <InpMoney  />
      <InpuCuit />
      </div>
      <ButtonFind className="BtnBasic purple" style={{ padding: ".5rem" }}>
        Buscar
      </ButtonFind>
    </form>
  );
};

export default CuitForm;
