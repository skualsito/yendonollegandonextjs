import { useRouter } from 'next/router'
import {useState} from 'react';
import data from '../data.json'
import shop from '../shop.json'
import styles from '../../styles/Shop.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import ItemCategoria from '../components/itemcategoria';


const Shop = () => {
  const router = useRouter()
  const { title } = router.query
  let shopData = data.rows.filter(v=> v.titulo == title)
  shopData = (shopData.length > 0) ? shopData[0] : [{logo: "", titulo: "", descripcionLarga:"", back: "", direccion: ""}][0];


  const [toggleCat, settoggleCat] = useState(false);

  function clickCategoria(key, el) {
    settoggleCat(key)
    el = el.target;
    el.parentNode.scrollTo({
      top: 0,
      left: el.offsetLeft - el.parentNode.offsetLeft,
      behavior: 'smooth'
    });
  }

  return (
        <div className={styles["shop-page-container"]}>
          <header>
            <div className={styles["shop-page-header-background"]}>
              <Image src={`https://backend.yendonollegando.com/static/shop-back-${shopData.back}`} alt={`Background ${title}`} layout="fill" objectFit="cover" />
            </div>
            <div className={styles["shop-page-header-logo"]}>
              <Image src={`https://backend.yendonollegando.com/static/shop-logo-${shopData.logo}`} alt={`Logo ${title}`} width={100} height={100} />
            </div>
          </header>
          <main>
            <h3>{title}</h3>
            <p className={styles["shop-page-descripcion-direccion"]}>
              <FontAwesomeIcon icon={faLocationDot} />
              <a href={`https://www.google.com.ar/maps/place/${shopData.direccion}, San Bernardo del Tuyú, Provincia de Buenos Aires, Argentina`} target="_blank" rel="noreferrer">{shopData.direccion}</a>
            </p>
            <p className={styles["shop-page-descripcion-larga"]}>
            {shopData.descripcionLarga}
            </p>
            <nav className={styles["shop-page-menu-categorias"]}>
              <ul>
              {
                shop[0].menu.map((item, key)=>{
                  return <li key={key} className={(toggleCat == key) ? styles["activo"] : ""} onClick={clickCategoria.bind(this, key)}>{item.titulo}</li>
                })
              }
              </ul>
            </nav>
            <div className={styles["shop-page-menu-items-categorias-container"]}>
              {
                shop[0].menu.map((item, key)=>{
                  
                  return <ItemCategoria key={key} data={item} />
                })
              }
            </div>
          </main>
        </div>
  )
}

export default Shop

