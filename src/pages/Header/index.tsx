import React from 'react';
import { RiSearchLine } from 'react-icons/ri';
import Logo from '../Logo';
import { Container, MenuContent } from './styles';

const Header: React.FC = () => (
  <Container>

    <MenuContent>
      <ul>
        <li>
          <Logo />
        </li>
        <li>
          <RiSearchLine color="#fff" size={32} />
        </li>
      </ul>
    </MenuContent>
  </Container>
);

export default Header;
