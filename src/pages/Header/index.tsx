import React, { useState } from 'react';

import Logo from '../Logo';
import Search from '../Search';
import { Container, MenuContent } from './styles';

type IHeader = boolean | undefined;

const Header: React.FC = () => {
  const [clicked, setClicked] = useState<IHeader>();
  return (
    <Container>
      <MenuContent>
        <ul>
          <li>
            <Logo />
          </li>
          <li>
            <button type="button" onClick={() => setClicked(true)} onDoubleClick={() => setClicked(false)}>
              <Search clicked={clicked} />
            </button>
          </li>
        </ul>
      </MenuContent>
    </Container>
  );
};

export default Header;
