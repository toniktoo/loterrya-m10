import styles from './styles.module.scss';

import {
	TYPE_GIFT_1,
	TYPE_GIFT_2,
	TYPE_GIFT_3,
	TYPE_GIFT_4,
	TYPE_GIFT_5,
	TYPE_GIFT_6,
	TYPE_GIFT_7,
	URL_API
} from '../Home';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ClientId } from '../../App';
import { Loader } from '../../components';
import { ConfigImageCurrentGift } from '../../components/Alert/Alert';
import { formatPhoneNumber } from '../../utils';

export const ResultPage = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [listWinners, setListWinners] = useState(null);

	useEffect(() => {
		const id = window.localStorage.getItem(ClientId)
		if (id) {
			setIsLoading(true);
			axios.get(`${URL_API}/get-all-winners/?&clientId=${id}`)
				.then((res) => {
					setListWinners(res?.data)
					setIsLoading(false);
					// localStorage.removeItem(ClientId)
				});
		}
	}, [])


	if (!listWinners) {
		return null
	}

	const winners = listWinners[window.localStorage.getItem(ClientId)]

	return (
		<div>
			{/* <div className={styles.Header}>
				<div className={styles.Logo} />
			</div> */}
			<Loader isLoading={isLoading} />
			{/* <div className={styles.Main} style={{ paddingTop: 40, paddingBottom: 40 }}> */}

				<div className={styles.list} >
					{
						winners?.[TYPE_GIFT_1] && (winners[TYPE_GIFT_1]?.length) && (
							<>
								<h2>{ConfigImageCurrentGift[TYPE_GIFT_1].name}</h2>
								<div className={styles.Item}>
									{winners[TYPE_GIFT_1]?.map(((item, index) => (<div className={styles.Row} key={index}>
										<div className={styles.Section}>{index + 1}</div>
										<div className={styles.Section} style={{ minWidth: '8vw' }}>{formatPhoneNumber(item?.phone)}</div>
									</div>)))}
								</div>
							</>
						)
					}

					{
						winners?.[TYPE_GIFT_2] && (winners[TYPE_GIFT_2]?.length) && (
							<>
								<h2>{ConfigImageCurrentGift[TYPE_GIFT_2].name}</h2>
								<div className={styles.Item}>
									{winners[TYPE_GIFT_2]?.map(((item, index) => (<div className={styles.Row} key={index}>
										<div className={styles.Section}>{index + 1}</div>
										<div className={styles.Section} style={{ minWidth: '8vw' }}>{formatPhoneNumber(item?.phone)}</div>
									</div>)))}
								</div>
							</>
						)
					}

					{
						winners?.[TYPE_GIFT_3] && (winners[TYPE_GIFT_3]?.length) && (
							<>
								<h2>{ConfigImageCurrentGift[TYPE_GIFT_3].name}</h2>
								<div className={styles.Item}>
									{winners[TYPE_GIFT_3]?.map(((item, index) => (<div className={styles.Row} key={index}>
										<div className={styles.Section}>{index + 1}</div>
										<div className={styles.Section} style={{ minWidth: '8vw' }}>{formatPhoneNumber(item?.phone)}</div>
									</div>)))}
								</div>
							</>
						)
					}

					{
						winners?.[TYPE_GIFT_4] && (winners[TYPE_GIFT_4]?.length) && (
							<>
								<h2>{ConfigImageCurrentGift[TYPE_GIFT_4].name}</h2>
								<div className={styles.Item}>
									{winners[TYPE_GIFT_4]?.map(((item, index) => (<div className={styles.Row} key={index}>
										<div className={styles.Section}>{index + 1}</div>
										<div className={styles.Section} style={{ minWidth: '8vw' }}>{formatPhoneNumber(item?.phone)}</div>
									</div>)))}
								</div>
							</>
						)
					}

					{
						winners?.[TYPE_GIFT_5] && (winners[TYPE_GIFT_5]?.length) && (
							<>
								<h2>{ConfigImageCurrentGift[TYPE_GIFT_5].name}</h2>
								<div className={styles.Item}>
									{winners[TYPE_GIFT_5]?.map(((item, index) => (<div className={styles.Row} key={index}>
										<div className={styles.Section}>{index + 1}</div>
										<div className={styles.Section} style={{ minWidth: '8vw' }}>{formatPhoneNumber(item?.phone)}</div>
									</div>)))}
								</div>
							</>
						)
					}

					{
						winners?.[TYPE_GIFT_6] && (winners[TYPE_GIFT_6]?.length) && (
							<>
								<h2>{ConfigImageCurrentGift[TYPE_GIFT_6].name}</h2>
								<div className={styles.Item}>
									{winners[TYPE_GIFT_6]?.map(((item, index) => (<div className={styles.Row} key={index}>
										<div className={styles.Section}>{index + 1}</div>
										<div className={styles.Section} style={{ minWidth: '8vw' }}>{formatPhoneNumber(item?.phone)}</div>
									</div>)))}
								</div>
							</>
						)
					}

					{
						winners?.[TYPE_GIFT_7] && (winners[TYPE_GIFT_7]?.length) && (
							<>
								<h2>{ConfigImageCurrentGift[TYPE_GIFT_7].name}</h2>
								<div className={styles.Item}>
									{winners[TYPE_GIFT_7]?.map(((item, index) => (<div className={styles.Row} key={index}>
										<div className={styles.Section}>{index + 1}</div>
										<div className={styles.Section} style={{ minWidth: '8vw' }}>{formatPhoneNumber(item?.phone)}</div>
									</div>)))}
								</div>
							</>
						)
					}
			
				</div>
			{/* </div> */}
		</div>
	)
}