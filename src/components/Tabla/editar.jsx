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
    Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Select
  } from "@chakra-ui/react";
  import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
  import React from "react";
  
  function TablesTableRow(props) {
    const { onCloseEditModal, isOpenEditModal, email, subdomain, domain, status, date, habilitado } = props;
    const textColor = useColorModeValue("gray.700", "white");
    const bgStatus = useColorModeValue("gray.400", "#1a202c");
    const colorStatus = useColorModeValue("white", "white");
  
    return (
        <Modal onClose={onCloseEditModal} isOpen={isOpenEditModal} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar registro</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl>
              <FormLabel>Certificado</FormLabel>
              <Input value="certificado prueba" placeholder='Certificado XXXX' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Fecha de alta</FormLabel>
              <Input type="datetime-local" value="2022-09-12T19:30" placeholder='Fecha de alta' />
            </FormControl>
            <FormControl mt={4}>
            <FormLabel>Habilitado</FormLabel>
            <Select>
              <option value='option1'>Si</option>
              <option value='option2'>No</option>
            </Select>
            </FormControl>
            <FormControl mt={4}>
            <FormLabel>Estado</FormLabel>
            <Select>
              <option value='option1'>Activo</option>
              <option value='option2'>Inactivo</option>
            </Select>
            </FormControl>

          </ModalBody>
          <ModalFooter>
            <Button bg='muni.celeste' color='white'>Actualizar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
  
  export default TablesTableRow;
  