import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";

const config = require('../../data/config.json');

const DetailsProduit = () => {
    const { state } = useLocation();
    const produit = state.produit;
    const [code, setCode] = useState(produit.code);
    const [libelle, setLibelle] = useState(produit.libelle);
    const [prix, setPrix] = useState(produit.prix);
    const [categorieId, setCategorieId] = useState(produit.categorie);

    const [listeCategories, setListeCategories] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Détails';

        fetch(`${config.apiURL}/categories`)
            .then(res => res.json())
            .then(data => {
                setListeCategories(data);
                setDataLoaded(true);
            })
            .catch(err => { console.log(err) })
    }, [])

    const updateProduit = (e) => {
        e.preventDefault();

        fetch(`${config.apiURL}/produit/${produit._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code: code,
                libelle: libelle,
                prix: prix,
                categorie: categorieId
            })
        })
            .then(res => res.json())
            .then(data => {
                alert(data.message);
                navigate('/produits');
            })
            .catch(err => alert('Impossible de modifier le produit.'))
    }

    return (
        <>
            <NavigationBar />

            { dataLoaded ? 
            (
                <form className='col-4 offset-4 col-lg-2 offset-lg-5 text-center' onSubmit={updateProduit}>
                    <div className='form-group mb-2'>
                        <input name='code' value={ code } className='form-control' type='text' placeholder="Code" onChange={e => {setCode(e.target.value)}} required></input>
                    </div>
                    <div className='form-group mb-3'>
                        <input name='libelle' value={ libelle } className='form-control' type='text' placeholder='Libellé' onChange={e => {setLibelle(e.target.value)}}></input>
                    </div>
                    <div className='form-group mb-3'>
                        <input name='prix' value={ prix } className='form-control' type='number' placeholder='Prix' onChange={e => {setPrix(e.target.value)}}></input>
                    </div>

                    <select onChange={ e => setCategorieId(e.target.value) }>
                        { listeCategories.map( (item, index) => {
                            return (
                                <option key={ index } value={ item._id }>
                                    { item.designation }
                                </option>
                            )
                        })}
                    </select>

                    <div className='form-group mb-1'>
                        <button type='submit' className='btn btn-success form-control'>Modifier</button>
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

export default DetailsProduit;