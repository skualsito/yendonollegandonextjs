import { useRouter } from 'next/router'
import data from '../data.json'
import styles from '../../styles/Shop.module.css'

const Shop = () => {
  const router = useRouter()
  const { title } = router.query
  let shopData = data.rows.filter(v=> v.titulo == title)
  shopData = (shopData.length > 0) ? shopData : [{logo: "", titulo: "", descripcion:""}];

  return (
        <div className={styles["shop-page-container"]}>
          <h3>Shop: {title}</h3>
          <p>Data: {shopData[0].descripcion}</p>
        </div>
  )
}

export default Shop