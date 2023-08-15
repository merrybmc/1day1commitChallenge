import styled from 'styled-components';

export const Input = styled.input`
  width: 130px;
  height: 32px;
  font-size: 15px;
  border: none;
  border-radius: 15px;
  font-family: 'Cookierun';
  text-align: center;
  margin-right: 10px;
  background-color: rgb(233, 233, 233);
  &:foucs {
    outline: 1px solid black;
  }
`;

export const Button = styled.button`
  background: #fbeaeb;
  font-size: 16px;
  font-family: 'Cookierun';
  padding: 8px 16px;
  margin-right: 10px;
  border-radius: 25%;
  cursor: pointer;

  &:hover {
    background-color: #2e3c7e;
    color: #fbeaeb;
  }
`;
