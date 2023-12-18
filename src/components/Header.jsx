import styles from '@/styles/header.module.scss';
import Search from "./Search";

export default function Header(){
    return (
        <div className={styles.header}>
            <div className={styles.logo}>Weather<span style={{color: "rgba(5, 32, 201, 0.8)"}}>Cast</span></div>
            <Search />
        </div>
    )
}