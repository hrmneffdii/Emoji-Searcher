import emoji from '../../assets/happy.svg'
import loop from '../../assets/loop.svg'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <img style={{marginRight: 15}} src={emoji} alt="emot" className={styles.navIcon} />
            <img src={loop} alt="loop"  className={styles.navIcon} />
            <p className={styles.navTitle}>Emoji searcher</p>
        </div>
    )
}

export default Navbar