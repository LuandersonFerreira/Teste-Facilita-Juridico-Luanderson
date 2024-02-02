import axios from "axios";
import { toast } from "react-toastify";
//import { useState } from "react";
import Modal from "react-modal";
import { ModalContainer, Thead, Tr, Th, Tbody, Td, Table} from "../styles/global.js";

Modal.setAppElement("#root");

const ModalDelivery = ({ isOpenDelivery, setIsOpenDelivery, delivery})  => {

    const customStyles = {
        overlay: {
            background: "rgba(0, 0, 0, 0.5)",
          position: "fixed",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      };

    function closeModal() {
        setIsOpenDelivery(false);
    }

    return (
        <ModalContainer>
            <Modal isOpen={setIsOpenDelivery}
                onRequestClose={closeModal}
                contentLabel="Deliverys Modal"
                overlayClassName="modal-overlay"
                className="modal-content"
                style={customStyles}
            >
            <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Telefone</Th>
                    <Th>Coord X</Th>
                    <Th>Coord Y</Th>
                    <Th>Distância</Th>
                </Tr>
            </Thead>
            <Tbody>
                {delivery.map((item, i) => (
                    <Tr key={i}>
                        <Td width="20%">{item.name}</Td>
                        <Td width="30%">{item.telephone}</Td>
                        <Td width="15%">{item.coordinatex}</Td>
                        <Td width="15%">{item.coordinatey}</Td>
                        <Td width="20%">{item.distance}</Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
            </Modal>
        </ModalContainer>
    );
}

export default ModalDelivery;