import { useEffect } from "react";
import NavigationBar from "../../components/NavigationBar";
import TableauProduits from "./TableauProduits";

const Produits = () => {
    useEffect(() => {
        document.title = 'Produits';
    }, []);

    return (
        <div>
            <NavigationBar />
            <div className="col-10 offset-1">
                <h4 className="display-4">Produits</h4>
                <a href="#">Ajouter un produit</a>
                <hr />
                <TableauProduits _produits={[]}/>
            </div>
        </div>
    )
}

export default Produits;