const logo = require('../assets/logo_nouveau_CR.png');
const { apiURL } = require('../data/config.json')

const NavigationBar = () => {
    return (
        <nav className='navbar bg-light navbar-expand sticky-top mb-3'>
            <a className='navbar-brand' href='/accueil'>
                <img src={logo} height={50} alt="Logo"></img>
            </a>
            <div className='container'>
                <ul className='navbar-nav'>
                <li className='nav-item'>
                        <a className='nav-link' href='/accueil'>Accueil</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/produits'>Produits</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/categories'>Catégories</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href={`${apiURL}/api-docs`} target='_blank'>Documentation</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar;