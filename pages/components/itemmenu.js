import React, {useState, useEffect} from 'react';
import styles from '../../styles/Shop.module.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';
import extras from '../extras.json'


export default function ItemMenu({data}) {
    const dispatch = useDispatch();
    const [toggleExtra, settoggleExtra] = useState(false);
    data = (data) ? data : {titulo: "", descripcion: "", precios: []};
    return (
        <div className={`${styles["shop-page-menu-item-contenedor"]}`}>
            <div className={`${styles["shop-page-menu-categorias-group"]}`}>
                <div className={`${styles["shop-page-menu-item"]}`}>
                    <h5>{data.titulo}</h5>
                    <small>{data.descripcion}</small>
                </div>
                <div className={`${styles["shop-page-menu-item-precio"]}`}>
                    {
                        data.precios.map((item, key)=>{
                            return <h5 key={key}>{`$ ${(item) ? item : "-"}`}</h5>
                        })
                    }
                </div>
            </div>
            <div className={`${(toggleExtra == 1) ? styles["activo"] : ""} ${styles["shop-page-menu-extras-backdrop"]}`} onClick={() => settoggleExtra(false)}></div>
            <div className={`${(toggleExtra == 1) ? styles["activo"] : ""} ${styles["shop-page-menu-extras"]}`}>
                <h4>{data.titulo}</h4>
                <div className={styles["shop-page-menu-extras-contenedor-items"]}>
                    {
                        extras.map((item, key)=>{
                            return (
                                <div key={key} className={styles["shop-page-menu-extras-item"]}>
                                    <h5>{item.titulo}</h5>
                                    <span>$ {item.precio}</span>
                                    <div className={styles["shop-page-menu-extras-item-buttons"]}>
                                        <button>-</button>
                                        <p>0</p>
                                        <button>+</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
                <button className={styles["shop-page-btn-agregar"]} onClick={() => {dispatch(addToCart({id:data.titulo, item: data})); settoggleExtra(false)}}>Agregar</button>
            </div>
            <button className={styles["shop-page-btn-agregar"]} onClick={() => settoggleExtra(true)}>Agregar</button>
        </div>
    )
}