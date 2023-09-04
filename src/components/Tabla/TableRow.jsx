import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

import React from "react";

function TablesTableRow(props) {

  const {
    logo,
    name,
    email,
    subdomain,
    domain,
    status,
    date,
    habilitado
  } = props;

  const textColor   = useColorModeValue("gray.700", "white");
  const bgStatus    = useColorModeValue("gray.400", "#1A202C");
  const colorStatus = useColorModeValue("white", "white");

  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {name}
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold" textAlign="center">
            {date}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" textAlign="center">
          Texto ejemplo
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" textAlign="center">
          Estado ejemplo
        </Text>
      </Td>
    </Tr>
  );
}
export default TablesTableRow;