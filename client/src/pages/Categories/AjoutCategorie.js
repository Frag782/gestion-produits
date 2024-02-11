import { useEffect, useState } from 'react';
import NavigationBar from '../../components/NavigationBar';
import { useNavigate } from 'react-router-dom';

const config = require('../../data/config.json');

const AjoutCategorie = () => {
    const [code, setCode] = useState('');
    const [designation, setDesignation] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Ajout catégorie';
    })

    const createCategory = (e) => {
        e.preventDefault();

        fetch(`${config.apiURL}/categorie`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code: code,
                designation: designation
            })
        })
            .then(res => res.json())
            .then(data => {
                alert('La catégorie a été créée avec succès.');
                navigate('/categories');
            })
            .catch(err => alert('Impossible de créer la catégorie.'))
    }

    return (
        <>
            <NavigationBar />

            <form class='col-4 offset-4 col-lg-2 offset-lg-5 text-center' onSubmit={createCategory}>
                <div class='form-group mb-2'>
                    <input name='code' class='form-control' type='text' placeholder="Code" onChange={e => {setCode(e.target.value)}} required></input>
                </div>
                <div class='form-group mb-3'>
                    <input name='designation' class='form-control' type='text' placeholder='Désignation' onChange={e => {setDesignation(e.target.value)}}></input>
                </div>
                <div class='form-group mb-1'>
                    <button type='submit' class='btn btn-success form-control'>Ajouter</button>
                </div>
                <div class='form-group mb-3'>
                    <a class='link-secondary' href='/categories'>Retour à la liste</a>
                </div>
            </form>
        </>
    )
}

export default AjoutCategorie;