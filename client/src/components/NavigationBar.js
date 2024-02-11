const logo = require('../assets/logo_nouveau_CR.png');
const { apiURL } = require('../data/config.json')

const NavigationBar = () => {
    return (
        <nav class='navbar bg-light navbar-expand sticky-top mb-3'>
            <a class='navbar-brand' href='/accueil'>
                <img src={logo} height={50} alt="Logo"></img>
            </a>
            <div class='container'>
                <ul class='navbar-nav'>
                <li class='nav-item'>
                        <a class='nav-link' href='/accueil'>Accueil</a>
                    </li>
                    <li class='nav-item'>
                        <a class='nav-link' href='/produits'>Produits</a>
                    </li>
                    <li class='nav-item'>
                        <a class='nav-link' href='/categories'>Catégories</a>
                    </li>
                    <li class='nav-item'>
                        <a class='nav-link' href={`${apiURL}/api-docs`} target='_blank'>Documentation</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar;