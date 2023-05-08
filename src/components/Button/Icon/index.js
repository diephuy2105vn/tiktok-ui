import classNames from 'classnames/bind';
import styles from './Icon.module.scss';

const cx = classNames.bind(styles);

function Icon({ to, href, small = false, large = false, className, children, onClick }) {
	let Comp = 'button';

	const classes = cx('wrapper', {
		[className]: className,
		small,
		large,
	});
	return <Comp className={classes}>{children}</Comp>;
}

export default Icon;
