import React from "react";
import styled from "styled-components";
import axios from "axios";
import { FaTrash, FaEdit, FaMap } from "react-icons/fa";
import { toast } from "react-toastify";
import { Thead, Tr, Th, Tbody, Td, Table } from "../styles/global.js";

const Grid = ( { users, setUsers, setOnEdit, isOpen, setisOpen, setUserId }) => {

    const handleEdit = (item) => {
        setOnEdit(item);
      };

    const handleDelete = async (id) => {
        await axios.delete("http://localhost:3000/api/v1/customers/" + id)
        .then(({ data }) => {
            const newArray = users.filter((user) => user.id !== id);

            setUsers(newArray);
            toast.success(data);
        })
        .catch(({ data }) => toast.error(data));

        setOnEdit(null);
    };

    const handleLocation = (id) => {
        setUserId(id);
        setisOpen(true);
    }

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>email</Th>
                    <Th>Telefone</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {users.map((item, i) => (
                    <Tr key={i}>
                        <Td width="30%">{item.name}</Td>
                        <Td width="30%">{item.email}</Td>
                        <Td width="30%">{item.telephone}</Td>
                        <Td alignCenter width="5%">
                            <FaEdit onClick={() => handleEdit(item)}/>
                        </Td>
                        <Td alignCenter width="5%">
                            <FaTrash onClick={() => handleDelete(item.id)}/>
                        </Td>
                        <Td alignCenter width="5%">
                            <FaMap onClick={() => handleLocation(item.id)}/>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export default Grid;