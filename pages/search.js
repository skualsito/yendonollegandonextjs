import styles from '../styles/Home.module.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Search() {
  return (
    <>
      <header className={styles["header-container"]}>
        <h1>Buscar</h1>
        <div className={styles["header-search"]}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" name="buscador" placeholder="Hamburguesa, pizza, pastas.." />
        </div>
      </header>
      Search
    </>
  )
}
