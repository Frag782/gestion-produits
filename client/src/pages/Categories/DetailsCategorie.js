import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";

const config = require('../../data/config.json');

const DetailsCategorie = () => {
    const { state } = useLocation();
    const categorie = state.categorie;
    const [code, setCode] = useState(categorie.code);
    const [designation, setDesignation] = useState(categorie.designation);

    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Détails';
    }, [])

    const updateCategorie = (e) => {
        e.preventDefault();

        fetch(`${config.apiURL}/categorie/${categorie._id}`, {
            method: 'PUT',
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
                alert(data.message);
                navigate('/categories');
            })
            .catch(err => alert('Impossible de modifier la catégorie.'))
    }

    return (
        <>
            <NavigationBar />
            
            <form className='col-4 offset-4 col-lg-2 offset-lg-5 text-center' onSubmit={updateCategorie}>
                <div className='form-group mb-2'>
                    <input name='code' value={ code } className='form-control' type='text' placeholder="Code" onChange={e => {setCode(e.target.value)}} required></input>
                </div>
                <div className='form-group mb-3'>
                    <input name='designation' value={ designation } className='form-control' type='text' placeholder='Désignation' onChange={e => {setDesignation(e.target.value)}}></input>
                </div>
                <div className='form-group mb-1'>
                    <button type='submit' className='btn btn-success form-control'>Modifier</button>
                </div>
                <div className='form-group mb-3'>
                    <a className='link-secondary' href='/categories'>Retour à la liste</a>
                </div>
            </form>
        </>
    )
}

export default DetailsCategorie;