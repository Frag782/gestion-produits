import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Accueil from './pages/Accueil';
import Produits from './pages/Produits';
import Categories from './pages/Categories';
import Page404 from './pages/Page404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/accueil' element={ <Accueil /> }/>
        <Route path='/produits' element={ <Produits /> }/>
        <Route path='/categories' element={ <Categories /> }/>
        <Route path='/' element={ <Navigate to={ '/accueil' } /> } />
        <Route path='*' element={ <Page404 /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
