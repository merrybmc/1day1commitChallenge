import { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { Button, Input } from './SearchBar.styled';

const SearchBar = forwardRef((props) => {
  const [inputValue, setInputValue] = useState('');

  const handleOnchange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Container>
      <Input type='text' placeholder='이름 입력' value={inputValue} onChange={(e) => handleOnchange(e)} />
      <Button
        onClick={() => {
          props.onSearchHandler(inputValue);
        }}
      >
        검색
      </Button>
      <Button
        onClick={() => {
          props.onSearchHandler('');
          setInputValue('');
        }}
      >
        초기화
      </Button>
    </Container>
  );
});

export default SearchBar;

const Container = styled.div`
  margin: 0 auto;
  margin-top: 210px;
`;
