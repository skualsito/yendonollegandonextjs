import styles from '../../styles/Shop.module.css'
import homeStyle from '../../styles/Home.module.css'
import ItemMenu from './itemmenu'


export default function ItemCategoria({data}) {
    data = (data) ? data : {titulo: "", descripcion: "", precios:[], items:[]};
    return (
    <div className={`${styles["shop-page-menu-items-categorias"]} ${homeStyle["box-primary"]}`}>
        <div className={`${styles["shop-page-menu-categorias-group"]}`}>
            <div id={encodeURIComponent(data.titulo)} className={`${styles["shop-page-menu-categoria-titulo"]}`}>
                <h3>{data.titulo}</h3>
                <small>{data.descripcion}</small>
            </div>
            <div className={`${styles["shop-page-menu-precios"]}`}>
                {
                    data.precios.map((item, key)=>{
                        return <h3 key={key}>{item}</h3>
                    })
                }
            </div>
        </div>
        
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