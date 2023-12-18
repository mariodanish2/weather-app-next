import { FaSearchLocation } from "react-icons/fa";
import styles from '@/styles/header.module.scss';
import Search from "./Search";

export default function Header(){
    return (
        <div className={styles.header}>
            <div className={styles.logo}>Weather Cast</div>
            <Search />
        </div>
    )
}