// Chakra imports
import {
	Table,
	Tbody,
	Text,
	Th,
	Wrap,
	Button,
	WrapItem,
	Thead,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	PopoverFooter,
	PopoverArrow,
	PopoverCloseButton,
	ButtonGroup,
	Icon,
	useToast,
	Stack,
	Spacer,
	HStack,
	Input,
	Tr,
	Box,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	Tag,
	TagLabel,
	TagCloseButton,
	useColorModeValue,
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	useDisclosure,
	Select,
	Card,
	CardBody,
	CardHeader
} from "@chakra-ui/react";
// Custom components
import MbbIcon from "../assets/BBlogo.ico";
// import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
// import CardHeader from "components/Card/CardHeader.js";
import {
	FaPencilAlt,
	FaTrashAlt,
	FaCalendarPlus,
	FaCalendarAlt,
	FaPlus,
	FaSearch,
	FaCog,
	FaDownload,
	FaRedoAlt,
	FaFileExcel,
	FaFilePdf,
} from "react-icons/fa";
import CertificadoTableRow from "./TableRow";
import ModalAgregar from "./agregar";
import ModalEditar from "./editar";
import React from "react";

const TableDef = ({ title, captions, data, totalRegistros }) => {
	const textColor = useColorModeValue("gray.700", "white");
	const initialFocusRef = React.useRef();
	const toast = useToast();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const {
		isOpen: isOpenAddModal,
		onOpen: onOpenAddModal,
		onClose: onCloseAddModal,
	} = useDisclosure();

	const {
		isOpen: isOpenEditModal,
		onOpen: onOpenEditModal,
		onClose: onCloseEditModal,
	} = useDisclosure();

	const cancelRef = React.useRef();
	return (
		<Card overflowX={{ sm: "scroll", xl: "hidden" }}>
			<CardHeader p="6px 20px 22px 20px">
				<Stack
					direction={["column", "row"]}
					w="100%"
					justifyContent={"space-between"}
					alignItems="center"
					px="0"
				>
					<Box>
						<Wrap spacing={1}>
							<WrapItem>
								<Button
									bg="#4283D3"
									color="white"
									onClick={onOpenAddModal}
								>
									<Icon as={FaPlus} />
								</Button>
							</WrapItem>
							<ModalAgregar
								isOpenAddModal={isOpenAddModal}
								onCloseAddModal={onCloseAddModal}
							/>
							<ModalEditar
								isOpenEditModal={isOpenEditModal}
								onCloseEditModal={onCloseEditModal}
							/>

							<WrapItem>
								<Button
									bg="#4283D3"
									color="white"
									onClick={onOpenEditModal}
								>
									<Icon as={FaPencilAlt} />
								</Button>
							</WrapItem>
							<WrapItem>
								<Button bg="#4283D3" color="white">
									<Icon as={FaCalendarAlt} />
								</Button>
							</WrapItem>
							<WrapItem>
								<Button bg="#4283D3" color="white">
									<Icon as={FaCalendarPlus} />
								</Button>
							</WrapItem>
							<WrapItem>
								<Button bg="#4283D3" color="white">
									<Icon as={FaSearch} />
								</Button>
							</WrapItem>
							<WrapItem>
								<Button colorScheme="red" onClick={onOpen}>
									<Icon as={FaTrashAlt} />
								</Button>
								<AlertDialog
									isOpen={isOpen}
									leastDestructiveRef={cancelRef}
									onClose={onClose}
									motionPreset="slideInRight"
									isCentered
								>
									<AlertDialogOverlay>
										<AlertDialogContent>
											<AlertDialogHeader fontSize="lg" fontWeight="bold">Eliminar registro</AlertDialogHeader>
											<AlertDialogBody>¿Estas seguro de eliminar este registro? No podras volver a usarlo luego.</AlertDialogBody>
											<AlertDialogFooter>
												<Button ref={cancelRef} onClick={onClose}>Cancelar</Button>
												<Button colorScheme="red" onClick={onClose} ml={3}>Borrar</Button>
											</AlertDialogFooter>
										</AlertDialogContent>
									</AlertDialogOverlay>
								</AlertDialog>
							</WrapItem>
						</Wrap>
					</Box>
					<Box>
						<Text fontSize="xl" color={textColor} fontWeight="bold">
							{title}
						</Text>
					</Box>
					<Box>
						<Wrap spacing={1} align="center">
							{/* <Input placeholder='Buscar...' width="auto"/> */}
							<WrapItem>
								<Text fontSize="sm" color={textColor} fontWeight="bold">56 de {totalRegistros}</Text>
								<Text ml={1} fontSize="sm" color={textColor}>(filtrados de 153)</Text>
							</WrapItem>
							<WrapItem>
								<Button
									bg="#4283D3"
									color="white"
									onClick={() =>
										toast({
											position: "bottom-right",
											title: "Tabla recargada con exito.",
											status: "success",
											duration: 2000,
											variant: "left-accent",
											isClosable: true,
										})
									}
								>
									<Icon as={FaRedoAlt} />
								</Button>
							</WrapItem>
							<WrapItem>
								<Popover
									initialFocusRef={initialFocusRef}
									placement="bottom"
									closeOnBlur={true}
								>
									{({ isOpen, onClose }) => (
										<>
											<PopoverTrigger>
												<Button bg="#4283D3" color="white">
													<Icon as={FaDownload} />
												</Button>
											</PopoverTrigger>

											<PopoverContent
												color="white"
												bg="blue.800"
												borderColor="blue.800"
											>
												<PopoverHeader pt={4} fontWeight="bold" border="0">Descarga la tabla</PopoverHeader>
												<PopoverArrow />
												<PopoverCloseButton />
												<PopoverBody>
													<Button colorScheme="blue" width="100%">
														<Icon as={FaFileExcel} mr={2} />
														Excel
													</Button>
													<Button colorScheme="blue" width="100%" mt={2}>
														<Icon as={FaFilePdf} mr={2} />
														PDF
													</Button>
												</PopoverBody>
												<PopoverFooter
													border="0"
													display="flex"
													alignItems="center"
													justifyContent="space-between"
													pb={4}
												>
													<Box>
														<Icon w={8} h={8} as={MbbIcon} />
													</Box>
													<ButtonGroup size="sm">
														<Button colorScheme="red" onClick={onClose}>Salir</Button>
													</ButtonGroup>
												</PopoverFooter>
											</PopoverContent>
										</>
									)}
								</Popover>
							</WrapItem>
							<WrapItem>
								<Popover
									initialFocusRef={initialFocusRef}
									placement="bottom"
									closeOnBlur={true}
								>
									{({ isOpen, onClose }) => (
										<>
											<PopoverTrigger>
												<Button bg="#4283D3" color="white">
													<Icon as={FaCog} />
												</Button>
											</PopoverTrigger>

											<PopoverContent
												color="white"
												bg="blue.800"
												borderColor="blue.800"
											>
												<PopoverHeader pt={4} fontWeight="bold" border="0">Edita la tabla</PopoverHeader>
												<PopoverArrow />
												<PopoverCloseButton />
												<PopoverBody>
													<HStack spacing="4">
														<Text>Filas</Text>
														<Spacer />
														<NumberInput value={6}>
															<NumberInputField />
															<NumberInputStepper>
																<NumberIncrementStepper />
																<NumberDecrementStepper />
															</NumberInputStepper>
														</NumberInput>
													</HStack>
													{captions.map((caption, idx) => {
														return (
															<Box my={2}>
																<Tag
																	size="lg"
																	borderRadius="full"
																	variant="solid"
																	colorScheme="green"
																>
																	<TagLabel>{caption}</TagLabel>
																	<TagCloseButton />
																</Tag>
															</Box>
														);
													})}
													<HStack spacing="4">
														<Text>Actualizar cada</Text>
														<NumberInput w={100} value={2}>
															<NumberInputField />
															<NumberInputStepper>
																<NumberIncrementStepper />
																<NumberDecrementStepper />
															</NumberInputStepper>
														</NumberInput>
														<Text>seg</Text>
													</HStack>
												</PopoverBody>
												<PopoverFooter
													border="0"
													display="flex"
													alignItems="center"
													justifyContent="space-between"
													pb={4}
												>
													<Box>
														<Icon w={8} h={8} as={MbbIcon} />
													</Box>
													<ButtonGroup size="sm">
														<Button colorScheme="blue" onClick={onClose}>Actualizar</Button>
													</ButtonGroup>
												</PopoverFooter>
											</PopoverContent>
										</>
									)}
								</Popover>
							</WrapItem>
						</Wrap>
					</Box>
				</Stack>
			</CardHeader>
			<CardBody>
				<Table variant="simple" color={textColor}>
					<Thead>
						<Tr my=".8rem" pl="0px" color="gray.400">
							{captions.map((caption, idx) => {
								return (
									<Th
										color="gray.400"
										textAlign="center"
										key={idx}
										ps={idx === 0 ? "0px" : null}
									>
										{caption}
										{false ? (
											<Input placeholder="Buscar..." />
										) : (
											<Select placeholder="Selecciona opcion">
												<option value="option1">Option 1</option>
												<option value="option2">Option 2</option>
												<option value="option3">Option 3</option>
											</Select>
										)}
									</Th>
								);
							})}
						</Tr>
					</Thead>
					<Tbody>
						{data.map((row) => {
							return (
								<CertificadoTableRow
									key={`${row.email}-${row.name}`}
									name={row.name}
									logo={row.logo}
									email={row.email}
									subdomain={row.subdomain}
									domain={row.domain}
									status={row.status}
									habilitado={row.habilitado}
									date={row.date}
								/>
							);
						})}
					</Tbody>
				</Table>
			</CardBody>
		</Card>
	);
};

export default TableDef;
