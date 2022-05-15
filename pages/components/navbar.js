import styles from '../../styles/Navbar.module.css'
import { faHouse, faMagnifyingGlass, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from "next/router";
import Link from 'next/link'


let menu = [
    {
        link: "/",
        icon: faHouse,
        text: "Home"
    },
    {
        link: "/search",
        icon: faMagnifyingGlass,
        text: "Buscar"
    },
    {
        link: "/favorite",
        icon: faHeart,
        text: "Favoritos",
        style: 1
    },
    {
        link: "/cart",
        icon: faCartShopping,
        text: "Carrito"
    }
]

export default function Navbar() {
    const router = useRouter()
    const currentRoute = router.pathname
  
    return (
        <div className={styles["menu-container"]}>
        <nav className={styles["menu-nav"]}>
            {
                menu.map((item, key) => (
                    <Link key={key} href={item.link} >
                        <a className={`${styles["menu-button"]} ${(item.style) ? styles["fav"] : ""} ${(currentRoute == item.link) ? styles["activo"] : ""}`}>
                            <FontAwesomeIcon icon={item.icon} />
                            <span>{item.text}</span>
                        </a> 
                    </Link> 
                ))
            }
            
        </nav>
    </div>
    )
}