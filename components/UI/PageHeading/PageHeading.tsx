import styles from "./heading.module.scss";

const PageHeading = ({ children }) => {
    return (
        <section className={styles.heading}>
            <div className="container">
                {children}
                <hr />
            </div>
        </section>
    )
}

export default PageHeading
