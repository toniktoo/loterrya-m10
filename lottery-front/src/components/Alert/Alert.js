
import styles from './styles.module.scss'

import ImageMoney100 from '../../assets/alert_100.jpg';
import ImageMoney500 from '../../assets/alert_500.jpg';
import ImageSamsung from '../../assets/samsung.svg';
import ImagePhone from '../../assets/iphone.svg';
import ImageWatch from '../../assets/watch.svg';
import ImageAirpods from '../../assets/airpods.svg';
import ImageCar from '../../assets/car.svg';

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
		styleImage: {
			left: '3.4vw',
			width: '8vw',
			height: '5vh',
			top: '0.7vh'
		},
		styleAlert: {
			height: '6vh',
		}
	},
	[TYPE_GIFT_2]: {
		path: ImageMoney500,
		styleImage: {
			left: '3.4vw',
			width: '8vw',
			height: '5vh',
			top: '0.7vh'
		},
		styleAlert: {
			height: '6vh',
		}
	},
	[TYPE_GIFT_3]: {
		path: ImageSamsung,
		styleImage: {
			top: '-13.8vh',
			left: '3.4vw',
			width: '7vw',
			height: '400px'
		},
		styleAlert: {
			height: '6.5vh',
			width: '18vw',
		}
	},
	[TYPE_GIFT_4]: {
		path: ImageAirpods,
		styleImage: {
			top: '-13.8vh',
			left: '3.4vw',
			width: '7vw',
			height: '400px'
		},
		styleAlert: {
			height: '6.5vh',
			width: '18vw',
		}
	},
	[TYPE_GIFT_5]: {
		path: ImageWatch,
		styleImage: {
			top: '-13.8vh',
			left: '3.4vw',
			width: '7vw',
			height: '400px'
		},
		styleAlert: {
			height: '6.5vh',
			width: '18vw',
		}
	},
	[TYPE_GIFT_6]: {
		path: ImagePhone,
		styleImage: {
			top: '-13.8vh',
			left: '3.4vw',
			width: '7vw',
			height: '400px'
		},
		styleAlert: {
			height: '6.5vh',
			width: '18vw',
		}
	},
	[TYPE_GIFT_7]: {
		path: ImageCar,
		styleImage: {
			top: '-13.8vh',
			left: '3.4vw',
			width: '7vw',
			height: '400px'
		},
		styleAlert: {
			height: '6.5vh',
			width: '18vw',
		}
	},
}

export const Alert = (props) => {

	const msg = props.message;
	const ImagePathGift = msg.split(',')[0]
	const phoneUser = msg.split(',')[1]
	const countWinner = Number(msg.split(',')[2]) + 1;

	return (
		<div className={styles.Alert} key={phoneUser} style={ConfigImageCurrentGift[ImagePathGift]?.styleAlert}>
			<p className={styles.NumberGift}>{countWinner}</p>
			<img src={ConfigImageCurrentGift[ImagePathGift].path} className={styles.ImageGift} style={ConfigImageCurrentGift[ImagePathGift]?.styleImage}/>
			<p className={styles.Winner}>{`+${phoneUser}`}</p>
		</div>
	)
}