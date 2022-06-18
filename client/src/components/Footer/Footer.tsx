import { FC } from "react";

import styles from './Footer.module.scss';

import logo from '../../assets/Main/logo.svg';
import gpc from '../../assets/Main/gpc.svg';

const Footer: FC = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.Block}>
                <h2 className={styles.Title}>Меню навигации</h2>
                <button className={styles.Btn}>Главная</button>
                <button className={styles.Btn}>Избранное</button>
                <button className={styles.Btn}>Популярное</button>
                <button className={styles.Btn}>Личный кабинет</button>
            </div>
            <div className={styles.Block}>
                <h2 className={styles.Title}>Контакты</h2>
                <a href='tel:+79999998877' className={styles.Contacts}>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.08622 0.0507014C3.71701 0.143787 3.34374 0.352892 2.96194 0.680579C2.53857 1.04393 1.01476 2.58672 0.766721 2.90316C-0.238597 4.18563 -0.255475 6.17986 0.717168 8.75117C1.90544 11.8925 4.13162 15.0769 6.94683 17.6624C10.8292 21.228 16.0246 23.5388 18.7032 22.8914C19.0999 22.7955 19.7595 22.489 20.0625 22.2598C20.3667 22.0298 22.4085 19.9425 22.5981 19.6678C22.9485 19.16 23.0837 18.4803 22.9483 17.907C22.7969 17.2659 22.747 17.2046 20.7814 15.2461C18.7995 13.2713 18.7388 13.2226 18.0825 13.0846C17.5657 12.976 17.0377 13.0718 16.527 13.3668C16.4079 13.4356 15.849 13.9457 15.285 14.5004L14.2596 15.509L13.9311 15.3388C13.1242 14.9208 12.529 14.5194 11.6395 13.7933C10.726 13.0476 9.45295 11.7366 8.75014 10.8179C8.24243 10.1543 7.49042 8.92795 7.48826 8.76008C7.48785 8.72788 7.83937 8.35963 8.26941 7.94178C9.17066 7.06606 9.52787 6.65639 9.72919 6.26773C9.98354 5.77662 10.0322 5.15821 9.85705 4.64408C9.6791 4.12173 9.51103 3.92386 7.78503 2.20448C6.07871 0.504751 5.81691 0.281301 5.33248 0.11105C4.99153 -0.00874732 4.43006 -0.0359534 4.08622 0.0507014ZM5.13157 1.31127C5.25983 1.38434 5.97929 2.06616 6.94977 3.03434C8.707 4.78749 8.77234 4.87001 8.77004 5.33355C8.76797 5.74474 8.66191 5.88675 7.48199 7.05855C6.88776 7.64863 6.36962 8.19302 6.33058 8.26825C6.27977 8.36615 6.26456 8.49274 6.27701 8.713C6.29258 8.98722 6.32837 9.0879 6.60411 9.63297C7.22659 10.8633 8.04728 11.9473 9.40484 13.3323C10.7562 14.711 12.1006 15.737 13.4844 16.4455C13.9789 16.6987 14.0723 16.7315 14.2968 16.7301C14.4512 16.7291 14.6121 16.6965 14.7083 16.6467C14.7952 16.6017 15.3538 16.0829 15.9496 15.4938C16.7187 14.7334 17.0918 14.3962 17.2358 14.331C17.5064 14.2087 17.8593 14.2091 18.1061 14.3319C18.3795 14.468 21.5665 17.6404 21.7092 17.9185C21.7867 18.0696 21.8163 18.2016 21.8163 18.397C21.8163 18.8581 21.7227 18.9852 20.4402 20.2676C19.1702 21.5375 19.0523 21.6235 18.376 21.7734C17.7246 21.9178 16.6276 21.8029 15.5158 21.4737C13.8253 20.9733 11.548 19.7757 9.6763 18.4026C6.06851 15.7561 2.97263 11.7167 1.68728 7.97874C1.0764 6.20221 1.00857 4.92905 1.47445 3.98448C1.62279 3.68369 1.75475 3.53214 2.69441 2.58316C3.27388 1.9979 3.82677 1.4647 3.92303 1.39824C4.32663 1.11952 4.74245 1.08962 5.13157 1.31127Z" fill="#C9B087" />
                    </svg>
                    <p>+7 999 999 88 77</p>
                </a>
                <a href="mailto:Mail@gmail.com" className={styles.Contacts}>
                    <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.55253 0.0640904C1.17439 0.157711 0.891319 0.31758 0.606188 0.598618C0.312523 0.888099 0.134995 1.20686 0.0532142 1.59161C-0.0182821 1.92787 -0.0174737 14.0755 0.0540675 14.4061C0.218572 15.1666 0.847577 15.7893 1.61086 15.9475C1.94962 16.0177 21.0523 16.0174 21.3892 15.9472C22.1513 15.7884 22.7878 15.1588 22.9471 14.4061C23.0183 14.0693 23.0173 1.92139 22.946 1.59161C22.7804 0.826293 22.1584 0.210541 21.3892 0.0504939C21.0261 -0.0250865 1.85962 -0.0119343 1.55253 0.0640904ZM16.3277 5.64678C13.9318 8.01883 11.917 9.98832 11.8503 10.0234C11.7836 10.0585 11.626 10.0872 11.5 10.0872C11.3741 10.0872 11.2165 10.0585 11.1497 10.0234C11.083 9.98832 9.06821 8.01883 6.67232 5.64678L2.31617 1.33394H11.5H20.6839L16.3277 5.64678ZM4.25829 10.8759L1.35043 13.7528V7.99888V2.2449L4.25829 5.12189L7.16615 7.99888L4.25829 10.8759ZM21.6496 8.00994V13.7528L18.7418 10.8759L15.834 7.99897L18.7304 5.133C20.3235 3.5567 21.632 2.26703 21.6383 2.26703C21.6445 2.26703 21.6496 4.85134 21.6496 8.00994ZM9.16126 10.013C10.1268 10.9582 10.2515 11.0649 10.577 11.2238L10.934 11.398H11.4977C12.057 11.398 12.0642 11.3967 12.416 11.2305C12.7444 11.0753 12.8495 10.9855 13.8433 10.01L14.916 8.95703L17.8 11.8104L20.684 14.6638H11.5001H2.31626L5.19021 11.8201C6.7709 10.2561 8.07279 8.9764 8.0833 8.9764C8.0938 8.9764 8.57887 9.44286 9.16126 10.013Z" fill="#C9B087" />
                    </svg>
                    <p >Mail@gmail.com</p>
                </a >

            </div>
            <div className={styles.BlockLogo}>
                <img src={logo} />
                <img src={gpc} className={styles.Gpc} />
            </div>
        </div>
    )
}

export default Footer;