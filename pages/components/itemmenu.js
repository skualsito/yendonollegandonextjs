import styles from '../../styles/Shop.module.css'


export default function ItemMenu({data}) {
    data = (data) ? data : {titulo: "", descripcion: ""};
    return (
    <div className={`${styles["shop-page-menu-item"]}`}>
        <h5>{data.titulo}</h5>
        <small>{data.descripcion}</small>
    </div>
    )
}