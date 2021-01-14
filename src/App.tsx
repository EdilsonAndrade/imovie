import React from 'react';
import GlobalStyles from './styles/global';

import Discover from './pages/Discover';
import Header from './pages/Header';

const App:React.FC = () => (
  <>
    <Header />
    <Discover>
      This is the discover page
    </Discover>
    <GlobalStyles />
  </>
);

export default App;
