import Image from 'next/image';
import ClassNames from "classnames";

import styles from "./next-image.module.scss";

interface IProps {
    src: string;
    alt: string;
    width?: number;
    background?: boolean
}

// next/image creates unintended image styles. This components rectifies some styles to use the components just like a normal image, but still making use of the optimization & sizing features

const NextImage = ({ src, alt, width, background }: IProps) => {

    if (width) {
        const classes = ClassNames(
            styles.container,
            styles.intrinsic,
            background ? styles.background : null
        )
        return (
            <div className={classes}>
                <Image
                    src={src}
                    alt={alt}
                    layout="intrinsic"
                    className={`Picture of ${styles.image}`}
                    width={width}
                    height="auto"
                />
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <Image
                src={src}
                alt={alt}
                layout="fill"
                className={`Picture of ${styles.image}`}
            />
        </div>
    )
}

export default NextImage
