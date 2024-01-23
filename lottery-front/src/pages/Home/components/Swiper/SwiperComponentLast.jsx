import React, { useEffect, useRef, useState, useMemo } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { redirect, useNavigate } from "react-router-dom";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import LightSpeed from 'react-reveal/LightSpeed';

// Import Confetti
import Confetti from 'react-confetti'

import { useAlert } from 'react-alert'

import './styles.css';

import PathImagePhone from '../../../../assets/Phone.svg'
import PathImageM10Logo from '../../../../assets/m10_logo.svg'

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { RoutesConfig } from '../../../../configs';
import { URL_API } from '../../..';
import axios from 'axios';
import { ClientId } from '../../../../App';

export function SwiperComponentLast({  }) {
	const navigate = useNavigate();
	const alert = useAlert();

	useEffect(() => {
		alert.removeAll()
	}, [])

	const swiperRef = useRef(null);

	const handleButtonClickResult = () => {
		const id = window.localStorage.getItem(ClientId)

		axios.get(`${URL_API}/save/?&clientId=${id}`)
			.then((res) => {
				console.log('res save winners', res)
				// localStorage.removeItem(ClientId)
				navigate(RoutesConfig.RESULT)
			});
		
	}

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
					simulateTouch={false}
				>
					{
						Array.from({ length: 20 }, (_, index) => (
							<SwiperSlide key={index}>
								<div className='ContentSlide'>
									<img src={PathImagePhone} height={600} />
									<img src={PathImageM10Logo} height={300} className='M10Logo' />
								</div>
							</SwiperSlide>
						))
					}
				</Swiper>

				<LightSpeed duration={2000}>
					<button className="Button ButtonResult" onClick={handleButtonClickResult} />
				</LightSpeed>
			</div>
		</>
	);
}