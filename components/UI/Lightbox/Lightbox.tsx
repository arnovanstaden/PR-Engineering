import { Fade } from "react-reveal"
import NextImage from "../../UI/NextImage/NextImage";
import Image from "next/image"

// Styles
import styles from "./lightbox.module.scss";

interface IProps {
    image: string;
    toggle: () => void
}

const Lightbox = ({ image, toggle }: IProps) => {

    if (image) {
        document.body.classList.add("noscroll");

        return (
            <Fade duration={500}>
                <div className={styles.box}>
                    <i className="icon-close" onClick={toggle}></i>
                    <div className={styles.overlay} onClick={toggle}>
                        <div className={styles.image}>
                            <NextImage
                                src={image}
                                alt="Enlarged Project Image"
                                priority
                                width={1600}
                            />
                        </div>
                    </div>
                </div>
            </Fade>
        )
    }

    return null

}

export default Lightbox
