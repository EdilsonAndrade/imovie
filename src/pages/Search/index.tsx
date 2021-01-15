import React, { useEffect, useRef, useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { MdCancel } from 'react-icons/md';
import { Container, Content, InputText } from './styles';
import { useMovie } from '../../hooks/movie';

type TClick = boolean | undefined;

const Search: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchText, setSearchText] = useState('');
  const [clicked, setClicked] = useState<TClick>();
  const { searchMovies } = useMovie();

  useEffect(() => {
    if (clicked === true) {
      inputRef.current?.focus();
    }
  }, [clicked]);

  useEffect(() => {
    searchMovies(searchText);
  }, [searchMovies, searchText]);

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
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        searchClicked={clicked}
        ref={inputRef}
        placeholder="Search for a movie"
      />
      {searchText.length > 0

        ? (
          <button
            type="button"
            onClick={() => setSearchText('')}
          >
            <MdCancel size={20} color="#fff" />
          </button>
        )
        : null}

    </Container>
  );
};

export default Search;
