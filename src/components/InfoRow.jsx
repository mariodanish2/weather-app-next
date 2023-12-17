import styles from '@/styles/info-row.module.scss';

export default function InfoRow({ label, value, stripped=false }) {
    return (
        <div className={`${styles.info_row} ${stripped ? styles.stripped : ""}`}>
            <span className={styles.label}>{label}</span>
            <span className={styles.value}>{value}</span>
        </div>
    )
}