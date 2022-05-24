import styles from '../../styles/Home.module.css'
import moment from 'moment'
import 'moment/locale/es-mx'

moment.locale('es-mx')


export default function Orden({data}) {
    data = (data) ? data : {store: "", date: "", items:[]};
    return (
    <div className={`${styles["order"]} ${styles["box-primary"]}`}>
        <div className={styles["order-text"]}>
            <h3>{data.store}</h3>
            <small>{moment(data.date).startOf('day').fromNow()}</small>
            <span>{data.items.length} Items</span>
        </div>
        <p>$ {data.items.reduce((prev, curr)=>{return prev + curr.price}, 0)}</p>
    </div>
    )
}