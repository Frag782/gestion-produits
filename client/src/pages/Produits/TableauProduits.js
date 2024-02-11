import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
const config = require('../../data/config.json');

const TableauProduits = () => {
    const [produits, setProduits] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${config.apiURL}/produits`)
            .then(res => res.json())
            .then(data => {
                setProduits(data);
                setDataLoaded(true);
            })
            .catch(err => {console.log(err)})
    }, [])
    
    const deleteProduit = (id) => {
        fetch(`${config.apiURL}/produit/${id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => alert(data.message))
            .catch(err => alert(err))
    }

    const updateProduit = (produit) => {
        navigate('/produit/details', { state: { produit } });
    }

    return (
        <table className="table">
            <thead className="table-primary">
                <tr>
                    <th>Code</th>
                    <th>Libellé</th>
                    <th>Prix</th>
                    <th>Catégorie (ID)</th>
                    <th></th>
                </tr>
            </thead>

            <tbody> 
                { dataLoaded ?
                    produits.map( (produit, index) => (
                        <tr key={ index }>
                            <td>{ produit.code }</td>
                            <td>{ produit.libelle }</td>
                            <td>{ produit.prix } $</td>
                            <td>{ produit.categorie }</td>
                            <td>
                            <a role="button" onClick={ () => updateProduit(produit) } href='/produit/details'>Modifier</a> 
                                <span> | </span>
                                <a role="button" onClick={ () => deleteProduit(produit._id) } href="/produits"> Supprimer</a>
                            </td>
                        </tr>
                    ))
                    : (
                        <tr>
                            <td className="text-center" colSpan={4}>
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Chargement...</span>
                                </div>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default TableauProduits;