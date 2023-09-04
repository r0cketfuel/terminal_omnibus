import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

export default function GridFirstLine({
  slot1,
  slot2,
  slot3,
  slot4,
  slot5,
  slot6,
  colorTab,
}) {
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
        {slot6}
      </GridItem>
    </Grid>
  );
}
