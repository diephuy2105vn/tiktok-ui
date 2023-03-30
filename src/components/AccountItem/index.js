import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/05aa222706c452c8ad0ea7d2e719a745~c5_100x100.jpeg?x-expires=1680368400&x-signature=67RdAle2n%2BPLkdnwwU5FP6SREMU%3D"
             alt="Hoa"/>
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>phuonghoa</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('name')}>Đào Lê Phương Hoa</span>
            </div>
        </div>
     );
}

export default AccountItem;