import React from 'react';
//Styles
import { GlobalStyle } from './GlobalStyle';
//Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
//Routing
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';

const App = () => (
   // <div className="App">
  <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
  </Router>
   
 
 
      // </div>
);

export default App;
