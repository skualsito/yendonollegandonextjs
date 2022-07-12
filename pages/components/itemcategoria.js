import styles from '../../styles/Shop.module.css'
import ItemMenu from './itemmenu'


export default function ItemCategoria({data}) {
    data = (data) ? data : {titulo: "", descripcion: "", items:[]};
    return (
    <div className={`${styles["shop-page-menu-items-categorias"]} ${styles["box-primary"]}`}>
        <h3>{data.titulo}</h3>
        <small>{data.descripcion}</small>
        <div className={`${styles["shop-page-menu-items"]}`}>
            {
                data.items.map((item, key)=>{
                    return <ItemMenu data={item} key={key}/>
                })
            }
        </div>
    </div>
    )
}