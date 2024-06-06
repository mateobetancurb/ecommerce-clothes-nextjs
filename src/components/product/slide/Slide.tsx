"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
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
						"--swiper-navigation-color": "#fff",
						"--swiper-pagination-color": "#fff",
					} as React.CSSProperties
				}
				spaceBetween={10}
				navigation={true}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Navigation, Thumbs]}
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
						xw
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
