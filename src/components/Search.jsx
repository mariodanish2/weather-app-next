"use client";

import { FaSearchLocation } from "react-icons/fa";
import styles from '@/styles/search.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from "react";
import Link from "next/link";


export default function Search() {
    const [show, setShow] = useState(false);
    const [cityInput, setCityInput] = useState("");
    const [cities, setCities] = useState([]);

    useEffect(() => {
        if (!show) {
            setCityInput("");
            setCities([]);
        }
    }, [show])

    const submitFN = async e => {
        try {
            e.preventDefault();
            if (!cityInput.length) return;
            const res = await fetch(`/api/locations?city=${cityInput}`);
            if (res.ok) {
                const data = await res.json();
                setCities(data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (<>
        <button className={styles.searchBTN} onClick={() => setShow(prev => !prev)}>
            <span className={styles.text}>search your city here</span>
            <span className={styles.icon}>
                <FaSearchLocation />
            </span>
        </button>
        <AnimatePresence>
            {show ? (
                <motion.div className={styles.searchPopup} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                    <div className={styles.overlay} onClick={() => setShow(false)} ></div>
                    <div className={styles.searchBox}>
                        <form onSubmit={submitFN}>
                            <input type="text" placeholder="Search location name here" value={cityInput} onChange={e => setCityInput(e.target.value)} />
                            <button type="submit"> search </button>
                        </form>
                        <div className={styles.citiesLister}>
                            {
                                cities.length ? (cities?.map((city, i) => (
                                    <Link href={`/?lat=${city.lat}&lon=${city.lon}`} key={i} className={styles.cityCard} onClick={() => setShow(false)}>
                                        <div className={styles.cardName}>{city.name}</div>
                                        <div className={styles.cardSub}>lat: {city.lat}, lon: {city.lon}</div>
                                    </Link>
                                ))
                                ) : <div style={{textAlign:"center"}}>No Cities to show..</div>
                            }
                        </div>
                    </div>
                </motion.div>
            ) : ""}
        </AnimatePresence>
    </>)
}