import React, { useEffect, useRef } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { Container, Content, InputText } from './styles';

interface ISearchProps {
  clicked?: boolean
}
const Search: React.FC<ISearchProps> = ({ clicked }: ISearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (clicked === true) {
      inputRef.current?.focus();
    }
  }, [clicked]);

  return (
    <Container searchClicked={clicked}>
      <Content>
        <RiSearchLine color="#7159c1" size={28} />
      </Content>
      <InputText ref={inputRef} />
    </Container>
  );
};

export default Search;
