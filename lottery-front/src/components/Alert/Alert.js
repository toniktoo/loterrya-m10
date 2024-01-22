
import styles from './styles.module.scss'

import ImageMoney100 from '../../assets/alert_100.jpg';
import ImageMoney500 from '../../assets/alert_500.jpg';
import ImageSamsung from '../../assets/samsung.svg';
import ImagePhone from '../../assets/iphone.svg';
import ImageWatch from '../../assets/watch.svg';
import ImageAirpods from '../../assets/airpods.svg';
import ImageCar from '../../assets/car.svg';

import cn from 'classnames';

const TYPE_GIFT_1 = 'money_100';
const TYPE_GIFT_2 = 'money_500';
const TYPE_GIFT_3 = 'samsung';
const TYPE_GIFT_4 = 'airpods';
const TYPE_GIFT_5 = 'watch';
const TYPE_GIFT_6 = 'iphone';
const TYPE_GIFT_7 = 'car';

const ConfigImageCurrentGift = {
	[TYPE_GIFT_1]: {
		path: ImageMoney100,
		name: 'AZN 100'
	},
	[TYPE_GIFT_2]: {
		path: ImageMoney500,
		name: 'AZN 500'
	},
	[TYPE_GIFT_3]: {
		path: ImageSamsung,
		name: 'Samsung S22'
	},
	[TYPE_GIFT_4]: {
		path: ImageAirpods,
		name: 'Airpods 3'
	},
	[TYPE_GIFT_5]: {
		path: ImageWatch,
		name: 'Apple Watch'
	},
	[TYPE_GIFT_6]: {
		path: ImagePhone,
		name: 'Iphone 15'
	},
	[TYPE_GIFT_7]: {
		path: ImageCar,
		name: 'Volkswagen ID4'
	},
}

export const Alert = (props) => {

	const msg = props.message;
	const ImagePathGift = msg.split(',')[0]
	const phoneUser = msg.split(',')[1]
	const countWinner = Number(msg.split(',')[2]) + 1;

	return (
		<div className={styles.Alert} key={phoneUser}>
			<p className={cn(styles.Section, styles.NumberGift)}>{countWinner}</p>
			<p className={cn(styles.Section, styles.NameGift)}>{ConfigImageCurrentGift[ImagePathGift]?.name}</p>
			<p className={cn(styles.Section, styles.Winner)}>{`+${phoneUser}`}</p>
		</div>
	)
}