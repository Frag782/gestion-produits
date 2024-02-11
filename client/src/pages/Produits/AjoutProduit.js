import { useEffect, useState } from 'react';
import NavigationBar from '../../components/NavigationBar';
import { useNavigate } from 'react-router-dom';

const config = require('../../data/config.json');

const AjoutProduit = () => {
    const [code, setCode] = useState('');
    const [libelle, setLibelle] = useState('');
    const [prix, setPrix] = useState('');
    const [categorie, setCategorie] = useState('');

    const [listeCategories, setListeCategories] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Ajout produit';
        
        fetch(`${config.apiURL}/categories`)
            .then(res => res.json())
            .then(data => {
                setListeCategories(data);
                setDataLoaded(true);
            })
            .catch(err => { console.log(err) })
    }, [])

    const createProduct = (e) => {
        e.preventDefault();

        fetch(`${config.apiURL}/produit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code: code,
                libelle: libelle,
                prix: prix,
                categorie: categorie
            })
        })
            .then(res => res.json())
            .then(data => {
                alert('Le produit a été créé avec succès.');
                navigate('/produits');
            })
            .catch(err => alert('Impossible de créer le produit.'))
    }

    return (
        <>
            <NavigationBar />

            { dataLoaded ? 

            (
                <form className='col-4 offset-4 col-lg-2 offset-lg-5 text-center' onSubmit={createProduct}>
                    <div className='form-group mb-2'>
                        <input name='code' className='form-control' type='text' placeholder="Code" onChange={e => {setCode(e.target.value)}} required></input>
                    </div>
                    <div className='form-group mb-2'>
                        <input name='libelle' className='form-control' type='text' placeholder='Libellé' onChange={e => {setLibelle(e.target.value)}}></input>
                    </div>
                    <div className='form-group mb-2'>
                        <input name='prix' className='form-control' type='number' placeholder='Prix' onChange={e => {setPrix(e.target.valueAsNumber)}}></input>
                    </div>

                    <div className='form-group mb-2'>
                        <select value={categorie} onChange={ e => setCategorie(e.target.value) } required>
                            <option value='' disabled>Choisir une catégorie</option>
                            { listeCategories.map( (item, index) => {
                                return (
                                    <option key={ index } value={ item._id }>
                                        { item.designation }
                                    </option>
                                )
                            })}
                        </select>
                    </div>

                    <div className='form-group mb-1'>
                        <button type='submit' className='btn btn-success form-control'>Ajouter</button>
                    </div>
                    <div className='form-group mb-3'>
                        <a className='link-secondary' href='/produits'>Retour à la liste</a>
                    </div>
                </form>
            ) 
            
            : 
            
            (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Chargement...</span>
                </div>
            )}
        </>
    )
}

export default AjoutProduit;