import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid gray;
  max-width: 30%;
  margin: 3em auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerInputs = styled.div`
  max-width: 80%;
  margin: 10px;
`;

export const TitleLogin = styled.h2`
  font-family: sans-serif;
  font-weight: 500;
  font-size: 2em;
  margin: 10px;
`;

export const Input = styled.input`
  min-width: 100%;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 5px;
  outline: none;
`;

export const Label = styled.label`
  padding-right: 4px;
  display: block;
  font-size: 0.9em;
  margin: 5px;
  font-weight: bold;
`;

export const BotaoEntrar = styled.button`
  min-width: 100%;
  padding: 7px;
  margin-top: 5px;
  border-radius: 4px;
  background-color: #fae009;
  color: #000000;
`;

export const Links = styled.a`
  font-size: 0.9em;
  font-weight: 500;
  color: blue;
  margin-top: 5px;
  margin-bottom: 4px;
  cursor: pointer;
`;
