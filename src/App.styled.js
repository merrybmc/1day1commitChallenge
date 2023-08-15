import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10rem;
  background-color: #ffdfde;
  color: #6a7ba2;
  position: fixed;
  top: 0;
  z-index: 1;
`;

export const Header = styled.header`
  font-family: 'Cookierun';
  font-size: 2.5rem;
  text-align: center;
  cursor: default;
`;
