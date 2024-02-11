import { useState } from "react";

const TableauCategories = ({ _categories }) => {
    const [categories, setCategories] = useState(_categories);

    return (
        <table className="table table-primary">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Désignation</th>
                </tr>
            </thead>

            <tbody>
                { categories.map( (categorie, index) => (
                    <tr>
                        <td>{ categorie.code }</td>
                        <td>{ categorie.designation }</td>
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

export default TableauCategories;