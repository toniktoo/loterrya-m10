import { useState, useEffect } from "react";

import styles from './styles.module.scss'
import { SwiperComponent, SwiperComponentLast } from "./components";

import ImageMoney100 from '../../assets/100.svg';
import ImageMoney500 from '../../assets/500.svg';
import ImageSamsung from '../../assets/samsung.svg';
import ImagePhone from '../../assets/iphone.svg';
import ImageWatch from '../../assets/watch.svg';
import ImageAirpods from '../../assets/airpods.svg';
import ImageCar from '../../assets/car.svg';
import { Loader } from "../../components";
import axios from "axios";

export const URL_API = 'http://45.135.164.125:3009'
// export const URL_API = 'http://localhost:3009'

export const TYPE_GIFT_DEFAULT = 'default';
export const TYPE_GIFT_1 = 'money_100';
export const TYPE_GIFT_2 = 'money_500';
export const TYPE_GIFT_3 = 'samsung';
export const TYPE_GIFT_4 = 'airpods';
export const TYPE_GIFT_5 = 'watch';
export const TYPE_GIFT_6 = 'iphone';
export const TYPE_GIFT_7 = 'car';

export const ConfigImageCurrentGift = {
	[TYPE_GIFT_1]: ImageMoney100,
	[TYPE_GIFT_2]: ImageMoney500,
	[TYPE_GIFT_3]: ImageSamsung,
	[TYPE_GIFT_4]: ImageAirpods,
	[TYPE_GIFT_5]: ImageWatch,
	[TYPE_GIFT_6]: ImagePhone,
	[TYPE_GIFT_7]: ImageCar,
}

