import { useEffect } from "react";
import NavigationBar from "../../components/NavigationBar";
const { apiURL } = require('../../data/config.json');

const Accueil = () => {
    useEffect(() => {
        document.title = 'Accueil'
    }, [])

    return (
        <div>
            <NavigationBar />
            <h3 className="display-3 text-center">Bienvenue</h3>
            <div className="ms-3">
                <p>
                    Bienvenue dans notre outil de gestion de produits.
                </p>
                <p>
                    Voir la <a href={`${apiURL}/api-docs`} target="_blank">documentation</a> de l'API.
                </p>
            </div>
        </div>
    )
}

export default Accueil;