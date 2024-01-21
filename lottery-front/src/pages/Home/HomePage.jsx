import { useState, useEffect } from "react";

import styles from './styles.module.scss'
import { SwiperComponent, SwiperComponentLast } from "./components";

import ImageMoney100 from '../../assets/100.svg';
import ImageMoney500 from '../../assets/500.svg';
import ImageSamsung from '../../assets/samsung.svg';
import ImagePhone from '../../assets/Phone.svg';
import ImageWatch from '../../assets/watch.svg';
import ImageAirpods from '../../assets/watch.svg';
import ImageCar from '../../assets/car.svg';
import { Loader } from "../../components";
import axios from "axios";

export const URL_API = 'http://localhost:4000'

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
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1][countWinner]} />
									)
								}
								{
									countWinner === 1 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1][countWinner]} />
									)
								}
								{
									countWinner === 2 && (
										<SwiperComponent key={countWinner} ountWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1][countWinner]} />
									)
								}
								{
									countWinner === 3 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1][countWinner]} />
									)
								}
								{
									countWinner === 4 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1][countWinner]} />
									)
								}
								{/** ------------------- -step end -------------------- */}

								{/** s-------------------- step start -------------------- */}
								{
									countWinner === 5 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_2} phone={listWinners[TYPE_GIFT_2][countWinner]} />
									)
								}
								{
									countWinner === 6 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_2} phone={listWinners[TYPE_GIFT_2][countWinner]} />
									)
								}
								{
									countWinner === 7 && (
										<SwiperComponent key={countWinner} ountWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_2} phone={listWinners[TYPE_GIFT_2][countWinner]} />
									)
								}
								{
									countWinner === 8 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_2} phone={listWinners[TYPE_GIFT_2][countWinner]} />
									)
								}
								{
									countWinner === 9 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_2} phone={listWinners[TYPE_GIFT_2][countWinner]} />
									)
								}
								{/** ------------------- -step end -------------------- */}

								{/** s-------------------- step start -------------------- */}
								{
									countWinner === 10 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_3} phone={listWinners[TYPE_GIFT_3][countWinner]} />
									)
								}
								{
									countWinner === 11 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_3} phone={listWinners[TYPE_GIFT_3][countWinner]} />
									)
								}
								{
									countWinner === 12 && (
										<SwiperComponent key={countWinner} ountWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_3} phone={listWinners[TYPE_GIFT_3][countWinner]} />
									)
								}
								{
									countWinner === 13 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_3} phone={listWinners[TYPE_GIFT_3][countWinner]} />
									)
								}
								{
									countWinner === 14 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_3} phone={listWinners[TYPE_GIFT_3][countWinner]} />
									)
								}
								{/** ------------------- -step end -------------------- */}

								{/** s-------------------- step start -------------------- */}
								{
									countWinner === 15 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4][countWinner]} />
									)
								}
								{
									countWinner === 16 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4][countWinner]} />
									)
								}
								{
									countWinner === 17 && (
										<SwiperComponent key={countWinner} ountWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4][countWinner]} />
									)
								}
								{
									countWinner === 18 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4][countWinner]} />
									)
								}
								{
									countWinner === 19 && (
										<SwiperComponent key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4][countWinner]} />
									)
								}
								{/** ------------------- -step end -------------------- */}

								
								{
									countWinner === 20 && (
										<SwiperComponentLast />
									)
								}


								{/* {
									countWinner === 0 && (
										<SwiperComponent key={0} ind={0} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_1} />
									)
								}
								{
									countWinner === 1 && (
										<SwiperComponent key={1} ind={1} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} />
									)
								}
								{
									countWinner === 2 && (
										<SwiperComponent key={2} ind={2} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_2} />
									)
								}
								{
									countWinner === 3 && (
										<SwiperComponentLast />
									)
								} */}



								{/* {
									countWinner === 3 && (
										<SwiperComponent setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_2} />
									)
								}
								{
									countWinner === 4 && (
										<SwiperComponent setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_3} />
									)
								}
								{
									countWinner === 5 && (
										<SwiperComponent setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_4} />
									)
								}
								{
									countWinner === 6 && (
										<SwiperComponent setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_5} />
									)
								}
								{
									countWinner === 7 && (
										<SwiperComponent setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_6} />
									)
								}
								{
									countWinner === 8 && (
										<SwiperComponent setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_7} />
									)
								}
								{
									countWinner === 9 && (
										<SwiperComponent countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_7} />
									)
								} */}
							</div>
						</>
					)
				}
			</div>
		</div>
	)
}