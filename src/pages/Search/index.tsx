import React, { useEffect, useRef, useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { MdCancel } from 'react-icons/md';
import { Container, Content, InputText } from './styles';

type TClick = boolean | undefined;

const Search: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState('');
  const [clicked, setClicked] = useState<TClick>();

  useEffect(() => {
    if (clicked === true) {
      inputRef.current?.focus();
    }
  }, [clicked]);

  return (
    <Container searchClicked={clicked}>
      <Content>
        <button
          type="button"
          onClick={() => setClicked(true)}
          onDoubleClick={() => setClicked(false)}
        >
          <RiSearchLine
            color="#7159c1"
            size={28}
          />
        </button>
      </Content>
      <InputText
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        searchClicked={clicked}
        ref={inputRef}
        placeholder="Search for a movie"
      />
      {search.length > 0

        ? (
          <button
            type="button"
            onClick={() => setSearch('')}
          >
            <MdCancel size={20} color="#fff" />
          </button>
        )
        : null}

    </Container>
  );
};

export default Search;
