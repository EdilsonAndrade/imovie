import React from 'react';
import GlobalStyles from './styles/global';
import { MovieProvider } from './hooks/movie';
import Discover from './pages/Discover';
import Header from './pages/Header';

const App:React.FC = () => (
  <MovieProvider>
    <Header />
    <Discover />
    <GlobalStyles />
  </MovieProvider>

);

export default App;
