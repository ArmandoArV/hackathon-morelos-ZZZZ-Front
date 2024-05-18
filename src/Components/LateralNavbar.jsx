import React, { useState, useCallback, useEffect } from "react";
import {Link} from 'react-router-dom'
import styles from "./lateralNavbar.css";
import { lateralNavbarItems,routes } from "../constants";

const LateralNavbar = ({ lateralNavbar, logo }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button onClick={toggleNavbar} className={styles.toggleButton}>
                {isOpen ? (
                    <p className={styles.openCloseButton}>←</p>
                ) : (
                    <p className={styles.openCloseButton}>☰</p>
                )}
            </button>

            <div className={`${styles.lateralNavbar} ${isOpen ? styles.open : ""}`}>
                <Link href={routes.projects}>
                    <img src={logo || ""} alt="Logo" className={styles.logo} />
                </Link>
                <ul>
                    {Object.keys(lateralNavbarItems).map((section) => {
                        const sectionItems = Object.keys(lateralNavbarItems[section]).filter(
                            (item) => {
                                
                            }
                        );

                        if (sectionItems.length === 0) {
                            return null;
                        }

                        return (
                            <li key={section}>
                                <p className={styles.sectionTitle}>{section}</p>
                                <ul className={styles.sectionValue}>
                                    {sectionItems.map((item) => {
                                        const { link} = lateralNavbarItems[section][item];
                                        return (
                                            <Link href={link} key={item}>
                                                <li>
                                                    {item}
                                                </li>
                                            </Link>
                                        );
                                    })}
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default LateralNavbar;
