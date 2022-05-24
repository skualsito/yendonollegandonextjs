import React from 'react'
import styles from '../styles/Home.module.css'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Orden from './components/orden'

let stores = [
  {store: "Bacan Burger", date:"2022-05-19", items:[{name: "Hamburguesa 1", price: 1000}, {name: "Hamburguesa 2", price: 785}]},
  {store: "El Cheff", date:"2022-04-15", items:[{name: "Empanada 1", price: 200}, {name: "Empanada 2", price: 156}, {name: "Empanada 3", price: 156}, {name: "Empanada 4", price: 156}, {name: "Empanada 5", price: 156}, {name: "Empanada 6", price: 156}]},
  {store: "El Gran Choripan II", date:"2022-05-01", items:[{name: "Milanga 1", price: 1000}, {name: "Milanga 2", price: 1250}]}
]

class Home extends React.Component {
  render(){
    return (
      <>
        <header className={styles["header-container"]}>
          <h1>Hola Juan!</h1>
          <div className={styles["header-location"]}>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>San Juan N° 855</span>
          </div>
        </header>
        <div className={`${styles["order-container"]} ${styles["box-primary"]}`}>
          <h2>Mis Ordenes</h2>
          <div className={styles["orders"]}>
            {
              stores.map((item, key) => (
                <Orden key={key} data={item}/>
              ))
            }
            
          </div>
        </div>
      </>
    )
  }

}

export default Home