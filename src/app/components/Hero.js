// 'use client';
import Link from "next/link";
import styles from "@/app/styles/hero.module.css";
// import Image from "next/image";
const Hero = ({title,imgsrc}) => {
    return(
        <section className={styles.hero}>
            <div className={styles.left}>
                <b>Welcome To</b>
                <h1>{title}</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam necessitatibus fugiat molestias quidem vero in quia cumque perferendis libero corporis doloremque voluptatibus temporibus sit, at ad tempore expedita optio aspernatur.
                </p>
                <Link className="my-btn" href="/movies">Watch Movies</Link>
            </div>
            <div className="right">
                <img className={styles.img} src={imgsrc} width={300} height={200} alt="just image"/>
                {/* <Image className={styles.img} src="/pug.webp" width={300} height={200} priority alt="just image"/> */}
            </div>
        </section>
    )
}
export default Hero;