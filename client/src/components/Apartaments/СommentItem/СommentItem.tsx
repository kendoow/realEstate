import { FC } from "react";
import { API_URL } from "../../../http/http";

import { CommentItemProps } from "./CommentItem.types";

import styles from './СommentItem.module.scss';

const СommentItem: FC<CommentItemProps> = ({ name,
    date,
    image,
    text }) => {
    return (
        <div className={styles.Container}>
            <img
                width={50}
                height={50}
                src={`${API_URL}${image}`}
                alt="icon"
                className={styles.Img} />
            <div className={styles.Block}>
                <div className={styles.Name}>{name}</div>
                <div className={styles.Date}>{date}</div>
            </div>
            <div className={styles.Text}>{text}</div>
        </div>
    )
}

export default СommentItem;