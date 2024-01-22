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
import { ConfigImageCurrentGift } from '../../HomePage';


export function SwiperComponent({ countWinner, setCountWinner, loopAutoplay, typeGift, phone, numberWinner }) {
	const [play, setPlay] = useState(false);
	const [isPlayFirst, setIsPlayFirst] = useState(false);
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
			setIsPlayFirst(true);
			swiperRef.current.swiper.autoplay.start();
			t = setTimeout(() => {
				togglePanel()
				swiperRef.current.swiper.autoplay.stop();
				setPlay(false);
			}, 3000);
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
				alert.show(typeGift + ',' + phone[numberWinner] + ',' + numberWinner);
				setPlayConfetti(false);
				setCountWinner(prev => prev += 1)
			}, 5000);
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
							<SwiperSlide key={countWinner + index}>
								<div className='ContentSlide'>
									<img src={PathImagePhone} height={600} />
									<img src={PathImageM10Logo} height={300} className='M10Logo' />
									<div className={`info-panel ${showPanel ? 'visible' : ''}`}>
										+{phone[numberWinner]}
									</div>
								</div>
							</SwiperSlide>
						))
					}
				</Swiper>
				<button className="Button ButtonPlay" onClick={startAutoplay} disabled={(play || showPanel)}/>
				{
					playConfetti && (
						<Confetti
							width={900}
							height={700}
							initialVelocityY={1000}
						/>
					)
				}
			</div>
			{!loopAutoplay ? (
				<LightSpeed right>
					<img src={ConfigImageCurrentGift[typeGift]} width="800" height="800" className="ImageCurrentGift" />
				</LightSpeed>
			) : (
				<img src={ConfigImageCurrentGift[typeGift]} width="800" height="800" className="ImageCurrentGift" />
			)}
		</>
	);
}