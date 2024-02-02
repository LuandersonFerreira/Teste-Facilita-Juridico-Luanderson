import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";
import {Button, FormContainer, Input, InputArea} from "../styles/global"

const Label = styled.label``;


const Form = ({ getUsers, onEdit, setOnEdit, isOpenDelivery, setIsOpenDelivery })  => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const user = ref.current;

            user.name.value = onEdit.name;
            user.email.value = onEdit.email;
            user.telephone.value = onEdit.telephone;
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = ref.current; 

        if (
            !user.name.value ||
            !user.email.value ||
            !user.telephone.value
        ) {
            return toast.warn("Preencha todos os campos!")
        }
        if (onEdit) {
            await axios.put("http://localhost:3000/api/v1/customers/" + onEdit.id, {
                name: user.name.value,
                email: user.email.value,
                telephone: user.telephone.value
            }).then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        } else {
            await axios.post("http://localhost:3000/api/v1/customers/", {
                name: user.name.value,
                email: user.email.value,
                telephone: user.telephone.value
            }).then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        }

        user.name.value = "";
        user.email.value = "";
        user.telephone.value = "";

        setOnEdit(null);
        getUsers();
    }

    const handleDelivery = () => {
        setIsOpenDelivery(true);
        console.log(isOpenDelivery)
    }

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="name" />
            </InputArea>
            <InputArea>
                <Label>E-mail</Label>
                <Input name="email" />
            </InputArea>
            <InputArea>
                <Label>Telefone</Label>
                <Input name="telephone" />
            </InputArea>
            <Button type="submit">Salvar</Button>
            <Button onClick={(e) => { e.preventDefault(); handleDelivery() }}>Rota sugerida</Button>
        </FormContainer>
    );
}

export default Form;