export const HomePage = () => {
	const [statusPage, toggleStatusPage] = useState('init');
	const [countWinner, setCountWinner] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [listWinners, setListWinners] = useState(null);

	console.log('listWinners', listWinners)

	useEffect(() => {
		setIsLoading(true);
		axios(`${URL_API}/init`)
			.then(_ => {
				axios(`${URL_API}/get-winners`)
					.then(res => {
						setListWinners(JSON.parse(res.data));
						setIsLoading(false);
					});
			})
	}, [])


	const handlePlay = async () => {
		try {
			toggleStatusPage('play');
		} finally {
		}
	}

	return (
		<div>
			<div className={styles.Header}>
				<div className={styles.Logo} />
			</div>

			<Loader isLoading={isLoading} />

			<div className={styles.Main}>
				{
					statusPage === 'init' && (
						<>
							<div className={styles.ImageAllGifts} />
							<button className={styles.ButtonStart} onClick={handlePlay} />
						</>
					)
				}
				{
					statusPage === 'play' && (
						<>
							<div className={styles.ContainerSwiper}>
								{/** s-------------------- step start -------------------- */}
								{
									countWinner === 0 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1][countWinner]} numberWinner={1} />
									)
								}
								{
									countWinner === 1 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1][countWinner]} numberWinner={2} />
									)
								}
								{/* {
									countWinner === 2 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1][countWinner]} numberWinner={3} />
									)
								}
								{
									countWinner === 3 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1][countWinner]} numberWinner={4} />
									)
								}
								{
									countWinner === 4 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1][countWinner]} numberWinner={5} />
									)
								} */}
								{/** ------------------- -step end -------------------- */}

								{/** s-------------------- step start -------------------- */}
								{
									countWinner === 2 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_2} phone={listWinners[TYPE_GIFT_2][countWinner]} numberWinner={1} />
									)
								}
								{
									countWinner === 3 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_2} phone={listWinners[TYPE_GIFT_2][countWinner]} numberWinner={2} />
									)
								}
								{/* {
									countWinner === 7 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_2} phone={listWinners[TYPE_GIFT_2][countWinner]} numberWinner={3} />
									)
								}
								{
									countWinner === 8 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_2} phone={listWinners[TYPE_GIFT_2][countWinner]} numberWinner={4} />
									)
								}
								{
									countWinner === 9 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_2} phone={listWinners[TYPE_GIFT_2][countWinner]} numberWinner={5} />
									)
								} */}
								{/** ------------------- -step end -------------------- */}

								{/** s-------------------- step start -------------------- */}
								{
									countWinner === 4 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_3} phone={listWinners[TYPE_GIFT_3][countWinner]} numberWinner={1} />
									)
								}
								{
									countWinner === 5 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_3} phone={listWinners[TYPE_GIFT_3][countWinner]} numberWinner={2} />
									)
								}
								{/* {
									countWinner === 12 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_3} phone={listWinners[TYPE_GIFT_3][countWinner]} numberWinner={3} />
									)
								}
								{
									countWinner === 13 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_3} phone={listWinners[TYPE_GIFT_3][countWinner]} numberWinner={4} />
									)
								}
								{
									countWinner === 14 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_3} phone={listWinners[TYPE_GIFT_3][countWinner]} numberWinner={5} />
									)
								} */}
								{/** ------------------- -step end -------------------- */}

								{/** s-------------------- step start -------------------- */}
								{
									countWinner === 6 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4][countWinner]} numberWinner={1} />
									)
								}
								{
									countWinner === 7 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4][countWinner]} numberWinner={2} />
									)
								}
								{/* {
									countWinner === 17 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4][countWinner]} numberWinner={3} />
									)
								}
								{
									countWinner === 18 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4][countWinner]} numberWinner={4} />
									)
								}
								{
									countWinner === 19 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4][countWinner]} numberWinner={5} />
									)
								} */}
								{/** ------------------- -step end -------------------- */}

								{/** s-------------------- step start -------------------- */}
								{
									countWinner === 8 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_5} phone={listWinners[TYPE_GIFT_5][countWinner]} numberWinner={1} />
									)
								}
								{
									countWinner === 9 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_5} phone={listWinners[TYPE_GIFT_5][countWinner]} numberWinner={2} />
									)
								}
								{/* {
									countWinner === 17 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4][countWinner]} numberWinner={3} />
									)
								}
								{
									countWinner === 18 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4][countWinner]} numberWinner={4} />
									)
								}
								{
									countWinner === 19 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4][countWinner]} numberWinner={5} />
									)
								} */}
								{/** ------------------- -step end -------------------- */}

								{/** s-------------------- step start -------------------- */}
								{
									countWinner === 10 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_6} phone={listWinners[TYPE_GIFT_6][countWinner]} numberWinner={1} />
									)
								}
								{
									countWinner === 11 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_6} phone={listWinners[TYPE_GIFT_6][countWinner]} numberWinner={2} />
									)
								}
								{/* {
									countWinner === 17 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4][countWinner]} numberWinner={3} />
									)
								}
								{
									countWinner === 18 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4][countWinner]} numberWinner={4} />
									)
								}
								{
									countWinner === 19 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4][countWinner]} numberWinner={5} />
									)
								} */}
								{/** ------------------- -step end -------------------- */}

								{/** s-------------------- step start -------------------- */}
								{
									countWinner === 12 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_7} phone={listWinners[TYPE_GIFT_7][countWinner]} numberWinner={1} />
									)
								}
								{
									countWinner === 13 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_7} phone={listWinners[TYPE_GIFT_7][countWinner]} numberWinner={2} />
									)
								}
								{/* {
									countWinner === 17 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4][countWinner]} numberWinner={3} />
									)
								}
								{
									countWinner === 18 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4][countWinner]} numberWinner={4} />
									)
								}
								{
									countWinner === 19 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4][countWinner]} numberWinner={5} />
									)
								} */}
								{/** ------------------- -step end -------------------- */}




								{
									countWinner === 14 && (
										<SwiperComponentLast />
									)
								}
							</div>
						</>
					)
				}
			</div>
		</div>
	)
}