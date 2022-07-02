import stylesHome from '../../styles/Home.module.css'
import styles from '../../styles/Shop.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function ShopItem({data}) {
    data = (data) ? data : {logo: "", titulo: "", descripcion:""};
    var randomnum = Math.floor(Math.random() * (5 - 1) + 1) / 1;
    var randomnum2 = Math.floor(Math.random() * (9 - 1) + 1) / 1;
    return (
    <Link href={`/shops/${encodeURIComponent(data.titulo)}`} >
        <div className={`${styles["shop-item"]} ${stylesHome["box-primary"]}`}>
            <div className={styles["shop-img"]}>
                <Image
                    width={100}
                    height={100}
                    objectFit="cover"
                    src={(data.logo) ? `https://backend.yendonollegando.com/static/shop-logo-${data.logo}` : "/images/noimagen.png"}
                    alt={data.titulo}
                />
            </div>
            <div className={styles["shop-text"]}>
                <h3>{data.titulo}</h3>
                <small>{data.descripcion}</small>
                <span><FontAwesomeIcon icon={faStar} /> {randomnum}.{randomnum2}</span>
            </div>
        </div>
    </Link>
    )
}