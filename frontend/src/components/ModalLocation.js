import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { FormContainer, Button, Input, InputArea, ModalContainer} from "../styles/global.js";

const Label = styled.label``;


Modal.setAppElement("#root");

const ModalLocation = ({ isOpen, setisOpen, userId})  => {

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
      const [coordinates, setCoordinates] = useState({
        coordinatex: { value: "" },
        coordinatey: { value: "" },
      });

    function closeModal() {
        setisOpen(false);
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!coordinates.coordinatex.value || !coordinates.coordinatey.value) {
            return toast.warn("Preencha todos os campos!")
        }
            await axios.post("http://localhost:3000/api/v1/delivery", {
                customerId: userId,
                coordinateX: coordinates.coordinatex.value,
                coordinateY: coordinates.coordinatey.value
            }).then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        }

    useEffect(()=> {
        const getCoordinates = async ()=> {
            try {
                const res = await axios.get(`http://localhost:3000/api/v1/delivery/${userId}`);
                setCoordinates({
                    coordinatex: { value: res.data.coordinatex },
                    coordinatey: { value: res.data.coordinatey },
                  });
              } catch (error) {
                toast.error(error);
              }
        };
        if (userId) {
            getCoordinates();
        }
    }, [userId])

    return (
        <ModalContainer>
            <Modal isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Location Modal"
                overlayClassName="modal-overlay"
                className="modal-content"
                style={customStyles}
            >
            <FormContainer onSubmit={handleSubmit}>
                <InputArea>
                    <Label>X</Label>
                    <Input 
                        name="coordinatex"
                        value={coordinates.coordinatex.value}
                        onChange={(e) => setCoordinates({ ...coordinates, coordinatex: { value: e.target.value}})}
                    />
                </InputArea>
                <InputArea>
                    <Label>Y</Label>
                    <Input 
                        name="coordinatey"
                        value={coordinates.coordinatey.value}
                        onChange={(e) => setCoordinates({ ...coordinates, coordinatey: { value: e.target.value}})} 
                    />
                </InputArea>
                    <Button onClick={closeModal}>Fechar</Button>
                    <Button type="submit">SALVAR</Button>
            </FormContainer>
            </Modal>
        </ModalContainer>
    );
}

export default ModalLocation;