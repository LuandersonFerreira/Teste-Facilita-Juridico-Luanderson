import { createGlobalStyle, styled } from "styled-components";
import Modal from "react-modal";

const Global = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        font-family: 'poppins', sans-serif;
    }

    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        background-color: #f2f2f2;
    }
`;

const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`;

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
`;

const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

const Teste = styled(Modal)`
    .modal-overlay {
        background: #ececec;
        position: fixed;
    }
`; 

export const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #accc;
    border-radius: 5px;
    max-width: 800px;
    margin: 20px auto;
    word-break: break-all;
`;

export const Tbody = styled.tbody``;

export const Thead = styled.thead``;
export const Tr = styled.tr``;
export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;
    @media (max-width: 500px) {
        ${() => "display: none"}
    }
`;
export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center": "start")};
    width: ${(props) => (props.width ? props.width : "auto")};
`;

export {
    Global,
    FormContainer,
    Button,
    ModalContainer,
    InputArea,
    Input,
    Teste
};