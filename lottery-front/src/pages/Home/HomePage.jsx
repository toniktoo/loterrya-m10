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
								{/** -------------------- step start money 100 -------------------- */}
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
								{
									countWinner === 5 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={5} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 6 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={6} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 7 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={7} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 8 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={8} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 9 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={9} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 10 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={10} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 11 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={11} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 12 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={12} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 13 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={13} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 14 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={14} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 15 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={15} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 16 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={16} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 17 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={17} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 18 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={18} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 19 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={19} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 20 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={20} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 21 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={21} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 22 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={22} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 23 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={23} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 24 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={24} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 25 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={25} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 26 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={26} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 27 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={27} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 28 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={28} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 29 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={29} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 30 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={30} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 31 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={31} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 32 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={32} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 33 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={33} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 34 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={34} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 35 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={35} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 36 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={36} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 37 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={37} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 38 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={38} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 39 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={39} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 40 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={40} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 41 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={41} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 42 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={42} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 43 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={43} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 44 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={44} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 45 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={45} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 46 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={46} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 47 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={47} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 48 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={48} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 49 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={49} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 50 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={50} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 51 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={51} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 52 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={52} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 53 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={53} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 54 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={54} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 55 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={55} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 56 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={56} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 57 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={57} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 58 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={58} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 59 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={59} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 60 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={60} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 61 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={61} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 62 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={62} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 63 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={63} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 64 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={64} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 65 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={65} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 66 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={66} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 67 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={67} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 68 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={68} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 69 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={69} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 70 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={70} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 71 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={71} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 72 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={72} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 73 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={73} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 74 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={74} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 75 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={75} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 76 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={76} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 77 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={77} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 78 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={78} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 79 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={79} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 80 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={80} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 81 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={81} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 82 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={82} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 83 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={83} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 84 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={84} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 85 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={85} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 86 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={86} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 87 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={87} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 88 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={88} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 89 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={89} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 90 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={90} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 91 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={91} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 92 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={92} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 93 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={93} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 94 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={94} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 95 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={95} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 96 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={96} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 97 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={97} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 98 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={98} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 99 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_1} phone={listWinners[TYPE_GIFT_1]} numberWinner={99} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}

								{/** -------------------- step start money 500 -------------------- */}
								{
									countWinner === 100 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_2} phone={listWinners[TYPE_GIFT_2]} numberWinner={0} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 101 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_2} phone={listWinners[TYPE_GIFT_2]} numberWinner={1} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 102 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_2} phone={listWinners[TYPE_GIFT_2]} numberWinner={2} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 103 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_2} phone={listWinners[TYPE_GIFT_2]} numberWinner={3} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 104 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_2} phone={listWinners[TYPE_GIFT_2]} numberWinner={4} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 105 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_2} phone={listWinners[TYPE_GIFT_2]} numberWinner={5} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 106 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_2} phone={listWinners[TYPE_GIFT_2]} numberWinner={6} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 107 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_2} phone={listWinners[TYPE_GIFT_2]} numberWinner={7} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 108 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_2} phone={listWinners[TYPE_GIFT_2]} numberWinner={8} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 109 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_2} phone={listWinners[TYPE_GIFT_2]} numberWinner={9} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{/** ------------------- -step end -------------------- */}
								{/** -------------------- step start -------------------- */}
								{
									countWinner === 110 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_3} phone={listWinners[TYPE_GIFT_3]} numberWinner={0} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 111 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_3} phone={listWinners[TYPE_GIFT_3]} numberWinner={1} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 112 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_3} phone={listWinners[TYPE_GIFT_3]} numberWinner={2} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 113 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_3} phone={listWinners[TYPE_GIFT_3]} numberWinner={3} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 114 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_3} phone={listWinners[TYPE_GIFT_3]} numberWinner={4} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 115 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_3} phone={listWinners[TYPE_GIFT_3]} numberWinner={5} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 116 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_3} phone={listWinners[TYPE_GIFT_3]} numberWinner={6} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 117 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_3} phone={listWinners[TYPE_GIFT_3]} numberWinner={7} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 118 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_3} phone={listWinners[TYPE_GIFT_3]} numberWinner={8} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 119 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_3} phone={listWinners[TYPE_GIFT_3]} numberWinner={9} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{/** ------------------- -step end -------------------- */}
								{/** -------------------- step start -------------------- */}
								{
									countWinner === 120 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4]} numberWinner={0} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 121 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4]} numberWinner={1} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 122 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4]} numberWinner={2} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 123 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4]} numberWinner={3} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 124 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4]} numberWinner={4} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 125 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4]} numberWinner={5} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 126 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4]} numberWinner={6} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 127 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4]} numberWinner={7} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 128 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4]} numberWinner={8} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 129 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_4} phone={listWinners[TYPE_GIFT_4]} numberWinner={9} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{/** ------------------- -step end -------------------- */}
								{/** -------------------- step start -------------------- */}
								{
									countWinner === 130 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_5} phone={listWinners[TYPE_GIFT_5]} numberWinner={0} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 131 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_5} phone={listWinners[TYPE_GIFT_5]} numberWinner={1} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 132 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_5} phone={listWinners[TYPE_GIFT_5]} numberWinner={2} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 133 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_5} phone={listWinners[TYPE_GIFT_5]} numberWinner={3} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 134 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_5} phone={listWinners[TYPE_GIFT_5]} numberWinner={4} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 135 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_5} phone={listWinners[TYPE_GIFT_5]} numberWinner={5} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 136 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_5} phone={listWinners[TYPE_GIFT_5]} numberWinner={6} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 137 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_5} phone={listWinners[TYPE_GIFT_5]} numberWinner={7} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 138 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_5} phone={listWinners[TYPE_GIFT_5]} numberWinner={8} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 139 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_5} phone={listWinners[TYPE_GIFT_5]} numberWinner={9} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{/** ------------------- -step end -------------------- */}
								{/** -------------------- step start -------------------- */}
								{
									countWinner === 140 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_6} phone={listWinners[TYPE_GIFT_6]} numberWinner={0} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 141 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_6} phone={listWinners[TYPE_GIFT_6]} numberWinner={1} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 142 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_6} phone={listWinners[TYPE_GIFT_6]} numberWinner={2} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 143 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_6} phone={listWinners[TYPE_GIFT_6]} numberWinner={3} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 144 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_6} phone={listWinners[TYPE_GIFT_6]} numberWinner={4} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 145 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_6} phone={listWinners[TYPE_GIFT_6]} numberWinner={5} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{
									countWinner === 146 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_6} phone={listWinners[TYPE_GIFT_6]} numberWinner={6} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 147 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_6} phone={listWinners[TYPE_GIFT_6]} numberWinner={7} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 148 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_6} phone={listWinners[TYPE_GIFT_6]} numberWinner={8} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{
									countWinner === 149 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={true} typeGift={TYPE_GIFT_6} phone={listWinners[TYPE_GIFT_6]} numberWinner={9} listWinners={listWinners} setListWinners={setListWinners}
										/>
									)
								}
								{/** ------------------- -step end -------------------- */}
								{/** -------------------- step start -------------------- */}
								{
									countWinner === 150 && (
										<SwiperComponent clientId={clientId} key={countWinner} countWinner={countWinner} setCountWinner={setCountWinner} loopAutoplay={false} typeGift={TYPE_GIFT_7} phone={listWinners[TYPE_GIFT_7]} numberWinner={0} listWinners={listWinners} setListWinners={setListWinners} />
									)
								}
								{/** ------------------- -step end -------------------- */}


								{/** ------------------- -step end -------------------- */}
								{
									countWinner === 151 && (
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