"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "./slide.css";

interface Props {
	images: string[];
	title: string;
	className?: string;
}

export const Slide = ({ images, title, className }: Props) => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
	return (
		<div className={className}>
			<Swiper
				style={
					{
						"--swiper-navigation-color": "#000",
					} as React.CSSProperties
				}
				spaceBetween={10}
				navigation={true}
				autoplay={{
					delay: 4000,
				}}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Navigation, Thumbs, Autoplay]}
				className="mySwiper2"
			>
				{images.map((image) => (
					<SwiperSlide key={image}>
						<Image
							width={768}
							height={600}
							src={`/products/${image}`}
							alt={title}
							className="rounded-lg object-fill"
							priority
						/>
					</SwiperSlide>
				))}
			</Swiper>

			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySwiper"
			>
				{images.map((image) => (
					<SwiperSlide key={image}>
						<Image
							width={150}
							height={150}
							src={`/products/${image}`}
							alt={title}
							className="rounded-lg object-fill hover:cursor-pointer"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
