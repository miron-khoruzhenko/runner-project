import {ReactComponent as icon1} from '@tg/common/navbar/icon1.svg';
import {ReactComponent as icon2} from '@tg/common/navbar/icon2.svg';
import {ReactComponent as icon3} from '@tg/common/navbar/icon3.svg';
import {ReactComponent as icon4} from '@tg/common/navbar/icon4.svg';
import {ReactComponent as icon5} from '@tg/common/navbar/icon5.svg';

const navbar_items = [
	{
		id: 0,
		name: 'Home',
		icon: icon1,
		href: '/'
	},
	{
		id: 1,
		name: 'Rank',
		icon: icon2,
		href: '/rank'
	},
	{
		id: 2,
		name: 'Referrals',
		icon: icon3,
		href: '/referral'
	},
	{
		id: 3,
		name: 'Tasks',
		icon: icon4,
		href: '/tasks'
	},
	{
		id: 4,
		name: 'Profile',
		icon: icon5,
		href: '/profile'
	}
]

export default navbar_items