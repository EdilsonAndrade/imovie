import React from 'react';

import Logo from '../Logo';
import Search from '../Search';
import { Container, MenuContent } from './styles';

const Header: React.FC = () => (
  <Container>
    <MenuContent>
      <ul>
        <li>
          <Logo />
        </li>
        <li>
          <Search />
        </li>
      </ul>
    </MenuContent>
  </Container>
);

export default Header;
