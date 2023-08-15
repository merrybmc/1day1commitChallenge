import styled from 'styled-components';

// export const ColumnBox = styled.div`
// display: ;
// `;

export const Container = styled.div`
  width: 100vw;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
`;

export const Wrapper = styled.div`
  width: 30vw;
  padding: 2rem;
  border: 0.0625rem solid black;
  border-radius: 2rem;
  margin-bottom: 1rem;

  box-shadow: 0rem 0rem 0.75rem 0rem rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
`;

export const ProfileBox = styled.div`
  height: 5rem;
  display: flex;
  align-self: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.5rem;
  cursor: default;
`;

export const ImgBox = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
`;

export const ProfileImg = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 100px;
  cursor: pointer;
  transition: all ease 0.1s;
  &:hover {
    width: 5.2rem;
    height: 5.2rem;
    border: 0.2rem solid orange;
  }
`;
