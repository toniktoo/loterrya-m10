import styles from './styles.module.scss';

import {
	TYPE_GIFT_1,
	TYPE_GIFT_2,
	TYPE_GIFT_3,
	TYPE_GIFT_4,
	TYPE_GIFT_5,
	TYPE_GIFT_6,
	TYPE_GIFT_7
} from '../Home';

const configName = {
	[TYPE_GIFT_1]: 'AZN 100',
	[TYPE_GIFT_2]: 'AZN 500',
	[TYPE_GIFT_3]: 'Samsung S22',
	[TYPE_GIFT_4]: 'Airpods 3',
	[TYPE_GIFT_5]: 'Apple Watch',
	[TYPE_GIFT_6]: 'Iphone 15',
	[TYPE_GIFT_7]: 'Volkswagen ID4',
}


export const ResultPage = ({ listWinners }) => {

	if (!listWinners) {
		return null
	}
	return (
		<div>
			<div className={styles.Header}>
				<div className={styles.Logo} />
			</div>

			<div className={styles.Main} style={{ paddingTop: 40, paddingBottom: 40 }}>

				<div className={styles.list} >
					<h2>{configName[TYPE_GIFT_1]}</h2>
					<div className={styles.Item}>
						{listWinners[TYPE_GIFT_1].map(((item, index) => (<div className={styles.Row} key={index}>
							<div className={styles.Section}>{index + 1}</div>
							<div className={styles.Section} style={{ minWidth: '8vw' }}>{item}</div>
						</div>)))}
					</div>


					<div className={styles.list}>
						<h2>{configName[TYPE_GIFT_2]}</h2>
						<div className={styles.Item}>
							{listWinners[TYPE_GIFT_2].map(((item, index) => (<div className={styles.Row} key={index}>
								<div className={styles.Section}>{index + 1}</div>
								<div className={styles.Section} style={{ minWidth: '8vw' }}> {item}</div>
							</div>)))}
						</div>
					</div>
				</div>

				<div className={styles.list}>
					<h2>{configName[TYPE_GIFT_3]}</h2>
					<div className={styles.Item}>
						{listWinners[TYPE_GIFT_3].map(((item, index) => (<div className={styles.Row} key={index}>
							<div className={styles.Section}>{index + 1}</div>
							<div className={styles.Section} style={{ minWidth: '8vw' }}>{item}</div>
						</div>)))}
					</div>
				</div>

				<div className={styles.list}>
					<h2>{configName[TYPE_GIFT_4]}</h2>
					<div className={styles.Item}>
						{listWinners[TYPE_GIFT_4].map(((item, index) => (<div className={styles.Row} key={index}>
							<div className={styles.Section}>{index + 1}</div>
							<div className={styles.Section} style={{ minWidth: '8vw' }}> {item}</div>
						</div>)))}
					</div>
				</div>

				<div className={styles.list}>
					<h2>{configName[TYPE_GIFT_5]}</h2>
					<div className={styles.Item}>
						{listWinners[TYPE_GIFT_5].map(((item, index) => (<div className={styles.Row} key={index}>
							<div className={styles.Section}>{index + 1}</div>
							<div className={styles.Section} style={{ minWidth: '8vw' }}>{item}</div>
						</div>)))}
					</div>
				</div>

				<div className={styles.list}>
					<h2>{configName[TYPE_GIFT_6]}</h2>
					<div className={styles.Item}>
						{listWinners[TYPE_GIFT_6].map(((item, index) => (<div className={styles.Row} key={index}>
							<div className={styles.Section}>{index + 1}</div>
							<div className={styles.Section} style={{ minWidth: '8vw' }}> {item}</div>
						</div>)))}
					</div>
				</div>

				<div className={styles.list}>
					<h2>{configName[TYPE_GIFT_7]}</h2>
					<div className={styles.Item}>
						{listWinners[TYPE_GIFT_7].map(((item, index) => (<div className={styles.Row} key={index}>
							<div className={styles.Section}>{index + 1}</div>
							<div className={styles.Section} style={{ minWidth: '8vw' }}>{item}</div>
						</div>)))}
					</div>
				</div>
			</div>
		</div>
	)
}