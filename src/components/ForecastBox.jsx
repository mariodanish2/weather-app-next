"use client";

import codeToWeatherIcon from "@/helpers/codeToWeatherIcon";
import { degreeToCompass, kelvinToCelsius, meterToKM, mpsTOKmph, timestampToReadableDateTime } from "@/helpers/converters";
import InfoRow from "./InfoRow";
import styles from '@/styles/forecastBox.module.scss';
import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";



export default function ForeacstBox({ data, timezone }) {
    const [show, setShow] = useState(false);

    return (
        <div className={styles.forecastBox} onClick={() => setShow(prev => !prev)}>
            <div className={styles.btn}>{show ? <FaChevronUp /> : <FaChevronDown />}</div>
            {/* Box Header */}
            <div className={styles.header}>
                <div>{timestampToReadableDateTime(data.dt, timezone)}</div>
            </div>
            {/* Basic Info Box */}
            <div className={styles.basicInfo}>
                <div className={styles.top}>
                    <span>{codeToWeatherIcon(data.weather[0].icon)}</span>
                    <span>{kelvinToCelsius(data.main.temp)} &#8451;</span>
                </div>
                <div className={styles.bttm}>{data.weather[0].description}</div>
            </div>
            {/* Detailed Info Box */}
            <AnimatePresence>
                {
                    show ? (
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity:1, transition: {
                                duration: 0.25
                            }}}
                            exit={{opacity:0}}
                            className={styles.detailedInfo}
                        >
                            <InfoRow label="Feels Like:" value={<>{kelvinToCelsius(data.main.feels_like)} &#8451;</>} tiny />
                            <InfoRow label="Visibility:" value={`${meterToKM(data.visibility)} km`} tiny />
                            <InfoRow label="Wind:" value={`${degreeToCompass(data.wind.deg)} ${mpsTOKmph(data.wind.speed)} km/hr`} tiny />
                            <InfoRow label="Pressure:" value={`${data.main.pressure} hpa`} tiny />
                            <InfoRow label="Humidity:" value={`${data.main.humidity}%`} tiny />
                        </motion.div>
                    ) : ""}
            </AnimatePresence>
        </div>
    )
}
