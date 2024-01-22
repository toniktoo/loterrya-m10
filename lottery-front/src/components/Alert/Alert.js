
import styles from './styles.module.scss'

import { ConfigImageCurrentGift } from '../../pages'

export const Alert = (props) => {

	const msg = props.message;
	const ImagePathGift = msg.split(',')[0]
	const phoneUser = msg.split(',')[1]
	const countWinner = msg.split(',')[2]

	return (
		<div className={styles.Alert} key={phoneUser}>
			<p className={styles.NumberGift}>{countWinner}</p>
			<img src={ConfigImageCurrentGift[ImagePathGift]} width={200} height={200} className={styles.ImageGift} />
			<p className={styles.Winner}>{`+${phoneUser}`}</p>
		</div>
	)
}