import {Global} from "./styles/global";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./components/Form";
import Grid from "./components/Grid"
import { useEffect, useState } from "react";
import axios from "axios";
import ModalLocation from "./components/ModalLocation";
import ModalDelivery from "./components/ModalDelivery";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  const [ users, setUsers ] = useState([]);
  const [ onEdit, setOnEdit ] = useState(null);
  const [ isOpen, setisOpen ] = useState(false);
  const [ userId, setUserId ] = useState(null);
  const [ isOpenDelivery, setIsOpenDelivery ] = useState(false);
  const [ delivery, setDelivery ] = useState([]);


  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/customers");
      setUsers(res.data.sort((a,b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  const getDelivery = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/delivery/");
      setDelivery(res.data);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect (() => {
    getUsers();
    getDelivery();
  }, [setUsers]);

  return (
    <>
      <Container>
        <Title>Clientes</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} isOpenDelivery={isOpenDelivery} setIsOpenDelivery={setIsOpenDelivery}/>
        <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit} isOpen={isOpen} setisOpen={setisOpen} setUserId={setUserId}/>
        {isOpen && <ModalLocation isOpen={isOpen} setisOpen={setisOpen} userId={userId} />}
        {isOpenDelivery && <ModalDelivery isOpenDelivery={isOpenDelivery} setIsOpenDelivery={setIsOpenDelivery} delivery={delivery}/>}
      </Container>
      <ToastContainer autoClose={3000}/>
      <Global/>
    </>
  );
}

export default App;
