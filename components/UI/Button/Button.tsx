import Link from "next/link";
import ClassNames from "classnames";

// styles
import styles from "./button.module.scss";

interface IProps {
    link?: string;
    text: string;
    dark?: boolean;
    click?: () => void
}

const Button = ({ link, text, dark, click }: IProps) => {

    const classes = ClassNames(
        styles.button,
        dark ? styles.dark : null,
    )

    const Inner = () => {
        return (
            <button className={classes} onClick={click ? click : null}>
                {text}
            </button>
        )
    }

    if (link) {
        return (
            <Link href={link} >
                <a>
                    <Inner />
                </a>
            </Link >
        )
    }

    return <Inner />
}

export default Button
