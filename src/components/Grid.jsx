import { Checkbox, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

export default function GridCompx({
  slot1,
  slot2,
  slot3,
  slot4,
  slot5,
  slot6,
  colorTab,
}) {
  const btnEdit = (
    <svg
      width="25
  "
      viewBox="0 0 748 748"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M654.213 374.154V654.212C654.213 688.406 626.245 716.372 592.054 716.372L94.1591 716.434C59.9654 716.434 32 688.466 32 654.275L32.0625 156.38C32.0625 122.186 60.031 94.2207 94.2216 94.2207H374.28"
        stroke="#ffd900"
        stroke-width="62.2213"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M187.553 560.88L333.87 531.605C339.906 530.391 345.443 527.438 349.797 523.079L716.436 156.44C708.905 91.076 657.36 39.5257 591.996 32L225.357 398.639C221.003 402.993 218.045 408.535 216.831 414.566L187.553 560.88Z"
        stroke="black"
        stroke-width="62.2213"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  const btnDelet = (
    <svg
      width="35"
      viewBox="0 0 114 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M71.3684 65.8954L62.473 57L71.3684 48.1046C72.8816 46.5914 72.8816 44.1448 71.3684 42.6316C69.8552 41.1184 67.4086 41.1184 65.8954 42.6316L57 51.527L48.1046 42.6316C46.5914 41.1184 44.1448 41.1184 42.6316 42.6316C41.1184 44.1448 41.1184 46.5914 42.6316 48.1046L51.527 57L42.6316 65.8954C41.1184 67.4086 41.1184 69.8552 42.6316 71.3684C44.1448 72.8816 46.5914 72.8816 48.1046 71.3684L57 62.473L65.8954 71.3684C67.4086 72.8816 69.8552 72.8816 71.3684 71.3684C72.8816 69.8552 72.8745 67.4015 71.3684 65.8954Z"
        fill="#FF0000"
      />
      <path
        d="M85.2843 28.7157C69.6855 13.1169 44.3145 13.1169 28.7157 28.7157C13.117 44.3144 13.117 69.6854 28.7157 85.2842C44.3145 100.883 69.6855 100.883 85.2843 85.2842C100.883 69.6854 100.883 44.3144 85.2843 28.7157ZM34.1817 79.8183C21.6022 67.2388 21.5952 46.7681 34.1817 34.1816C46.7611 21.6022 67.2318 21.5951 79.8183 34.1816C92.4048 46.7681 92.3978 67.2388 79.8183 79.8183C67.2389 92.3977 46.7611 92.3977 34.1817 79.8183Z"
        fill="#FF0000"
      />
    </svg>
  );
  return (
    <Grid
      templateColumns="repeat(6, 1fr)"
      gap={1}
      marginTop=".1rem"
      maxWidth="100%"
    >
      <GridItem
        w="100%"
        h="8"
        bg={colorTab || "gray.300"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        className="gridItemX"
      >
        {slot1}
      </GridItem>
      <GridItem
        w="100%"
        h="8"
        bg={colorTab || "gray.300"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        className="gridItemX"
      >
        {slot2}
      </GridItem>
      <GridItem
        w="100%"
        h="8"
        bg={colorTab || "gray.300"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        className="gridItemX"
      >
        {slot3}
      </GridItem>
      <GridItem
        w="100%"
        h="8"
        bg={colorTab || "gray.300"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        className="gridItemX"
      >
        {slot4}
      </GridItem>
      <GridItem
        w="100%"
        h="8"
        bg={colorTab || "gray.300"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        className="gridItemX"
      >
        {slot5}
      </GridItem>
      <GridItem
        w="100%"
        h="8"
        bg={colorTab || "gray.300"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        className="gridItemX"
      >
        <input type="checkbox" />
        <button className="BtnGrid">{btnEdit}</button>
        <button className="BtnGrid" >
          {btnDelet}
        </button>
      </GridItem>
    </Grid>
  );
}
