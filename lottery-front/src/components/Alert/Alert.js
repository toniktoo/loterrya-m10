
import styles from './styles.module.scss'

import { ConfigImageCurrentGift } from '../../pages'

export const Alert = (props) => {

	const msg = props.message;
	const ImagePathGift = msg.split(',')[0]
	const phoneUser = msg.split(',')[1]

	return (
		<div className={styles.Alert} key={phoneUser}>
			<p className={styles.NumberGift}>1</p>
			<img src={ConfigImageCurrentGift[ImagePathGift]} width={100} height={100} className={styles.ImageGift} />
			<p className={styles.Winner}>{`+${phoneUser}`}</p>
		</div>
	)
}