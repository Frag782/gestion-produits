import { useState } from "react";

const TableauProduits = ({ _produits }) => {
    const [produits, setProduits] = useState(_produits);

    return (
        <table className="table table-primary">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Libellé</th>
                    <th>Prix</th>
                    <th>Catégories</th>
                </tr>
            </thead>

            <tbody>
                { produits.map( (produit, index) => (
                    <tr>
                        <td>{ produit.code }</td>
                        <td>{ produit.libelle }</td>
                        <td>{ produit.prix } $</td>
                        <td>{ produit.categories.join(',') }</td>
                        <td>
                            <a href="#">Modifier</a> | 
                            <a href="#">Supprimer</a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableauProduits;