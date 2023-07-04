import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  border: 0.0625rem solid black;
  border-radius: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0rem 0rem 0.75rem 0rem rgba(0, 0, 0, 0.25);
`;

export const ProfileBox = styled.div`
  display: flex;
  align-self: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.5rem;
  cursor: default;
`;

export const ProfileImg = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 100px;
  cursor: pointer;
`;
