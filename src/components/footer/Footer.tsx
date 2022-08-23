import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import './estilo.css'

export default function Footer() {

    return (
        <footer>
            <span>Desenvolvido por Davidson <FontAwesomeIcon icon={faHeart} className="icone" /> </span>
        </footer>
    )
}