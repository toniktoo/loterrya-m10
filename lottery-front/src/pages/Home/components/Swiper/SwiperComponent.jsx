import React, { useEffect, useRef, useState, useMemo } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import Confetti
import Confetti from 'react-confetti'

import { useAlert } from 'react-alert'

import LightSpeed from 'react-reveal/LightSpeed';

import './styles.css';

import PathImagePhone from '../../../../assets/Phone.svg'
import PathImageM10Logo from '../../../../assets/m10_logo.svg'

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { ConfigImageCurrentGift, TYPE_GIFT_7, URL_API } from '../../HomePage';
import axios from 'axios';
import { Loader } from '../../../../components';
import { ClientId } from '../../../../App';

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export function SwiperComponent({ countWinner, setCountWinner, loopAutoplay, typeGift, phone, numberWinner, listWinners, setListWinners, countWinnersForRequest = 1 }) {
	const [play, setPlay] = useState(false);
	const [isPlayFirst, setIsPlayFirst] = useState(false);
	const [isLoadingInitUsers, setIsLoadingInitUsers] = useState(false);
	const [playConfetti, setPlayConfetti] = useState(false);
	const [showPanel, setShowPanel] = useState(false);
	const togglePanel = () => {
		setShowPanel(!showPanel);
	};

	const alert = useAlert()

	const swiperRef = useRef(null);

	const startAutoplay = () => {
		setPlay(true);
		if (!loopAutoplay) {
			alert.removeAll();
		}
	};

	useEffect(() => {
		let t;
		if (play) {
			const clientId = window.localStorage.getItem(ClientId);
			setIsLoadingInitUsers(true)
			axios.get(`${URL_API}/get-count-winners/?count=${numberWinner + 1}&typeGift=${typeGift}&clientId=${clientId}`)
				.then((res) => {
					setIsLoadingInitUsers(false)
					console.log('start 1')
					setListWinners(res?.data)
					setIsPlayFirst(true);
					swiperRef.current.swiper.autoplay.start();
					t = setTimeout(() => {
						togglePanel()
						swiperRef.current.swiper.autoplay.stop();
						setPlay(false);
					}, 3000);
				}).catch(err => {
					console.log('err ловлю эту ошибка', err)
				});
		}
		return () => {
			clearTimeout(t);
		};
	}, [play])

	useEffect(() => {
		let t;
		if (!play && isPlayFirst) {
			setPlayConfetti(true);
			t = setTimeout(() => {
				alert.show(typeGift + ',' + listWinners['0'] + ',' + numberWinner);
				setPlayConfetti(false);
				setCountWinner(prev => prev += 1)
			}, typeGift == TYPE_GIFT_7 ? 10000 : 6000);
		}
		return () => {
			clearTimeout(t);

		};
	}, [play])

	useEffect(() => {
		if (loopAutoplay) {
			startAutoplay()
		}
	}, [loopAutoplay])



	return (
		<>
			<Loader isLoading={isLoadingInitUsers} />
			<div className='ContainerSwiper'>
				<Swiper
					effect={'coverflow'}
					grabCursor={false}
					centeredSlides={true}
					slidesPerView={3}
					coverflowEffect={{
						rotate: -20,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					initialSlide={1}
					pagination={false}
					modules={[EffectCoverflow, Pagination, Autoplay]}
					className="mySwiper"
					ref={swiperRef}
					spaceBetween={10}
					loop={true}
					// speed={900}
					simulateTouch={false}
					autoplay={play ? {
						delay: 100,
						// pauseOnMouseEnter: true
					} : false}
				>
					{
						Array.from({ length: 20 }, (_, index) => (
							<SwiperSlide key={countWinner + index + typeGift}>
								<div className='ContentSlide'>
									<img src={PathImagePhone} height={600} />
									<img src={PathImageM10Logo} height={300} className='M10Logo' />
									<div className={`info-panel ${showPanel ? 'visible' : ''}`}>
										+{listWinners['0']}
									</div>
								</div>
							</SwiperSlide>
						))
					}
				</Swiper>
				<button className="Button ButtonPlay" onClick={startAutoplay} disabled={(play || showPanel)} />
				{
					playConfetti && (
						<Confetti
							width={1050}
							height={700}
							initialVelocityY={1000}
						/>
					)
				}
			</div>
			{!loopAutoplay ? (
				<LightSpeed right duration={2000}>
					<img src={ConfigImageCurrentGift[typeGift]} width="800" height="800" className="ImageCurrentGift" />
				</LightSpeed>
			) : (
				<img src={ConfigImageCurrentGift[typeGift]} width="800" height="800" className="ImageCurrentGift" />
			)}
		</>
	);
}