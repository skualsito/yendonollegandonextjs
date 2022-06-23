import styles from '../styles/Home.module.css'
import stylesearch from '../styles/Search.module.css'
import { faBurger, faMagnifyingGlass, faStore, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Search() {
  return (
    <>
      <header className={styles["header-container"]}>
        <h1>Buscar</h1>
        <div className={`${styles["header-search"]} ${styles["box-primary"]}`}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" name="buscador" placeholder="Hamburguesa, pizza, pastas.." />
        </div>
      </header>
      <div className={stylesearch["search-container"]}>
        
        <div className={stylesearch["search-principal-buttons"]}>

          <div className={`${stylesearch["search-button"]} ${stylesearch["delivery"]}`}>
            <FontAwesomeIcon icon={faTruck} />
            <p>Delivery</p>
          </div>

          <div className={`${stylesearch["search-button"]} ${stylesearch["takeaway"]}`}>
            <FontAwesomeIcon icon={faBurger} />
            <p>Take Away</p>
          </div>

          <div className={`${stylesearch["search-button"]} ${stylesearch["onsite"]}`}>
            <FontAwesomeIcon icon={faStore} />
            <p>On Site</p>
          </div>
          
        </div>

      </div>
    </>
  )
}
