import styles from "./heading.module.scss";

const PageHeading = ({ children }) => {
    return (
        <section className={styles.heading}>
            <div className="container">
                {children}
                <div className={styles.line}></div>
            </div>
        </section>
    )
}

export default PageHeading
