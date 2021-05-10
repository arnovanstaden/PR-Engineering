import ClassNames from "classnames";

// Styles
import styles from "./heading.module.scss";

interface IProps {
    children: React.ReactNode,
    dark?: boolean;
}

const PageHeading = ({ children, dark }: IProps) => {

    const classes = ClassNames(
        styles.heading,
        dark ? styles.dark : null
    )

    return (
        <section className={classes}>
            <div className="container">
                {children}
                <hr />
            </div>
        </section>
    )
}

export default PageHeading
