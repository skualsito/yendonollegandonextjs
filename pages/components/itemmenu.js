import styles from '../../styles/Shop.module.css'


export default function ItemMenu({data}) {
    data = (data) ? data : {titulo: "", descripcion: "", precios: []};
    return (
        <div className={`${styles["shop-page-menu-item-contenedor"]}`}>
            <div className={`${styles["shop-page-menu-categorias-group"]}`}>
                <div className={`${styles["shop-page-menu-item"]}`}>
                    <h5>{data.titulo}</h5>
                </div>
                <div className={`${styles["shop-page-menu-item-precio"]}`}>
                    {
                        data.precios.map((item, key)=>{
                            return <h5 key={key}>{`$ ${(item) ? item : "-"}`}</h5>
                        })
                    }
                </div>
            </div> 
            <small>{data.descripcion}</small>
        </div>
    )
}