import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Accueil from './pages/Accueil';
import Page404 from './pages/Page404';

import Produits from './pages/Produits';
import AjoutProduit from './pages/Produits/AjoutProduit';
import DetailsProduit from './pages/Produits/DetailsProduit';

import Categories from './pages/Categories';
import AjoutCategorie from './pages/Categories/AjoutCategorie';
import DetailsCategorie from './pages/Categories/DetailsCategorie';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/accueil' element={ <Accueil /> }/>
        
        <Route path='/produits' element={ <Produits /> }/>
        <Route path='/produit/ajouter' element={ <AjoutProduit /> }/>
        <Route path='/produit/details' element={ <DetailsProduit /> }/>

        <Route path='/categories' element={ <Categories /> }/>
        <Route path='/categorie/ajouter' element={ <AjoutCategorie /> }/>
        <Route path='/categorie/details' element={ <DetailsCategorie /> }/>
        

        <Route path='/' element={ <Navigate to={ '/accueil' } /> } />
        <Route path='*' element={ <Page404 /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
