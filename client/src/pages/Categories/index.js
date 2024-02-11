import { useEffect } from "react";
import NavigationBar from "../../components/NavigationBar";
import TableauCategories from "./TableauCategories";

const Categories = () => {
    useEffect(() => {
        document.title = 'Catégories';
    }, []);

    return (
        <div>
            <NavigationBar />
            <div className="col-10 offset-1">
                <h4 className="display-4">Catégories</h4>
                <a href="#">Ajouter une catégorie</a>
                <hr />
                <TableauCategories _categories={[]}/>
            </div>
        </div>
    )
}

export default Categories;