import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const config = require('../../data/config.json');

const TableauCategories = () => {
    const [categories, setCategories] = useState('');
    const [dataLoaded, setDataLoaded] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${config.apiURL}/categories`)
            .then(res => res.json())
            .then(data => {
                setDataLoaded(true);
                setCategories(data);
            })
            .catch(err => {console.log(err)})
    }, [])

    const deleteCategorie = (id) => {
        fetch(`${config.apiURL}/categorie/${id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => alert(data.message))
            .catch(err => alert(err))
    }

    const updateCategorie = (categorie) => {
        navigate('/categorie/details', { state: { categorie } });
    }

    return (
        <table className="table">
            <thead className="table-primary">
                <tr>
                    <th>Code</th>
                    <th>Désignation</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                { dataLoaded ?
                    categories.map( (categorie, index) => (
                        <tr key={ index }>
                            <td>{ categorie.code }</td>
                            <td>{ categorie.designation }</td>
                            <td>
                                <a role="button" onClick={ () => updateCategorie(categorie) } href='/categorie/details'>Modifier</a> 
                                <span> | </span>
                                <a role="button" onClick={ () => deleteCategorie(categorie._id) } href="/categories"> Supprimer</a>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td className="text-center" colSpan={2}>
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

export default TableauCategories;