import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Loginbar.module.css'

export default function Loginbar() {
  
    return (
    <div className={styles["login-container"]}>
        <div className={styles["login-logo"]}>
            <Link href="/">
                <a>
                    <Image src="/images/logo.jpg" alt="Yendo Logo" width={50} height={45} />
                </a>
            </Link>
        </div>
        <div className={styles["login-menu-container"]}>
            <div className={styles["login-menu-imagen"]}>
                <Image src="/images/avatar.jpg" alt="Yendo Logo" width={50} height={50} />
            </div>
        </div>
    </div>
    )
}