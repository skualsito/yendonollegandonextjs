import React from 'react'
import styles from '../styles/Home.module.css'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



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
        Index
      </>
    )
  }

}

export default Home