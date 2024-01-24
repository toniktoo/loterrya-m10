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
import { ClientId } from "../../App";
import { ResultPage } from "../Result";

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

export const HomePage = ({ listWinners, setListWinners }) => {
	const [statusPage, setStatusPage] = useState('init');
	const [countWinner, setCountWinner] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [clientId, setClientId] = useState(null);
	const uniqueId = String(Math.random());

	const handlePlay = async () => {
		try {
			window.localStorage.setItem(ClientId, uniqueId);
			setStatusPage('play');
		} finally {
		}
	}

	const style = statusPage === 'result' && { overflowY: 'auto', height: 'inherit' }

	return (
		<div>
			<div className={styles.Header}>
				<div className={styles.Logo} />
			</div>

			{/* <Loader isLoading={isLoading} /> */}

			<div className={styles.Main} style={{ ...style }}>
				{
					statusPage == 'init' && (
						<>
							<div className={styles.ImageAllGifts} />
							<button className={styles.ButtonStart} onClick={handlePlay} />
						</>
					)
				}
				{
					statusPage == 'result' && (
						<ResultPage />
					)
				}
				{
					statusPage === 'play2' && (
						<div className={styles.ContainerSwiper}>
							{/** -------------------- step start -------------------- */}
							{
								countWinner === 0 && (
									<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={0} listWinners={listWinners} setListWinners={setListWinners} />
								)
							}
							{
								countWinner === 1 && (
									<SwiperComponentLast setStatusPage={setStatusPage} />
								)
							}
						</div>
					)
				}
				{
					statusPage === 'play' && (
						<>
							<div className={styles.ContainerSwiper}>
								{/** -------------------- step start -------------------- */}
								{
									countWinner === 0 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={0} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 1 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={1} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 2 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={2} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 3 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={3} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 4 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={4} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}

								{/** -------------------- step start -------------------- */}
								{
									countWinner === 5 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_2} phone={listWinners[TYPE_GIFT_2]} numberWinner={0} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 6 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_2} phone={listWinners[TYPE_GIFT_2]} numberWinner={1} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 7 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_2} phone={listWinners[TYPE_GIFT_2]} numberWinner={2} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 8 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_2} phone={listWinners[TYPE_GIFT_2]} numberWinner={3} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 9 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_2} phone={listWinners[TYPE_GIFT_2]} numberWinner={4} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{/** ------------------- -step end -------------------- */}
								{/** -------------------- step start -------------------- */}
								{
									countWinner === 10 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_3} phone={listWinners[TYPE_GIFT_3]} numberWinner={0} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 11 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_3} phone={listWinners[TYPE_GIFT_3]} numberWinner={1} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 12 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_3} phone={listWinners[TYPE_GIFT_3]} numberWinner={2} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 13 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_3} phone={listWinners[TYPE_GIFT_3]} numberWinner={3} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 14 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_3} phone={listWinners[TYPE_GIFT_3]} numberWinner={4} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{/** ------------------- -step end -------------------- */}
								{/** -------------------- step start -------------------- */}
								{
									countWinner === 15 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4]} numberWinner={0} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 16 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4]} numberWinner={1} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 17 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4]} numberWinner={2} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 18 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4]} numberWinner={3} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 19 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4]} numberWinner={4} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{/** ------------------- -step end -------------------- */}
								{/** -------------------- step start -------------------- */}
								{
									countWinner === 20 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_5} phone={listWinners[TYPE_GIFT_5]} numberWinner={0} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 21 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_5} phone={listWinners[TYPE_GIFT_5]} numberWinner={1} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 22 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_5} phone={listWinners[TYPE_GIFT_5]} numberWinner={2} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 23 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_5} phone={listWinners[TYPE_GIFT_5]} numberWinner={3} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 24 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_5} phone={listWinners[TYPE_GIFT_5]} numberWinner={4} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{/** ------------------- -step end -------------------- */}
								{/** -------------------- step start -------------------- */}
								{
									countWinner === 25 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_6} phone={listWinners[TYPE_GIFT_6]} numberWinner={0} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 26 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_6} phone={listWinners[TYPE_GIFT_6]} numberWinner={1} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 27 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_6} phone={listWinners[TYPE_GIFT_6]} numberWinner={2} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 28 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_6} phone={listWinners[TYPE_GIFT_6]} numberWinner={3} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 29 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_6} phone={listWinners[TYPE_GIFT_6]} numberWinner={4} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{/** ------------------- -step end -------------------- */}
								{/** -------------------- step start -------------------- */}
								{
									countWinner === 30 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_7} phone={listWinners[TYPE_GIFT_7]} numberWinner={0} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{/** ------------------- -step end -------------------- */}


								{/** ------------------- -step end -------------------- */}
								{
									countWinner === 31 && (
										<SwiperComponentLast setStatusPage={setStatusPage} />
									)
								}
							</div>
						</>
					)
				}
			</div>
		</div >
	)
}