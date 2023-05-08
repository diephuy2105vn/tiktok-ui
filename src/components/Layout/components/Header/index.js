/* eslint-disable react/jsx-no-comment-textnodes */
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import Images from '~/components/Images';
import logo from '~/assets/images';
import { faCircleQuestion, faKeyboard, faUser } from '@fortawesome/free-regular-svg-icons';
import {
	faArrowUpFromBracket,
	faCloudMoon,
	faEarthAsia,
	faEllipsisVertical,
	faGear,
	faSignIn,
} from '@fortawesome/free-solid-svg-icons';
import Menu from '~/components/Popper/Menu';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { Inbox, MessagesIcon } from '~/components/Icons';
import Search from './Search';
// import Menu from '~/components/Popper/Menu';
const cx = classNames.bind(styles);

const MENU = [
	{
		title: 'Language',
		icon: <FontAwesomeIcon icon={faEarthAsia} />,
		children: {
			title: 'Languge',
			data: [
				{
					code: 'en',
					title: 'English',
				},
				{
					code: 'vi',
					title: 'Tiếng Việt',
				},
			],
		},
	},
	{
		icon: <FontAwesomeIcon icon={faCircleQuestion} />,
		title: 'Question',
		to: '/question',
	},
	{
		icon: <FontAwesomeIcon icon={faKeyboard} />,
		title: 'Keyboard  shortcuts',
	},
	{
		icon: <FontAwesomeIcon icon={faCloudMoon} />,
		title: 'Dark mode',
	},
];

const MENU_LOGIN = [
	{
		icon: <FontAwesomeIcon icon={faUser} />,
		title: 'View profile',
		to: '/question',
	},
	{
		icon: <FontAwesomeIcon icon={faBitcoin} />,
		title: 'Get coins',
		to: '/question',
	},
	{
		icon: <FontAwesomeIcon icon={faGear} />,
		title: 'Setting',
		to: '/question',
	},
	...MENU,
	{
		icon: <FontAwesomeIcon icon={faSignIn} />,
		title: 'Log out',
		to: '/question',
		separate: true,
	},
];

const currentUser = true;

function Header() {
	const handleMenuChange = (MenuItem) => {
		console.log(MenuItem);
	};

	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<div className={cx('logo')}>
					<img src={logo.logo} alt="Tiktok" />
				</div>

				<Search />

				<div className={cx('action')}>
					{currentUser ? (
						<>
							<Tippy content="Upload File">
								<button className={cx('action-btn')}>
									<FontAwesomeIcon icon={faArrowUpFromBracket} />
								</button>
							</Tippy>
							<Tippy content="Messages">
								<button className={cx('action-btn')}>
									<MessagesIcon />
								</button>
							</Tippy>
							<Tippy content="Inbox">
								<button className={cx('action-btn')}>
									<Inbox />
								</button>
							</Tippy>
						</>
					) : (
						<>
							<Button text>Upload</Button>
							<Button primary>Log in</Button>
						</>
					)}
					<Menu items={currentUser ? MENU_LOGIN : MENU} onChange={handleMenuChange}>
						{currentUser ? (
							<Images
								src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/10651fdbbe1ac8c132a14d13e95ea29e.jpeg?x-expires=1681088400&x-signature=Pueg867Fr1roOcIqvAYHvHhYCGA%3D"
								className={cx('user-avatar')}
								alt=""
								//fallBack="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/10651fdbbe1ac8c132a14d13e95ea29e.jpeg?x-expires=1681088400&x-signature=Pueg867Fr1roOcIqvAYHvHhYCGA%3D"
							/>
						) : (
							<button className={cx('more-button')}>
								<FontAwesomeIcon icon={faEllipsisVertical} />
							</button>
						)}
					</Menu>
				</div>
			</div>
		</header>
	);
}

export default Header;
