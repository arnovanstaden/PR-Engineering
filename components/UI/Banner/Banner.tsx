import { Parallax } from 'react-parallax';
import ClassNames from "classnames";

import styles from "./banner.module.scss"

interface IProps {
    children: React.ReactNode;
    dark?: boolean
    img: string
    blur?: boolean
}

const Banner = ({ children, dark, img, blur }: IProps) => {

    const classes = ClassNames(
        styles.banner,
        dark ? styles.dark : null
    )

    return (
        <div className={classes}>
            <Parallax strength={200} blur={blur ? { min: -10, max: 15 } : 0} bgImage={img} bgImageAlt="the cat">
                <div className={styles.inner}>
                    <div className="container">
                        <div className={styles.grid}>
                            <div></div>
                            <div className={styles.content}>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
            <div className={styles.overlay}></div>
        </div>
    )
}

export default Banner
