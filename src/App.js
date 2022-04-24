import React from 'react';
import './App.css';
import NavigationBar from './components/Navbar/NavigationBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import PokemonDetail from './views/PokemonDetail/PokemonDetail';
import MyPokemonsList from './views/MyPokemonList/MyPokemonList';
import { MyPokemonListProvider } from './context/MyPokemonListContext';

function App() {
  const loading = () => (
    <div className="animated fadeIn pt-3 text-center">Loading...</div>
  );

  return (
    <MyPokemonListProvider>
      <div className="bg-light">
        <NavigationBar />
        <BrowserRouter>
          <React.Suspense fallback={loading()}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:name" element={<PokemonDetail />} />
              <Route
                path="/my-pokemon"
                element={<MyPokemonsList />}
              />
            </Routes>
          </React.Suspense>
        </BrowserRouter>
      </div>
    </MyPokemonListProvider>
  );
}

export default App;
