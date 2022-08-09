import styles from '../../styles/Shop.module.css'
import homeStyle from '../../styles/Home.module.css'
import ItemMenu from './itemmenu'
import Image from 'next/image'



export default function ItemRecomendado({data, activo}) {
    data = (data) ? data : {titulo: "", descripcion: "", precio:0};
    return (
        <div className={`${styles["shop-page-menu-item-recomendado"]} ${homeStyle["box-primary"]} ${activo}`}>
            <h1>{data.titulo}</h1>
            <p>$ {data.precio}</p>
            <div className={styles["shop-page-menu-item-recomendado-imagen"]}>
                <Image src={(data.imagen) ? `https://backend.yendonollegando.com/static/shop-back-${data.imagen}` : "/images/noimagen.png"} alt={`Background ${data.titulo}`} layout="fill" objectFit="cover" />
            </div>
        </div>
    )
}