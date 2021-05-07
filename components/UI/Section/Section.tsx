import ClassNames from "classnames";

// Styles
import styles from "./section.module.scss";

interface IProps {
    children: React.ReactNode;
    heading: string;
    colour?: "light" | "dark";
    number?: number;
}

const Section = ({ children, colour, heading, number }: IProps) => {
    const classes = ClassNames(
        styles.section,
        colour === "light" ? styles.light : null,
        colour === "dark" ? styles.dark : null,
    )

    return (
        <section className={classes}>
            <div className={styles.grid}>
                <div className={styles.number}>
                    <h5>0{number}</h5>
                </div>
                <div className={styles.content}>
                    <div className="container">
                        <div className={styles.heading}>
                            <div className={styles.line}></div>
                            <h1>{heading}</h1>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section
