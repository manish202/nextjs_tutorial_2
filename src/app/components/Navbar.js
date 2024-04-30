// 'use client';
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
// import {useState} from "react";
// import {useRouter} from "next/router";
const Navbar = () => {
    // const [show,chShow] = useState(false);
    // const router = useRouter();
    // console.log(router);
    // const toggle = () => window.innerWidth < 770 && chShow(old => !old);
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/"><h1>Next<span>App</span></h1></Link>
            </div>
            {/* <div className={`${styles.navbar} navbar ${show ? 'active':''}`} onClick={toggle}> */}
            <div className={styles.navbar}>
                <ul>
                    <li><Link href="/">home</Link></li>
                    <li><Link href="/about">about</Link></li>
                    <li><Link href="/movies">movies</Link></li>
                    <li><Link href="/contact">contact</Link></li>
                </ul>
            </div>
            <button className={styles.toggle_btn} type="button"><FaBars /></button>
            {/* <button onClick={toggle} className={styles.toggle_btn} type="button"><FaBars /></button> */}
            {/* <style jsx>{`
                @media (max-width: 770px){
                    .navbar.active{
                        display: flex;
                    }
                }
            `}</style> */}
        </header>
    )
}
export default Navbar;