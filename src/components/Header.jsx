import { FaSearchLocation } from "react-icons/fa";
import styles from '@/styles/header.module.scss';

export default function Header(){
    return (
        <div className={styles.header}>
            <div className={styles.logo}>Weather Cast</div>
            <form className={styles.searchBar}>
                <input type="text" placeholder='Search Here..' className={styles.searchInp} />
                <button type="submit" className={styles.searchBTN}><FaSearchLocation /></button>
            </form>
        </div>
    )
}